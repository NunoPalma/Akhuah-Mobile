import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 90%;
    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 40px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 17px;
    color: #222;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, hideText, value, onChangeText}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#268596" />
            <Input
                placeholder={placeholder}
                secureTextEntry={hideText}
                value={value}
                onChangeText={onChangeText}
                errorStyle={{color: 'red'}}
                errorMessage='TEST TEST TEST TEST'
            />
        </InputArea>
    );
}