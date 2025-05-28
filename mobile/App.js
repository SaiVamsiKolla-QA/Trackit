import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseApp from './firebaseConfig'; // Import Firebase app instance

export default function App() {
  // You can log the firebaseApp to ensure it's initialized if you want
  console.log('Firebase App Initialized:', firebaseApp.name); // .name to avoid stringifying the whole object in RN console

  return (
    <View style={styles.container}>
      <Text>Welcome to TrackIt Mobile!</Text>
      <Text>Firebase is configured.</Text>
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
