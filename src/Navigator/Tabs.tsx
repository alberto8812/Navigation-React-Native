import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screen';
import { colores } from '../theme/app.Thme';
import { Text } from 'react-native';

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
                 case 'Tab2Screen':
                    iconName='T2'   
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
        <Tab.Screen  name="Tab2Screen" options={{title:'tab2'}} component={Tab2Screen} />
        <Tab.Screen  name="Tab3Screen" options={{title:'tab3'}} component={Tab3Screen} />
   </Tab.Navigator>
  )
}


