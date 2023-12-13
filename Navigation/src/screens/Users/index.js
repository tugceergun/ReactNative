import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native';
import Item from './Item'

const data = [
  {
  id:1,
  name: "Ahmet",
  },
  {
    id:2,
    name: "Ayse",
    },
    {
      id:3,
      name: "Fatma",
      },
];

const UsersScreen = ( {navigation}) => {
    //buton araciligi ile kendimiz geri donmek istiyorsak navigation.goBack tanimini kullanabiliriz.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>UserScreen</Text>
      <Button title='Anasayfa' onPress={() => navigation.navigate("Home")}/>
      <Button title='Geri' onPress={() => navigation.goBack()}/> */
      <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Item item={item} />}      
      />
      }
    </View>
  );
};

export default UsersScreen;