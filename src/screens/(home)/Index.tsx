import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../../types/NavigationParams'
const HomeScreen = ():JSX.Element => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Pergi ke Detail"
        onPress={() => navigation.navigate('Detail',{
            id:12
        })}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})