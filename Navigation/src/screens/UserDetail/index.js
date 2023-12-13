import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const UserDetail = ({route, navigation}) => {
    //item objesini UserDetail componentine gonderiyoruz. Onu karsilamak icin route tanimi geliyor.
    const data= route.params;  //data objesini aliyoruz.

  return (
    <View>
      <Text style= {styles.text}>UserDetail</Text>
      <Text style= {styles.text}>{JSON.stringify(data, null, 2)}</Text>

      <Button
      //Buton guncelleme.
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
    </View>
  )
}

const styles = StyleSheet.create({
 text: {
    fontSize: 24,
 }   
})

export default UserDetail