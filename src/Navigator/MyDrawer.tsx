import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screen/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MyDrawer=()=> {

    const dimensions = useWindowDimensions();


    const { width }=useWindowDimensions();

  return (
    <Drawer.Navigator
   
    screenOptions={{
      drawerType:width>=768?'permanent':'front',
    }}

    >
      <Drawer.Screen name="StackNavigator" options={{title:'home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{title:'setting'}}  component={SettingScreen} />
    </Drawer.Navigator>
  );
}