import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import ListarReceitas from './screens/ListarReceitas'
import CriarReceita from './screens/CriarReceita'
import DetalheReceita from './screens/DetalheReceita'

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="CriarReceita" component={CriarReceita}/>
      <Stack.Screen name="ListarReceitas" component={ListarReceitas}/>
      <Stack.Screen name="DetalheReceita" component={DetalheReceita}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
