import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>버스 예약 어플</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Booking')}
      >
        <Text style={styles.buttonText}>버스 예약</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyReservations')}
      >
        <Text style={styles.buttonText}>내 예약 확인</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>설정</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#007AFF',
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
