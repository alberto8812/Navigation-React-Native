import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screen';
import { colores } from '../theme/app.Thme';
import { Text } from 'react-native';
import { TopTabigator } from './TopTabigator';

const Tab= createBottomTabNavigator();

export const Tabs = () => {
  return (
   <Tab.Navigator
   sceneContainerStyle={{
       backgroundColor:'white'
   }}


   screenOptions={({route})=>({
    
        tabBarIcon:({color,focused,size})=>{

            let iconName:string='';
            switch (route.name) {
                case 'Tab1Screen':
                 iconName='T1'    
                 break;
                 case 'TopTabigator':
                    iconName='TopTabigator'   
                 break;
                 case 'Tab3Screen':
                    iconName='T3'    
                 break;

            }
            return <Text style={{color}}>{iconName}</Text>
        },

        tabBarActiveTintColor:colores.primary,
        tabBarStyle: {
            borderTopColor:colores.primary,
            borderTopWidth:0,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        tabBarLabelStyle:{
            fontSize:15,
        }

   })}

   >
        <Tab.Screen  name="Tab1Screen" options={{title:'tab1'}} component={Tab1Screen} />
        <Tab.Screen  name="TopTabigator" options={{title:'TopTabigator'}} component={TopTabigator} />
        <Tab.Screen  name="Tab3Screen" options={{title:'tab3'}} component={Tab3Screen} />
   </Tab.Navigator>
  )
}


