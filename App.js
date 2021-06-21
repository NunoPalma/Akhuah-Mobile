import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {PrimaryText} from './core_styles';
import {SecondaryText} from './core_styles';

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}