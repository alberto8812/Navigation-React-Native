//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';
import { MyDrawer } from './src/Navigator/MyDrawer';



 const App = () => (
   <NavigationContainer>
     {/* <StackNavigator /> */}
     <MyDrawer />
   </NavigationContainer>
 )
export default App;
