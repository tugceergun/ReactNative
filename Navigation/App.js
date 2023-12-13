import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users';
import UserDetail from './src/screens/UserDetail';
import HeaderLogo from './src/components/HeaderLogo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      //Tum ekranlar icin, Stack.Navigator 'a screenOptions ile style eklenebilir.
     screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  
   >
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Anasayfa", headerTitle: (props) => <HeaderLogo {...props} />}}/>
        <Stack.Screen name="Users" component={UsersScreen} options={{title: "Kullanicilar",}}/>
        <Stack.Screen
        //UserDetail ekraninda header'da name yaziyoruz. (options kisminda)
        name="UserDetail" component={UserDetail} options={({ route }) => ({ title: route.params.name })}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
