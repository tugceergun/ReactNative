import React from 'react';
import { Image, StyleSheet, Text, View , Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, SafeAreaView, StatusBar, RefreshControl} from 'react-native';
import ListItem from './src/components/ListItem';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'First Item',
  },
  {
    id: '3',
    title: 'First Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'First Item',
  },
  {
    id: '6',
    title: 'First Item',
  },
  {
    id: '7',
    title: 'First Item',
  }, {
    id: '8',
    title: 'First Item',
  },

];


 function App () {

  
//butonlar---
//   const handleClick = () => { // normal butonda ve touchableOpacity butonunda kullanmak icin fonksiyon yazdik.
//     alert("Merhaba")
//   }


   return (
    

      <SafeAreaView style={styles.container}>
      <FlatList
      //FlatList 3 tane property aliyor.(data,renderItem,Keyextractor.)
        data={DATA} //data veri seti
        renderItem={({item}) => <ListItem item={item} />} // her bir liste elemaninin goruntusu
        keyExtractor={item => item.id}
        ListHeaderComponent={<ListHeader />}  //Flatlist componentler (ListHeader componente ListHeader componentini tanımladik.)
        ListFooterComponent={<ListFooter />} 
        refreshControl={
          <RefreshControl refreshing={true} OnRefresh={() => {}} /> //refresh control ekledik.
        }

       // horizontal  //yatay liste yapmak icin kullanilir.

      />
    </SafeAreaView>
    

/* 
//Image---

{ <View style={styles.container}>
  
  {/* <Image 
  resizeMode="cover" //strech, repeat, contain gibi modlari var.
  style={{width: "100%", height:500, borderWidth: 2, borderColor: "orange" }}
  //source= {require("./assets/sweden.jpg")}
  source = {{ uri: "https://mediap.flypgs.com/awh/1254/836//files/Sehirler-long-tail/Stockholm/stockholm-eski-sehir.jpg"}}
  /> }
</View> }
*/
   

//butonlar---

//     <View style={styles.container}>
//      <Button title="Click Button" onPress= {handleClick}/>
//      <TouchableOpacity // android ve ios'ta butonlarin gorunumlari ayni olmasi icin Touchable butonlar kullanilir.
//       onPress={handleClick}> 
//       <Text>Click TouchableOpacity</Text>
//      </TouchableOpacity> 

//      <TouchableHighlight  //butona basili tutunca arkaplanını degistirmek icin.
//   activeOpacity={0.6} // yazinin opacity'si (rengi) derecesini(koyuluk) ayarlar.
//   underlayColor="orange"
//   onPress={() => alert('Pressed!')}>
//   <Text>Click TouchableHighlight</Text>
// </TouchableHighlight>

// <TouchableWithoutFeedback  //basili tutunca herhangi bir davranisi olmaz.
// onPress={() => alert('Pressed!')}> 
// <Text>Click TouchableWithoutFeedback</Text>
// </TouchableWithoutFeedback>

//     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;
