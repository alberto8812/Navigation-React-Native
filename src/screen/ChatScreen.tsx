import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const ChatScreen = () => {

    const {authState,signOut} = useContext(AuthContext);

   return( 
   <View>
        {authState.isLoggedIn &&    
      <Button
       title='SigNOut'
       onPress={()=>signOut()}
      />}
</View>
)
}
