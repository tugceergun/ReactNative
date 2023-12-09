import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const UsersScreen = ( {navigation}) => {
    //buton araciligi ile kendimiz geri donmek istiyorsak navigation.goBack tanimini kullanabiliriz.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>UserScreen</Text>
      <Button title='Anasayfa' onPress={() => navigation.navigate("Home")}/>
      <Button title='Geri' onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default UsersScreen;