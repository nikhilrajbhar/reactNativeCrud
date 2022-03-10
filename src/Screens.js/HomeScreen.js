import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { fetch_users } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import Config from "react-native-config";


export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_users());
    }, [])
  
    const logindata = useSelector((state) => state.userdata);
    
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', }}>
            <Text style={{ color: 'black', fontSize: 60, textAlign: 'center', marginBottom: 40 }}>Welcome to Employee App</Text>

            <View style={{ padding: 50 }}>
                <Button
                    title="Fetch All Employees"
                    onPress={() => navigation.navigate('Users')}
                />
            </View>
        </View>
    );
}