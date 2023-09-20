import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScrean, ChatScreen, ContactsScreen } from '../screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/app.Thme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();
export const  TopTabigator=()=> {

   const {top:paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
    screenOptions={({route})=>({

        
        tabBarIcon:({color,focused})=>{

            let iconName:string='';
            switch (route.name) {
                case 'AlbumsScrean':
                 return <Icon name="airplane-outline" size={25}  color={colores.primary} />
                 break;
                 case 'ContactScreen':
                    return <Icon name="bluetooth-outline" size={25}  color={colores.primary} />
                 break;
                 case 'ChatScreen':
                    return <Icon name="camera-outline" size={25}  color={colores.primary} />
                 break;

            }
            return <Text style={{color}}>{iconName}</Text>
        },
        tabBarStyle:{
            paddingTop,
            borderTopColor: colores.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor:0,
        },
        tabBarPressColor:colores.primary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
            backgroundColor:colores.primary
        }
        
    })}
    sceneContainerStyle={{
        backgroundColor:'white',
    }}

    >
      <Tab.Screen name="AlbumsScrean" component={AlbumsScrean} />
      <Tab.Screen name="ContactScreen" component={ContactsScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
  );
}