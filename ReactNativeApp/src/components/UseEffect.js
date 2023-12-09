import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

const UseEffect = () => {

//useEffect -------
//Uygulamanin ayaga kalkma asamasinda, uygulamanin bagimli oldugu yan islemleri cagirmak icin kullandigimiz bir yontem.

    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev+1); //her sn counter sürekli artar.
        }, 1000);

        return() => {
          clearInterval(interval) //gizlenince intervali durduruyoruz (loglarin akisi durur.). (unmount edlinice state guncellemelerini durduyoruz. yoksa arkada hala calisir.)
        };
    })

useEffect(()=> {
  console.log("Component mount edildi.")
}, []); //[] baslangic arrayi component sadece mount edildigi zaman şu fonk. tetiklensin demek. (ne kadar basilirsa basilsin 1 kere yazar.) //bossa herhangi bir component icin calisir.


useEffect(()=> {
  console.log("Count veya amount state degisti.")
}, [counter,amount]); //arrayin icine degistiginde haberdar olmak istedigimiz state'in degerini spesifik olarak yazabiliriz.

    
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>{counter}</Text>
          <Button title="Artir" onPress={() => setCounter(counter+amount)}/>
    
          <Text
          //Amount degeri atadik useState ile. 1 ve 5 degerleri var butonlara tikladikça amount kadar sayi counter'a ekliyor.
          >Amount: {amount}</Text> 
          <Button title="1" onPress={() => setAmount(1)}/>
          <Button title="5" onPress={() => setAmount(5)}/>
        </View>
        </SafeAreaView>
    );
  
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
    }
  });

export default UseEffect;