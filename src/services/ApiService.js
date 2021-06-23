import axios from 'axios';

const BASE_API = 'http://10.0.2.2:8080';

export default {
    register: async () => {

    },

    authenticate: async (email, password) => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
                username: email,
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