
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from "react-redux";
import { post_users } from '../../redux/actions';


function Screen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [profile, setprofile] = useState('');

  console.log("name", name);
  console.log("age", age);
  console.log("salary", salary);

  const dispatch = useDispatch();

  const submitForm = async () => {
    console.log("Submitting");
    dispatch(post_users({ name: name, age: age, salary: salary, navigation: navigation }));
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View >
        <TextInput
          placeholder="Enter Name" style={styles.inputStyle}
          placeholderTextColor="grey"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Enter Age"
          placeholderTextColor="grey"
          keyboardType="numeric"
          style={styles.inputStyle}
          onChangeText={(text) => setAge(text)} />
        <TextInput
          placeholder="Enter Salary"
          placeholderTextColor="grey"
          keyboardType="numeric"
          style={styles.inputStyle}
          onChangeText={(text) => setSalary(text)} />
      </View>
      <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
        <View style={{ marginRight: 40 }}>
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={() => submitForm()}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: '#000',
  },
  inputStyle: {
    marginTop: 20,
    width: 350,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: 20

  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Screen;