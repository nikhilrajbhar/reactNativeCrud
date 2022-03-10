import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, StatusBar, FlatList, View, Text, Button } from 'react-native';
import { useSelector,useDispatch } from "react-redux";
import { fetch_users } from '../../redux/actions';

export default function UserScreen({ route,navigation }) {

    const logindata = useSelector((state) => state.userReducer);
    const refresh  = route.params?.refresh;
    const dispatch = useDispatch();
    if (refresh == true) {
        dispatch(fetch_users());
    }

    const Item = ({ data }) => (
        <View>
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Update', {
                        employee_id: data._id,
                        employee_name: data.name,
                        employee_age: data.age,
                        employee_salary: data.salary,
                    })}
                >
                    <Text style={styles.title}
                    >Name : {data.name}
                    </Text>
                    <Text style={styles.title}
                    >Age : {data.age}
                    </Text>
                    <Text style={styles.title}
                    >Salary : {data.salary}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );

    const renderItem = ({ item }) => (
        <Item data={item} />
    );

    return (
        <>
            {!logindata.userdata ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
                :
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <FlatList
                        data={logindata.userdata}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
                    <View style={{ paddingBottom: 5 }}>
                        <Button
                            title="+  ADD Employee"
                            onPress={() => navigation.navigate('Add')}
                        />

                    </View>
                </View>
            }


        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#0000FF',
    },
    item: {
        backgroundColor: '#000',
        padding: 2,
        margin: 1,
        borderRadius: 2
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
});