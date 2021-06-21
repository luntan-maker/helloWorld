import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [stringOf, setStringOf] = useState("Not loaded");
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/helloWorld')
      .then((response) => response.text())
      .then((responseText) => setStringOf(responseText))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={styles.container}>
      <Text>{stringOf}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
