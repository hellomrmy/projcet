import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function BookingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>버스 예약</Text>
      <TextInput style={styles.input} placeholder="출발지" />
      <TextInput style={styles.input} placeholder="도착지" />
      <TextInput style={styles.input} placeholder="출발 날짜" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchResult')}>
        <Text style={styles.buttonText}>검색</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
