import React from 'react';
import {ButtonText} from "../../core_styles";
import {StyleSheet, TouchableOpacity} from "react-native";


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#498bc4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 45,
        width: '90%'
    }
});

export default ({onButtonClick, buttonText}) => {
    return (
        <TouchableOpacity
            style={ styles.button }
            onPress={function () {
                onButtonClick()
            }}>
            <ButtonText>
                {buttonText}
            </ButtonText>
        </TouchableOpacity>
    );
}