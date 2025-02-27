// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import quizData from '../data/quizData'; // Import the quiz data

const QuizScreen = ({ navigation }) => {
    const { user } = useAuth(); // Get user info from context
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0); // Initialize score
    const currentQuestion = quizData[currentQuestionIndex];

    const handleSubmit = () => {
        if (selectedOption === currentQuestion.correctAnswer) {
            Alert.alert("Correct!", "You answered correctly.");
            setScore(score + 1); // Increment score for correct answer
        } else {
            Alert.alert("Incorrect", `The correct answer is ${currentQuestion.correctAnswer}.`);
        }

        // Move to the next question or finish the quiz
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); // Reset selected option for the next question
        } else {
            Alert.alert("Quiz Finished", `You have completed the quiz! Your score is ${score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0)} out of ${quizData.length}.`);
            navigation.navigate('Login'); // Navigate back to login or another screen
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome, {user?.email}!</Text> {/* Display user email */}
            <Text style={{ fontSize: 20, marginBottom: 20 }}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
                <Button
                    key={index}
                    title={option}
                    onPress={() => setSelectedOption(option)}
                    color={selectedOption === option ? 'blue' : 'gray'}
                />
            ))}
            <Button title="Submit" onPress={handleSubmit} disabled={!selectedOption} />
            <Text style={{ marginTop: 20, fontSize: 18 }}>Score: {score}</Text> {/* Display current score */}
        </View>
    );
};

export default QuizScreen;