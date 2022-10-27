import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';


import Sobre from './sobre';
import Obrigado from './obrigado';

const Tab = createBottomTabNavigator();

export default function paGina(){

    const navigation = useNavigation();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Sobre' component={Sobre} />
                <Tab.Screen name='Obrigado' component={Obrigado} />
            </Tab.Navigator>

        </NavigationContainer>
    
    );
}