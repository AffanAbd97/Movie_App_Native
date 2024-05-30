

import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Detail: { id: number }
}

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>


export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>
