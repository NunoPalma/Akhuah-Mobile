import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {PrimaryText} from '../../../core_styles';
import {SecondaryText} from '../../../core_styles';

export default () => {
   React.useEffect(() => {
          this.animation.play();
    }, []);
   
  const resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <PrimaryText style={styles.title}>Akhuah</PrimaryText>
      <View style={styles.logoContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: '100%',
            backgroundColor: '#BCFAFF',
          }}
          source={require('../../../assets/fish_animation.json')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <SecondaryText style={styles.registerText}>Register a new account</SecondaryText>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 50
  },
  btnLogin : {
    borderRadius: 5,
    backgroundColor: '#498bc4',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  },
  logoContainer: {
      flex: 1,
      justifyContent: 'center',
      height: '20%'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BCFAFF' 
  },
  container: {
    marginTop: -500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 100
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    color: '#222',
    fontSize: 17,
    marginBottom: 15,
    borderRadius: 5,
    padding: 10
  },
  registerText: {
    marginTop: 20
  }
});