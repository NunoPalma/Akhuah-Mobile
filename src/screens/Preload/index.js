import React, {useEffect} from 'react';
import {Container} from '../../../core_styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const verifyAuthentication = async () => {
            const authenticationToken = await AsyncStorage.getItem('access_token');

            if (authenticationToken != null) {
                console.log("token exists"); //TODO validate token

                setTimeout(() => {
                    navigation.reset({
                        routes: [{name: 'MainView'}]
                    });
                }, 3000);
            } else {
                navigation.navigate('SignIn');
            }
        }

        verifyAuthentication()
    });

    return (
        <Container style={{
            alignItems: 'center'
        }}>
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