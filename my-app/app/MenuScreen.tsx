import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>메뉴 화면</Text>
      <Button title="예약 화면으로 이동" onPress={() => navigation.navigate('Booking')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
