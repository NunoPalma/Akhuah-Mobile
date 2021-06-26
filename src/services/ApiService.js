import axios from 'axios';

const BASE_API = 'http://10.0.2.2:8080';

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

    validateAuthenticationToken: async () => {

    }
}