import React, {useEffect, useState} from "react";
import {Container, PrimaryText, SecondaryText} from "../../../core_styles";
import styled from "styled-components/native/dist/styled-components.native.esm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ScrollView} from "react-native";
import {Avatar, Text} from "native-base";


const ImageContainer = styled.View`
    margin-top: 60px;
    align-items: center;
    justify-content: center;
`;

const InformationContainer = styled.View`
     align-items: center;
     justify-content: center;
`;

const StatisticsContainer = styled.View`
    flex-direction: row;
    margin-top: 32px;
    align-self: center;
`;

const StatisticsBox = styled.View`
    align-items: center;
    flex: 1;
`;

const StatisticDescriptionText = styled.Text`
    font-size: 12px;
    color: #AEB5BC;
    font-weight: 500;
`;

const StatisticCountText = styled.Text`
    font-size: 20px;
    color: #000000;
`;
export default () => {
    const [profileImage, updateProfileImage] = useState("");
    const [username, updateUsername] = useState("");


    const getUserProfileImage = async () => {
        let userData = await AsyncStorage.getItem('user_data');

        let profileImage = JSON.parse(userData)['profileImage'];
        let username = JSON.parse(userData)['username'];

        updateProfileImage(profileImage);
        updateUsername(username);

        return profileImage;
    }

    useEffect(() => {
        getUserProfileImage();
    });

    return (
        <Container>
            <ScrollView>
                <ImageContainer>
                    {profileImage !== '' ?
                        <Avatar
                            size="xl"
                            source={{
                                uri: `data:image/jpg;base64,${profileImage}`,
                            }}>
                            <Avatar.Badge bg={"red.200"}/>
                        </Avatar>
                        :
                        <Avatar
                            size="xl">
                            <PrimaryText>
                                {username[0]}
                            </PrimaryText>
                            <Avatar.Badge bg={"red.200"}/>
                        </Avatar>
                    }
                </ImageContainer>
                <InformationContainer>
                    <PrimaryText>
                        {username}
                    </PrimaryText>
                </InformationContainer>

                <StatisticsContainer>
                    <StatisticsBox>
                        <StatisticCountText>0</StatisticCountText>
                        <StatisticDescriptionText>
                            POSTS
                        </StatisticDescriptionText>
                    </StatisticsBox>
                    <StatisticsBox style={{
                        borderColor: "#DFD8C8",
                        borderLeftWidth: 1,
                        borderRightWidth: 1
                    }}>
                        <StatisticCountText>0</StatisticCountText>
                        <StatisticDescriptionText>
                            FOLLOWERS
                        </StatisticDescriptionText>
                    </StatisticsBox>
                    <StatisticsBox>
                        <StatisticCountText>0</StatisticCountText>
                        <StatisticDescriptionText>
                            FOLLOWING
                        </StatisticDescriptionText>
                    </StatisticsBox>
                </StatisticsContainer>

            </ScrollView>
        </Container>
    );
}