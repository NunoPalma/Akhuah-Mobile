import React from "react";
import {ScrollView} from 'react-native';
import {Container} from "../../../core_styles";
import PostItem from "../../components/PostItem";


import Image1 from '../../../assets/staging/image_1.jpg';
import Image2 from '../../../assets/staging/image_2.jpg';

export default () => {
    return (
        <Container style={{
            alignItems: 'center'
        }}>
            <ScrollView
                style={{
                    marginTop: '15%'
                }
                }>
                <PostItem image={Image1} name="Development User 1" description="Development sample description."/>
                <PostItem image={Image2} name="Test User 2" description="This is a sample description."/>

                <PostItem/>

                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>

            </ScrollView>
        </Container>
    );
}