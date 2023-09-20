//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/Navigator/StackNavigator';
//import { MyDrawer } from './src/Navigator/MyDrawer';
import { MenuLateral } from './src/Navigator/MenuLateral';
import { Tabs } from './src/Navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';



 const App = () => (
   <NavigationContainer>
    <AppState>
     {/* <StackNavigator /> */}
     {/* <MyDrawer /> */}
     <MenuLateral/>
     {/* <Tabs/> */}
     </AppState>
   </NavigationContainer>
 )


 const AppState=({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
 }
export default App;
