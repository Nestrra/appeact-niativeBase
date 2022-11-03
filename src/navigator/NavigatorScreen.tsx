import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../pages/MapScreen';
import { Permissions } from '../pages/Permissions';


const Stack = createStackNavigator();

export const NavigatorScreen = () => {
 
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown:false,
          cardStyle:{
            backgroundColor:'white'
          }
      }}
    
    >
          <Stack.Screen name="Home" component={MapScreen} />
        <Stack.Screen name="Permissions" component={Permissions} />
      
    </Stack.Navigator>
);

}
