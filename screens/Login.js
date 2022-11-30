import { StyleSheet, Text, View, Button, Image , TextInput} from 'react-native'
import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

import {  
    signInWithEmailAndPassword,
   } from 'firebase/auth';

import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = async () => {
        try{
        const user = await signInWithEmailAndPassword(auth, email, password)
        navigation.navigate('Home')
        }
        catch (err) {
            alert('User or password incorrect')
        }
    }


        const animation = useRef(null);
        useEffect(() => {
          // You can control the ref programmatically, rather than using autoPlay
          // animation.current?.play();
        }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/login.json')}
      />
    <Text>Please Login Here</Text>
    <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={(text) => setEmail(text)} placeholder='Email'
        style={styles.input}
        autoCapitalize='none'
        />
      <TextInput
        onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry
        style={styles.input}
        />
    </View>
        <View style={styles.buttonContainer}>
        <Button
            onPress={() => {
                SignIn();
            }}
            title='Login'
        />
        <Button 
            onPress={() => {
                navigation.navigate('Register')
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