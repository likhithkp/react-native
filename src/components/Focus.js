import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

export default function Focus() {
  const [subject, setSubject] = React.useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What would you like to focus on?"
        placeholderTextColor="black"
        onChangeText={value => setSubject(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: colors.white,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
});
