import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {colors} from './src/utils/colors';
import Focus from './src/screens/Focus';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text>Timer started for {currentSubject}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
