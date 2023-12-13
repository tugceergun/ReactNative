import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HeaderLogo = () => {
  return (
   
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/logo.png')}
    />
  
  )
}


export default HeaderLogo
