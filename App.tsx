//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/Navigator/StackNavigator';
//import { MyDrawer } from './src/Navigator/MyDrawer';
import { MenuLateral } from './src/Navigator/MenuLateral';
import { Tabs } from './src/Navigator/Tabs';



 const App = () => (
   <NavigationContainer>
     {/* <StackNavigator /> */}
     {/* <MyDrawer /> */}
     <MenuLateral/>
     {/* <Tabs/> */}
   </NavigationContainer>
 )
export default App;
