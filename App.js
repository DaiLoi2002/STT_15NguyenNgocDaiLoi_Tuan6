import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import screen_01 from './assets/BaiTap/screen_01';


export default function App() {
  return (
    <screen_01/>
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
