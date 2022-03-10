// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar, FlatList, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';
import HomeScreen from './Screens.js/HomeScreen';
import UserScreen from './Screens.js/UserScreen';
import AddScreen from './Screens.js/AddScreen';
import UpdateScreen from './Screens.js/UpdateScreen';

const Stack = createNativeStackNavigator();

console.log('Stack',Stack.Screen)
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '',
            }}
          />
          <Stack.Screen name="Users" component={UserScreen} options={{
            title: 'Employees List',
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Add" component={AddScreen} options={{
            title: 'Add Employee',
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Update" component={UpdateScreen} options={{
            title: 'Update Employee',
            headerTitleAlign: 'center'
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}