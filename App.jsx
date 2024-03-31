import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from './src/utils/colors';
import Focus from './src/screens/Focus';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
