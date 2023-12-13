import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserDetail = ({route}) => {
    //item objesini UserDetail componentine gonderiyoruz. Onu karsilamak icin route tanimi geliyor.
    const data= route.params;  //data objesini aliyoruz.

  return (
    <View>
      <Text style= {styles.text}>UserDetail</Text>
      <Text style= {styles.text}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 text: {
    fontSize: 24,
 }   
})

export default UserDetail