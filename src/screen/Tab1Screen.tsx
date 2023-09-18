import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/app.Thme'



export const Tab1Screen = () => {
  return (
    <View  style={styles.globalMargin}>
      <Text style={styles.title}>Iconoes</Text> 
      <Text>
        <Icon name="battery-charging-outline" size={30} color="#900" />
      </Text>
     
  </View>
  )
}
