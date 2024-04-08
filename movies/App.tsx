import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Movie } from '@/Movie';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Movie></Movie>
    </>
  );
}
