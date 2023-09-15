import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screen/SettingScreen';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/app.Thme';

const Drawer=createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
    drawerContent={(props)=><MenuInterno {...props}/>}
    >
        <Drawer.Screen name='StackNavigator' component={StackNavigator}/>
        <Drawer.Screen  name='SettingScreen' component={SettingScreen}/>
    </Drawer.Navigator>
   
  )
}

const MenuInterno=(props: DrawerContentComponentProps)=>{
  return (
    <DrawerContentScrollView>
      <View  style={styles.avatarContainer}>
        <Image
        source={{
          uri:'https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg'
        }}
        style={styles.Avatar}
        />
      </View>

    </DrawerContentScrollView>
  )
}
