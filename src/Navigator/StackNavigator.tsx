import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { HomeScreen, Pagina1Screen, Pagina2Screen, Pagina3Screen } from '../screen';

const Stack=createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
        <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
        <Stack.Screen name="HomPagina3Screene" component={Pagina3Screen} />
   </Stack.Navigator>
  )
}
