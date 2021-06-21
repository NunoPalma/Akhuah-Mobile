import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {PrimaryText, SecondaryText} from '../../../core_styles';

import TextInputField from "../../components/TextInputField";

import EmailIcon from '../../../assets/email_black_24dp.svg';
import LockIcon from '../../../assets/lock_black_24dp.svg';
import Button from "../../components/Button";

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

                <TextInputField
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    hideText={false}
                />

                <TextInputField
                    IconSvg={LockIcon}
                    placeholder="Password"
                    hideText={true}
                />

                <Button />

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
        paddingBottom: 100
    },
    registerText: {
        marginTop: 20
    }
});