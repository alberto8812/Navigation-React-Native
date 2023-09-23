import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/app.Thme'
import { AuthContext } from '../context/AuthContext';


interface props{
    name: string,
    size: number,
}

export const TouchableIcon = ({name,size}:props) => {

    const {changeFavoriteIcon} = useContext(AuthContext)

  return (
   <TouchableOpacity
   onPress={()=>changeFavoriteIcon(name)}
   >
        <Icon name={name} size={size} color={colores.primary} />
   </TouchableOpacity>
  )
}
