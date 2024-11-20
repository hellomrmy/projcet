import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyReservationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>내 예약</Text>
      <Text>예약 내역이 여기에 표시됩니다.</Text>
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
});
