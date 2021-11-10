import './src/styles/global.css'

import React from 'react'

import { ApolloProvider } from '@apollo/client'
import { client } from './src/utils/apollo'

export function wrapPageElement({ element }) {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
