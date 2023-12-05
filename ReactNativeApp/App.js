import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import Title from "./src/components/Title";
import User from './src/components/User';
import Users from './src/components/Users';

 function App () {
  return (
    <View style={styles.container}>
     
  
      <Title text="Merhaba React Native" />
      <Title text="React Native" color="red" numberOfLines={1} isVisible= {true} />
      <Title text="React" color="green" numberOfLines={2} />
      <Title text="JavaScript" color="blue" numberOfLines={3} />
      
      <User data={{id:1, name: "Mehmet" }}/>

      <Users data= {["Ahmet", "Mehmet", "Ayse", "Fatma"]}/>
    </View>
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
