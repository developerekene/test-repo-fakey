import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import notifee from '@notifee/react-native';
import PushNotification from './components/notifee/PushNotification';

export default function App() {
  
  return (
    <View style={{
      flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
      <PushNotification/>
    </View>
  );

}

