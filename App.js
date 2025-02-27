// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizScreen from './screens/QuizScreen';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './Screen/LoginScreen';
import SignupScreen from './Screen/SignupScreen';

const Stack = createNativeStackNavigator();

// const NestedStack = createNativeStackNavigator();

// const NestedNavigator = () => {
//     return (
//         <NestedStack.Navigator>
//             <NestedStack.Screen name="SomeScreen" component={SomeScreen} />
//             {/* Add more screens here */}
//         </NestedStack.Navigator>
//     );
// };

export default function App() {
  return (

    <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="Quiz" component={QuizScreen} />

                    {/* <Stack.Navigator initialRouteName="Quiz">
                        <Stack.Screen name="Quiz" component={QuizScreen} />
                    </Stack.Navigator> */}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>

  );
}
