import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/app.Thme'

interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screen = ({navigation}:Props) => {

  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina2Screen</Text>
        <Button 
          title="Pagina1Screen"
          onPress={()=>navigation.navigate('Pagina1Screen')}
        />

       <Button 
          title="Pagina3Screen"
          onPress={()=>navigation.navigate('Pagina3Screene')}
        />
    </View>
  )
}
