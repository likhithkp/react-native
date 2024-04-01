import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import spacing from '../utils/sizes';

export default function Focus({addSubject}) {
  const [subject, setSubject] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="What would you like to focus on?"
          placeholderTextColor="black"
          onChangeText={setSubject}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
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
    width: 260,
    padding: 15,
    borderRadius: 5,
    color: 'black',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
