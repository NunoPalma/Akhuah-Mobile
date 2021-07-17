import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../../assets/home_white_24dp.svg';
import SearchIcon from '../../assets/search_white_24dp.svg';
import ProfileIcon from '../../assets/account_circle_white_24dp.svg';
import AsyncStorage from "@react-native-async-storage/async-storage";

const TabArea = styled.View`
    height: 60px;
    background-color: #000000;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.Image`
    border-radius: 12px;
`;

export default ({state, navigation}) => {
    const [profileImage, updateProfileImage] = useState("");

    const navigateTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const getUserProfileImage = async () => {
        let userData = await AsyncStorage.getItem('user_data');

        let profileImage = JSON.parse(userData)['profileImage'];

        updateProfileImage(profileImage)
        return profileImage;
    }

    useEffect(() => {
        getUserProfileImage();
    });

    return (
        <TabArea>
            <TabItem onPress={() => navigateTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.7}} width="24" height="24"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Search')}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.7}} width="24" height="24"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Profile')}>
                {profileImage !== '' ?
                    <ProfileImage source={{uri: `data:image/jpg;base64,${profileImage}`, scale: 1}}
                                  style={{height: 24, width: 24}}/>
                    :
                    <ProfileIcon style={{opacity: state.index === 2 ? 1 : 0.7}} width="24" height="24"/>
                }
            </TabItem>
        </TabArea>
    );
}