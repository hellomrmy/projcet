import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from './app/BookingScreen';
import SearchResultScreen from './app/SearchResultScreen';
import MyReservationsScreen from './app/MyReservationsScreen';
import SettingsScreen from './app/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: '메뉴' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: '버스 예약' }} />
        <Stack.Screen name="MyReservations" component={MyReservationsScreen} options={{ title: '내 예약' }} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} options={{ title: '검색 결과' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: '설정' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
