import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/app.Thme'



export const Tab1Screen = () => {
  return (
    <View  style={styles.globalMargin}>
      <Text style={styles.title}>Iconoes</Text> 
      <Text>
        <Icon name="battery-charging-outline" size={30} color={colores.primary}/>
        <Icon name="airplane-outline" size={30}  color={colores.primary} />
        <Icon name="beer-outline" size={30}  color={colores.primary} />
        <Icon name="bar-chart-outline" size={30}  color={colores.primary} />
        <Icon name="barbell-outline" size={30}  color={colores.primary} />
        <Icon name="bus-outline" size={30}  color={colores.primary} />
      </Text>
     
  </View>
  )
}
