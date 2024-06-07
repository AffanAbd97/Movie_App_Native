import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import KeywordSearch from '../components/search/KeywordSearch'
import CategorySearch from '../components/search/CategorySearch'
import { SearchStackNavigation } from '../navigations/StackNavigation'


const Search = (): JSX.Element => {
 

  return (
   <SearchStackNavigation/>
  )
}


export default Search