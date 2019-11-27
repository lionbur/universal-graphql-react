import gql from 'graphql-tag'
import { importSchema } from 'graphql-import'
import path from 'path'
import getConfig from 'next/config'

import resolvers from './resolvers'
const { serverRuntimeConfig } = getConfig()

export default {
  typeDefs: gql(importSchema(path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    './src/apollo/schema/queries/getEntries.graphql'
  ))),
  resolvers,
}
