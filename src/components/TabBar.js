import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../../assets/home_white_24dp.svg';
import SearchIcon from '../../assets/search_white_24dp.svg';
import ProfileIcon from '../../assets/account_circle_white_24dp.svg';

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

export default ({state, navigation}) => {

    const navigateTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={() => navigateTo('Home')}>
                <HomeIcon style={{opacity: state.index===0 ? 1 : 0.7}} width="24" height="24"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Search')}>
                <SearchIcon style={{opacity: state.index===1 ? 1 : 0.7}} width="24" height="24"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Profile')}>
                <ProfileIcon style={{opacity: state.index===2 ? 1 : 0.7}} width="24" height="24"/>
            </TabItem>
        </TabArea>
    );
}