import { StyleSheet, Text, View, Button, Image , TextInput} from 'react-native'
import React from 'react'

import {  
    createUserWithEmailAndPassword
   } from 'firebase/auth';

import { useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';
import { collection, getDocs, addDoc, setDoc, getFirestore } from 'firebase/firestore';


export default function Register({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    const [avatar, setAvatar] = useState('')

    const [users, setUsers] = useState([]);

    const createUser = async () => {
        try {
            if (fullname.length > 0){
            const user = await createUserWithEmailAndPassword(auth, email, password)
            const docRef = await addDoc(collection(db, 'users'), {
                fullname: fullname,
                avatar: avatar,
                email: email
            })
            alert('Sign up successful! Please log in')
            navigation.navigate('Home')
            console.log("Document written with ID: ", docRef.id)
            } else {
                alert("Please complete all the forms")
            }
        }
        catch (err) {
            alert('Invalid email or email is already in use')
            
        }
        
    }

  
  return (
    <View style={styles.container}>
      <Text>Please Register Here</Text>
    <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={(text) => setFullName(text)} placeholder='Full name'
        style={styles.input}
        />
        <TextInput 
        onChangeText={(text) => setAvatar(text)} placeholder='Avatar URL'
        style={styles.input}
        autoCapitalize='none'
        />
      <TextInput 
        onChangeText={(text) => setEmail(text)} placeholder='Email'
        style={styles.input}
        autoCapitalize='none'
        />
      <TextInput
        onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry
        style={styles.input}
        autoCapitalize='none'
        />
    </View>
        <View style={styles.buttonContainer}>
        <Button 
            onPress={() => {
                createUser();
            }}
            title='Register'
            style={styles.buttonOutline}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    
    button:{
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'red'
    },
    buttonText:{

    },
    buttonOutline:{
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#252525'
    },

    buttonOutlineText:{},
})