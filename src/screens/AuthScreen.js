import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../assets/constant/colors'
import { signUp } from '../store/actions/auth.action'
import { useDispatch } from 'react-redux'

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        dispatch(signUp(email, password));
    };
    
    return (
        <KeyboardAvoidingView 
        behavior='padding'
        keyboardVerticalOffset={50}
        style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Tus Emulsiones</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        id='email'
                        placeholder='email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        initialValue=""
                    />
                    <TextInput
                        style={styles.input}
                        id='password'
                        placeholder='password'
                        keyboardType='default'
                        secureTextEntry
                        minlength={6}
                        autoCapitalize='none'
                        onChangeText={setPassword}
                        initialValue=""
                    />
                </View>
                <View>
                    <Button 
                    title='Registrarme' 
                    color={COLORS.primary} 
                    onPress={handleSignUp} 
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    container:{
        width: '80%',
        maxWidth: 400,
        backgroundColor: COLORS.white,
        height: '35%',
        padding: 12,
    },
    title:{
        fontSize: 24,
        marginBottom: 18,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})