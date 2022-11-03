import 'react-native-gesture-handler';
 import React from 'react'
 import { NavigationContainer } from '@react-navigation/native';
 import Icon from 'react-native-vector-icons/Ionicons'
import { NavigatorScreen } from './src/navigator/NavigatorScreen';



 
  const App = () => {
   return (

    <>
        <NavigationContainer>
            <NavigatorScreen />
        </NavigationContainer>
    </>

   )
 }
 

 export default App;