import React, { useEffect } from 'react';
import { Container, LoadingWheel } from '../../../core_styles';
import { StyleSheet, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    const verifyAuthentication = async() => {
      const authenticationToken = await AsyncStorage.getItem('authentication_token');

      if (authenticationToken != null) {
        console.log("token exists");
        // validate token
      } else {
            console.log("sign in");

          navigation.navigate('SignIn');
      }
    }

    verifyAuthentication();
  });

  return(
    <Container>
      <LoadingWheel size="large" color="#FFFFF"/>
    </Container>
  );
};