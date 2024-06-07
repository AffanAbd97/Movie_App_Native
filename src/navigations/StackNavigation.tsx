import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../screens/(home)/Index'
import DetailScreen from '../screens/(home)/Detail'

import FavoriteScreen from '../screens/FavoriteScreen'

const Stack = createNativeStackNavigator()
function HomeStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
function FavoriteStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="FavoriteScreen">
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export { HomeStackNavigation, FavoriteStackNavigation }
