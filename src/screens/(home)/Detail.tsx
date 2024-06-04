import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  DetailScreenNavigationProp,
  DetailScreenRouteProp,
} from '../../../types/NavigationParams'
import { API_ACCESS_TOKEN, API_URL } from '../../../types/constant'
const DetailScreen = (): JSX.Element => {
  const route = useRoute<DetailScreenRouteProp>()
  const navigation = useNavigation<DetailScreenNavigationProp>()
  const fetchData = (): void => {
    // Gantilah dengan akses token Anda
    const ACCESS_TOKEN = API_ACCESS_TOKEN

    const URL = API_URL as string

 
    if (ACCESS_TOKEN == null || URL == null) {
      throw new Error('ENV not found')
    }
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }

    fetch(URL, options)
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <View>
      <Text>{route.params.id}</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData()
        }}
      />
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
