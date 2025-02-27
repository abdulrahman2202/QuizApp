// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { signup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await signup(email, password);
            Alert.alert('Signup successful', 'You can now log in');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Signup failed', 'Please try again');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <Text onPress={() => navigation.navigate('Login')} style={{ marginTop: 10 }}>
                Already have an account? Log in
            </Text>
        </View>
    );
};

export default SignupScreen;