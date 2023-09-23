import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/app.Thme'
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
  let namesIcons:string[] =["battery-charging-outline","airplane-outline","beer-outline","barbell-outline","bus-outline"]
  return (
    <View  style={styles.globalMargin}>
      <Text style={styles.title}>Iconoes</Text> 
      <Text>
      {namesIcons.map(name=>( <TouchableIcon name={name} size={80} key={name}/>))}
     

      </Text>
     
  </View>
  )
}
