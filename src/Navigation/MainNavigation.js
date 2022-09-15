import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomScreen from '../Screens/BottomScreen';
const Stack = createNativeStackNavigator();
import React from 'react'
import Home from '../Screens/Home';

const MainNavigation = () => {
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bottom" component={BottomScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})