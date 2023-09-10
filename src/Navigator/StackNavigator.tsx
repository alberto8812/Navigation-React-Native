import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { HomeScreen, Pagina1Screen, Pagina2Screen, Pagina3Screen, PersonaScreen } from '../screen';


export type RootStackParams={
  HomeScreen:undefined;
  Pagina1Screen:undefined;
  Pagina2Screen:undefined;
  Pagina3Screen:undefined;
  PersonaScreen:{id:number,nombre:string};
}



const Stack=createNativeStackNavigator<RootStackParams>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
   // initialRouteName='Pagina2Screen'
   screenOptions={{
    headerStyle:{
      backgroundColor: 'transparent',
      
    },


  }}
    >
        <Stack.Screen name="HomeScreen"     options={{title:"Página Home"}} component={HomeScreen} />
        <Stack.Screen name="Pagina1Screen"  options={{title:"Página 1"}} component={Pagina1Screen} />
        <Stack.Screen name="Pagina2Screen"  options={{title:"Página 2"}} component={Pagina2Screen} />
        <Stack.Screen name="Pagina3Screene" options={{title:"Página 3"}}  component={Pagina3Screen} />
        <Stack.Screen name="PersonaScreen" options={{title:"PersonaScreen"}}  component={PersonaScreen} />
   </Stack.Navigator>
  )
}
