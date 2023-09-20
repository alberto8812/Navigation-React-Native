import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screen/SettingScreen';
import { Image, Text, View } from 'react-native';
import { colores, styles } from '../theme/app.Thme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer=createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
    drawerContent={(props)=><MenuInterno {...props}/>}
    >
        <Drawer.Screen name='Tabs' component={Tabs}/>
        <Drawer.Screen name='StackNavigator' component={StackNavigator}/>
        <Drawer.Screen  name='SettingScreen' component={SettingScreen}/>
    </Drawer.Navigator>
   
  )
}
{/*parte del avatar */}
const MenuInterno=({navigation }: DrawerContentComponentProps)=>{
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
    {/*opciones de menu */}

      
    <View style={styles.menucContainer}>
    <TouchableOpacity 
      style={{...styles.menuBoton,flexDirection:'row'}}
      onPress={() => navigation.navigate('Tabs')}
      >
        <Icon name="git-merge-outline" size={30} color={colores.primary}/>  
        <Text style={styles.menuTexto}>Tabs</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{...styles.menuBoton,flexDirection:'row'}}
      onPress={() => navigation.navigate('StackNavigator')}
      >
         <Icon name="american-football-outline" size={30} color={colores.primary}/>  
        <Text style={styles.menuTexto}>Navegacion Stark</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{...styles.menuBoton,flexDirection:'row'}}
      onPress={() => navigation.navigate('SettingScreen')}
      >
         <Icon name="alarm-outline" size={30} color={colores.primary}/>  
        <Text style={styles.menuTexto}>Ajustes</Text>
      </TouchableOpacity>
    </View>
    </DrawerContentScrollView>
  )
}
