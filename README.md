# Nougit Test

This is a demonstration of my full-stack coding capabilities.

This project show the following feautres:

* React server side rendering with `next.js`
* Webpack configuration to allow picking up different module variations for different targets (`.client.js` or `.server.js`)
* Webpack configuration to avoid relative path mess. I use `src/` notations (from project root) as I believe it's more clear these are project local modules.
* `GraphiQL` schema definition using `.graphql` files (for back-end)
* `GraphQL API` integrated into the back-end: use `http://localhost/api/graphql` in order to access `GraphiQL UI`
* Routing using `next/router` by filter bar
* `Styled-components` enabled with `next.js` by overriding `pages/_document.js`
* A refechable React hook which encapsulates all functionality (look at `useEntries` hook)
* `End to End` server UI testing by `cypress`

## How to run

### Setup
First make sure to install all dependencies:
```
yarn
```
or
```
npm install
```

### Run

```
yarn dev
```
or
```
npm run dev
```

# Build
```
yarn build
```
or
```
npm run build
```

# Serve
You will need to build first and then:
```
yarn serve
```
or
```
npm run serve
```

# Test
End to End test
```
yarn test
```
or
```
npm run test
```

## Main Directories
* `src` \
You will find main source code here
* `pages` \
You will find `next.js` entries point here
* `pages/api` \
`GraphQL API` is implemented here
* `data` \
The DB is actually a simple JSON local file
* `cypress/integration` \
Tests can be found here

## Contact Me
At [lionbur@gmail.com](mailto:lionbur@Gmail.com)
