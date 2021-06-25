import React, {useEffect} from 'react';
import {Container} from '../../../core_styles';
import {AsyncStorage, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from "lottie-react-native";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const verifyAuthentication = async () => {
            const authenticationToken = await AsyncStorage.getItem('authentication_token');

            if (authenticationToken == null) {
                console.log("token exists");
                // validate token
            } else {
                console.log("sign in");

                navigation.navigate('SignIn');
            }
        }

        verifyAuthentication();
    });

    return (
        <Container>
            <LottieView
                autoPlay={true}
                autoSize={true}
                style={{
                    flex: 1,
                    width: '100%',
                    bottom: -90
                }}
                source={require('../../../assets/fish_tank.json')}
            />
            <LottieView
                autoPlay={true}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    height: '50%',
                    bottom: 150
                }}
                source={require('../../../assets/loading2.json')}
            />

        </Container>
    );
};