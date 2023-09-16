import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
//import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/app.Thme'
//import { RootStackParams } from '../Navigator/StackNavigator'
import { DrawerScreenProps } from '@react-navigation/drawer'


// interface Props extends StackScreenProps<any,any>{

// }

interface Props extends DrawerScreenProps<any, any> {}

export const HomeScreen = ({navigation}:Props) => {


  useEffect(() => {

    navigation.setOptions({
      headerLeft:()=>(
      <Button
      title='Menu'
      onPress={()=>navigation.toggleDrawer()}
     
      />)
    })

  }, [])
  

  return (
    <View style={styles.globalMargin}>
          <Text style={styles.title} >HomeScreen</Text>
            <Button
              title='ir pagina 1'
              onPress={()=>navigation.navigate('Pagina1Screen')}
            />
          <Text style={{marginVertical:20,fontSize:20,marginLeft:5}} >Navegar con argumentos</Text>

          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{...styles.botonGrande,backgroundColor:'#5856D6'}}
          onPress={()=>navigation.navigate('PersonaScreen',{
            id:1,
            nombre: 'persona'
          })}
          >
            <Text style={styles.botonGrandreText}>Maria
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  style={{...styles.botonGrande,backgroundColor:'#FF9407'}}
          onPress={()=>navigation.navigate('PersonaScreen',{
            id:2,
            nombre: 'Maria'
          })}
          >
            <Text style={styles.botonGrandreText}>Pedro</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
