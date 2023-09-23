import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../Navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

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


    const {changeUserName} = useContext(AuthContext)
    useEffect(() => {
      changeUserName(params.nombre);
    }, [params.nombre])
    
  return (
    <View>
        <Text>
            {JSON.stringify(params)}
        </Text>
    </View>
  )
}
