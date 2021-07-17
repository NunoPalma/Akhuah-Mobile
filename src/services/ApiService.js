import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'http://10.0.2.2:8080';
//const BASE_API = 'http://webservices.akhuah.tk:8080';
const USER_PATH = 'user'

export default {
    register: async (email, password, username) => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                username: username
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            }
        }

        const request = await fetch(`${BASE_API}/register`, data);

        return await request.json();

    },

    authenticate: async (email, password) => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            }
        }

        const request = await fetch(`${BASE_API}/authenticate`, data);

        return await request.json();

    },

    getUserData: async() => {
        let authenticationToken = await AsyncStorage.getItem('access_token')
        let data = {
            method: 'GET',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authenticationToken
            }
        }

        const request = await fetch(`${BASE_API}/${USER_PATH}/getData`, data);

        return await request.json();
    }
}