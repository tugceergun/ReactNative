import React from "react";
import { Button } from "react-native";
import {View, Text} from 'react-native'

function HomeScreen( {navigation}) { // bir ekran uzerinde navigation tanimi otomatik olarak property olarak gelir. 
    //navigation altindaki navigate ozelligi ile sayfalar arasi yonlendirme yapilir. (navigation.navigate)
    //navigation.navigate ve navigation.push ikisi de sayfalar arasi gecis yapar.
    //navigation.push, her tiklandiginda uzerine eklemeler yaparak geliyor (ekranlari ust uste ekliyor ve geri gelebiliyoruz.).
    //navigation.navigate, ilgili ekran en son nerde bulunduysa oraya doner.
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Kullanicilar" onPress={() => navigation.navigate("Users")}/> 
      </View>
    );
  };

  export default HomeScreen;