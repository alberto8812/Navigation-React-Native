import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
//import { StackScreenProps } from '@react-navigation/stack'
import { colores, styles } from '../theme/app.Thme'
//import { RootStackParams } from '../Navigator/StackNavigator'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any,any>{

// }

interface Props extends DrawerScreenProps<any, any> {}

export const HomeScreen = ({navigation}:Props) => {


  useEffect(() => {

    navigation.setOptions({
      headerLeft:()=>(
        <TouchableOpacity 
        onPress={()=>navigation.toggleDrawer()}
        >
           <Icon name="bandage-outline" size={30} color='#000'/>
          
        </TouchableOpacity>)
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
             <Icon name="chatbubbles-outline" size={30} color='#000'/>
            <Text style={styles.botonGrandreText}>Maria
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  style={{...styles.botonGrande,backgroundColor:'#FF9407'}}
          onPress={()=>navigation.navigate('PersonaScreen',{
            id:2,
            nombre: 'Maria'
          })}
          >
             <Icon name="cash-outline" size={30} color='#000'/>
            <Text style={styles.botonGrandreText}>Pedro</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
