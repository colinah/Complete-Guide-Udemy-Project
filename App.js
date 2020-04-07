import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] =useState('');
  const [courseGoals, setCourseGoals] = useState(['Do 1 hackerrank daily','Do a module AWS','Do a module Native']);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
  }
  return (
    <View style = {styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Goal" 
            style = {styles.textInput}
            onChangeText = {goalInputHandler}
            value = {enteredGoal}
            />
          <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal)=> <View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
