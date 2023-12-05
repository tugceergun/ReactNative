import { Image, StyleSheet, Text, View , Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';


 function App () {
  

//   const handleClick = () => { // normal butonda ve touchableOpacity butonunda kullanmak icin fonksiyon yazdik.
//     alert("Merhaba")
//   }

   return (
<View style={styles.container}>
  <Image 
  resizeMode="cover" //strech, repeat, contain gibi modlari var.
  style={{width: "100%", height:500, borderWidth: 2, borderColor: "orange" }}
  //source= {require("./assets/sweden.jpg")}
  source = {{ uri: "https://mediap.flypgs.com/awh/1254/836//files/Sehirler-long-tail/Stockholm/stockholm-eski-sehir.jpg"}}
  />
</View>


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
    justifyContent:"center",
    alignItems: "center",
  },
});

export default App;
