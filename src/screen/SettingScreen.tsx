import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/app.Thme';
import { AuthContext } from '../context/AuthContext';

export const SettingScreen = () => {
  // dentro de contect se debe hacer referecia que se necesita buscar en el arbol de componente
const {authState} = useContext(AuthContext)
  const insets=useSafeAreaInsets(); 
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop:insets.top +20,
      }}>
      <Text style={styles.title}>SettingScreen</Text>  
      <Text>{JSON.stringify(authState)}</Text>
    </View>
  )
}
