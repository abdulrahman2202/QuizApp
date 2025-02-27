// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const success = login(email, password);
        if (success) {
            Alert.alert('Login successful', 'Welcome back!');
            navigation.navigate('Quiz'); // Navigate to QuizScreen
        } else {
            Alert.alert('Login failed', 'Invalid email or password');
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
            <Button title="Login" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate('Signup')} style={{ marginTop: 10 }}>
                Don't have an account? Sign up
            </Text>
        </View>
    );
};

export default LoginScreen;