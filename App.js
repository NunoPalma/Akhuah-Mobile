import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

export default function App() {

    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}