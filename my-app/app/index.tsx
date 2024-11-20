import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './app/MenuScreen';
import BookingScreen from './app/BookingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: '메뉴 화면' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: '예약 화면' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
