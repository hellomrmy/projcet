import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>검색 결과</Text>
      <Text>검색된 버스 리스트가 여기에 표시됩니다.</Text>
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
