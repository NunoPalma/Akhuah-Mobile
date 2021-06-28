import React from 'react';
import styled from 'styled-components/native';
import {DescriptionPostText, PrimaryPostText, PrimaryText} from "../../core_styles";
import UserIcon from '../../assets/account_circle_white_24dp.svg';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 10px 10px 5px #ccc;
      
`;

const PostImage = styled.Image`
    width: 300px;
    align-items: center;
    justify-content: center;
    height: 250px;
    border-radius: 20px;
`;

export default({image, name, description}) => {
    return (
        <Area>
            <UserIcon source={UserIcon} fill="#000000" style={{
                marginBottom: 10
            }
            }/>
            <PostImage source={image}>

            </PostImage>
            <PrimaryPostText style={{
                marginTop: 10,
                marginStart: 5
            }}>
                {name}
            </PrimaryPostText>

            <DescriptionPostText style={{
                marginStart: 5,
                flexGrow: 1
            }}>
                {description}
            </DescriptionPostText>
        </Area>
    )
}