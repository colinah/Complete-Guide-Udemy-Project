import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, SetEnteredGoal] =useState('');
  return (
    <View style = {styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Goal" 
            style = {styles.textInput}/>
          <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
