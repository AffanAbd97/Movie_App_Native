import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import StackNavigation from '../navigations/StackNavigation'
import type { MovieListProps } from '../../types/app'
import MovieList from '../components/movies/MovieList'

function Home(): JSX.Element {
  return <StackNavigation />
}

export default Home
