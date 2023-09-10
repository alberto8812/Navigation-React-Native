import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/app.Thme'
import { useNavigation } from '@react-navigation/native'




export const Pagina1Screen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({
      title:'Hola',
      headerBackTitle: 'l',
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button 
          title="Home"
          onPress={()=>navigation.navigate('HomeScreen')}
        />

       <Button 
          title="Pagina2Screen"
          onPress={()=>navigation.navigate('Pagina2Screen')}
        />
    </View>
  )
}
