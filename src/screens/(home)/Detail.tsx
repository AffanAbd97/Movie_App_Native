import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DetailScreenNavigationProp, DetailScreenRouteProp } from '../../../types/NavigationParams'
const DetailScreen = ():JSX.Element => {
    const route = useRoute<DetailScreenRouteProp>()
    const navigation = useNavigation<DetailScreenNavigationProp>()
  return (
    <View>
      <Text>{route.params.id}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})