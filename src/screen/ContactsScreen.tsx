import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {
      //se deve enviar la referencias
const {signIn,authState} = useContext(AuthContext)
  return (
    <View>
      <Text>ContactsScreen</Text>
{authState.isLoggedIn &&    
      <Button
       title='SignIn'
       onPress={signIn}
      />}
{/* {!authState.isLoggedIn &&    
      <Button
       title='SigNOut'
       onPress={()=>signIn('SigNOut')}
      />} */}

    </View>
  )
}
