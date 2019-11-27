import React from 'react'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'

import schema from './schema'

export async function withApolloHelper ({ ctx, ssr, AppTree, pageProps, apolloClient }) {
  // When redirecting, the response is finished.
  // No point in continuing to render
  if (ctx.res && ctx.res.finished) {
    return pageProps
  }

  // Only if ssr is enabled
  if (ssr) {
    try {
      // Run all GraphQL queries
      const { getDataFromTree } = await import('@apollo/react-ssr')
      await getDataFromTree(
        <AppTree
          pageProps={{
            ...pageProps,
            apolloClient,
          }}
        />
      )
    } catch (error) {
      // Prevent Apollo Client GraphQL errors from crashing SSR.
      // Handle them in components via the data.error prop:
      // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
      console.error('Error while running `getDataFromTree`', error)
    }

    // getDataFromTree does not call componentWillUnmount
    // head side effect therefore need to be cleared manually
    Head.rewind()
  }
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
export function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
    
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: false,
    link: new SchemaLink({
      schema: makeExecutableSchema(schema)
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}
