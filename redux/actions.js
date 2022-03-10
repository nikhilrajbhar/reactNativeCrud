export const FETCH_USERS = 'FETCH_USERS';
export const POST_USERS = 'POST_USERS';
export const PUT_USERS = 'PUT_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
import { Alert } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import Config from "react-native-config";

export const fetch_users = () => {
 
    return (dispatch) => {

        const fetchData = () => {
            try {
                fetch(`https://crud-testing.vercel.app/api/employee`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res?.json())
                    .then(res2 => {
                        if (res2) {
                            dispatch({ type: FETCH_USERS, data: res2.data });
                        }
                    }).catch(error => {
                        console.log(error)
                        fetchData()
                        // Alert.alert(
                        //     "Error",
                        //     "Unable to fetch try again",
                        //     [
                        //       {
                        //         text: "Cancel",
                        //         onPress: () => console.log("Cancel Pressed"),
                        //         style: "cancel"
                        //       },
                        //       { text: "Reload", onPress: () => fetchData()}
                        //     ]
                        //   );
                    });
            } catch (error) {
                console.log('error', error)
                dispatch({ type: FETCH_USERS_ERROR, data: "error" });
            }
        }
        fetchData();

    }
}

export const post_users = (data) => {
    
    let postNewData = {
        name:data.name,
        age:data.age,
        salary:data.salary
    }
    console.log('postNewData',postNewData);
    console.log('data navigation',data.navigation);
    return (dispatch) => {
        const postData = async () => {
            try {
                let rsp = await fetch(`https://crud-testing.vercel.app/api/employee`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postNewData)
                })
                console.log('rsp.status',rsp.status);
                if (rsp.status == 201) {
                    
                    Alert.alert(
                        "Success",
                        "Employee Data Saved",
                        [
                            { text: "Okay",onPress: ()=> data.navigation.navigate('Users',{
                                refresh: true,
                            }) }
                        ]
                    );

                    // navigate('Users', { userName: 'Lucy' })
                } else {
                    Alert.alert(
                        "Error",
                        "Unable to post data",
                        [
                            { text: "Try again" }
                        ]
                    );

                }
            } catch (error) {
                console.log('error', error)
                dispatch({ type: FETCH_USERS_ERROR, data: "error" });
            }
        }
        postData();
    }
}


export const put_users = (data) => {
    let updateData = {
        name: data.name, 
        age: data.age, 
        salary: data.salary
    }

    return (dispatch) => {
        const updateCall = async () => {
            try {
                let rsp = await fetch(`https://crud-testing.vercel.app/api/updateEmployee/${data.employee_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updateData)
                })
             
                if (rsp.status == 201) {
                    Alert.alert(
                        "Success",
                        "Employee Updates Successfully",
                        [
                            { text: "Okay",onPress: ()=> data.navigation.navigate('Users', {
                                refresh: true,
                            }) }
                        ]
                    );

                    // navigate('Users', { userName: 'Lucy' })
                } else {
                    Alert.alert(
                        "Error",
                        "Unable to post data",
                        [
                            { text: "Try again" }
                        ]
                    );

                }
            } catch (error) {
                console.log('error', error)
                dispatch({ type: FETCH_USERS_ERROR, data: "error" });
            }
        }
        updateCall();
    }
}
