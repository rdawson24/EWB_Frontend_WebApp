import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import AppHeader from './src/components/AppHeader.js'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppHeader/>
      <AppNavigator/>
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
