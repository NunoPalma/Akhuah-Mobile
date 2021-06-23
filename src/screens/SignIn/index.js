import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {PrimaryText, SecondaryText} from '../../../core_styles';

import TextInputField from "../../components/TextInputField";

import EmailIcon from '../../../assets/email_black_24dp.svg';
import LockIcon from '../../../assets/lock_black_24dp.svg';
import Button from "../../components/Button";

import ApiService from "../../services/ApiService";

export default () => {

    const [emailField, setEmailChange] = useState('');
    const [passwordField, setPasswordChange] = useState('');

    React.useEffect(() => {
        this.animation.play();
    }, []);

    const resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    };

    const handleOnLoginClick = async () => {
        if (emailField !== '' && passwordField !== '') {
            let json = await ApiService.authenticate(emailField, passwordField);
            if (json['access_token']) {
                alert('nice');
            } else
                alert("Invalid credentials.")
        } else {
            alert("Invalid credentials.")
        }
    }

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

                <TextInputField
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    hideText={false}
                    value={emailField}
                    onChangeText={text => setEmailChange(text)}
                />

                <TextInputField
                    IconSvg={LockIcon}
                    placeholder="Password"
                    hideText={true}
                    value={passwordField}
                    onChangeText={text => setPasswordChange(text)}
                />

                <Button onButtonClick={handleOnLoginClick}/>

                <SecondaryText style={styles.registerText}>Register a new account</SecondaryText>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
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
        marginTop: -100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 100,
    },
    registerText: {
        marginTop: 20
    }
});