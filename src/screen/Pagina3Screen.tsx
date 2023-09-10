import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/app.Thme'

interface Props extends StackScreenProps<any, any> {  }

export const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina3Screen</Text>
        <Button 
          title="Pagina2Screen"
          onPress={()=>navigation.pop()}
        />

       <Button 
          title="Home"
          onPress={()=>navigation.popToTop()}
        />
    </View>
  )
}
