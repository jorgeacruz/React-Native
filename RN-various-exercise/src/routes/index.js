import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../App/index'
import Second from '../App/second';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{
                    headerShown:false
                }} />
                <Stack.Screen name='Second' component={Second} options={{
                    headerShown:false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}