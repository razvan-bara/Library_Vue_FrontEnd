import { API } from './API';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toast-notification';
import router from '@/router';


export const useAuthService = defineStore('users', {

    state: () => ({
        userData: {
            'first_name': '',
            'last_name': '',
            'email': '',
            'token': ''
        },

        registerErrors: {
            'email': '',
            'first_name': '',
            'last_name': '',
            'password': '',
            'password_confirmation': '',
            'serverError': ''
        },

        loginErrors: {
            'email': '',
            'password': '',
            'serverError': ''
        }
    }),

    getters: {

    },

    actions: {

        setUserData(first_name, last_name, email, token){
            this.userData.first_name = first_name;
            this.userData.last_name = last_name;
            this.userData.email = email;
            this.userData.token = token;
            localStorage.setItem('userData', JSON.stringify(this.userData));
        },

        mapRegistrationErrors(validationErrors) {
            for (const err in validationErrors) {
                switch(err) {
                    case 'email': 
                        this.registerErrors.email = validationErrors[err][0];
                        break;  
                    case 'first_name': 
                        this.registerErrors.first_name = validationErrors[err][0];
                        break; 
                    case 'last_name': 
                        this.registerErrors.last_name = validationErrors[err][0];
                        break; 
                    case 'password': 
                        this.registerErrors.password = validationErrors[err][0];
                        break; 
                    case 'password_confirmation': 
                        this.registerErrors.password_confirmation = validationErrors[err][0];
                        break; 
                }
            }
        },

        mapLoginErrors(validationErrors) {
            for (const err in validationErrors) {
                switch(err) {
                    case 'email': 
                        this.loginErrors.email = validationErrors[err][0];
                        break;  
                    case 'password': 
                        this.loginErrors.password = validationErrors[err][0];
                        break; 
                }
            }
        },

        async register(userData) {
            try{
                const response = await API.post('/register', userData);
                const data = response.data.data;
                this.setUserData(data.user.first_name, data.user.last_name, data.user.email, data.token);

                const $toast = useToast();

                $toast.success('Cont creeat cu succes',{
                    position: 'top-right'
                });

                router.push({ path: '/' });
            }catch(error) {
                if(error.response && error.response.status === 403){
                    let validationErrors = error.response.data.data;
                    this.mapRegistrationErrors(validationErrors);
                } else {
                    this.registerErrors.serverError = 'Conexiunea cu serverul esuata, incercati mai tarziu';
                }
            }
        },

        async login(userData) {
            try{
                const response = await API.post('/login', userData);
                const data = response.data.data;
                this.setUserData(data.user.first_name, data.user.last_name, data.user.email, data.token);

                const $toast = useToast();

                $toast.success('Ai intrat in cont',{
                    position: 'top-right'
                });

                router.push({ path: '/' });
            }catch(error) {
                if(error.response && error.response.status === 403){
                    let validationErrors = error.response.data.data;
                    this.mapLoginErrors(validationErrors);
                } else if(error.response && error.response.status === 401) {
                    let wrongCredentialsError = error.response.data.message;
                    this.loginErrors.serverError = wrongCredentialsError;
                } else {
                    this.loginErrors.serverError = 'Conexiunea cu serverul esuata, incercati mai tarziu';
                }
            }
        },

    },

})