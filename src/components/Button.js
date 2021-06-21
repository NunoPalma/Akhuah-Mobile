import React from 'react';
import styled from 'styled-components/native';
import {ButtonText} from "../../core_styles";

const MainButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #498bc4;
    border-radius: 30px;
    height: 50px;
`;

const InputArea = styled.View`
    flex: 1;
    width: 90%;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 15px;
`;

export default () => {
    return (
        <InputArea>
            <MainButton>
                <ButtonText>
                    Login
                </ButtonText>
            </MainButton>
        </InputArea>
    );
}