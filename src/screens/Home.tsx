import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import type { MovieListProps } from '../../types/app'
import MovieList from '../components/movies/MovieList'
import { HomeStackNavigation } from '../navigations/StackNavigation'

function Home(): JSX.Element {
  return <HomeStackNavigation />
}

export default Home
