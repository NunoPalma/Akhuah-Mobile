import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {PrimaryText, SecondaryText} from '../../../core_styles';

import TextInputField from "../../components/TextInputField";

import EmailIcon from '../../../assets/email_black_24dp.svg';
import LockIcon from '../../../assets/lock_black_24dp.svg';
import PersonIcon from '../../../assets/person_outline_black_24dp.svg';
import Button from "../../components/Button";

import ApiService from "../../services/ApiService";
import {useNavigation} from "@react-navigation/native";

export default () => {

    const [emailField, setEmailChange] = useState('');
    const [passwordField, setPasswordChange] = useState('');
    const [nameField, setNameChange] = useState('');
    const navigation = useNavigation();


    React.useEffect(() => {
        this.animation.play();
    }, []);

    const resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    };

    const handleOnRegisterClick = async () => {
        if (emailField !== '' && passwordField !== '' && nameField !== '') {
            let json = await ApiService.register(emailField, passwordField, nameField);
            console.log(json)
        } else {
            alert("Failed to register.")
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

                <TextInputField
                    IconSvg={PersonIcon}
                    placeholder="Name"
                    hideText={false}
                    value={nameField}
                    onChangeText={text => setNameChange(text)}
                />

                <Button
                    onButtonClick={handleOnRegisterClick}
                    buttonText="Register"
                />

                <SecondaryText
                    onPress={() => {navigation.navigate('SignIn')}}
                    style={styles.registerText}>
                    Already have an account? Log in.
                </SecondaryText>
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