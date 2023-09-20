import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores } from '../theme/app.Thme';

export const Tab3Screen = () => {
  return (
    <View>
      <Text>
      <Icon name="heart-half-outline" size={30} color={colores.primary}/>  
      <Icon name="ice-cream-outline" size={30} color={colores.primary}/>  
      <Icon name="git-merge-outline" size={30} color={colores.primary}/>  
      </Text>  
  </View>
  )
}
