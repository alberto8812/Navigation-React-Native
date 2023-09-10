import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../Navigator/StackNavigator';

/*
forma sucia de recibir argumentos
*/

// interface RouterPrams{
//     id:number,
//     nombre:string,
// }

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{

}
export const PersonaScreen = ({route}:Props) => {
    const params=route.params ;//que los parametros los trate como la interface
  return (
    <View>
        <Text>
            {JSON.stringify(params)}
        </Text>
    </View>
  )
}
