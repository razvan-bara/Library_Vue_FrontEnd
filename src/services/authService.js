import { API } from './API';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toast-notification';
import router from '@/router';


export const useAuthService = defineStore('users', {

    state: () => ({
        userData: {
            'fullname': '',
            'email': '',
            'token': ''
        },

        registerErrors: {
            'email': '',
            'first_name': '',
            'last_name': '',
            'password': '',
            'password_confirmation': ''
        }
    }),

    getters: {

    },

    actions: {

        setUserData(fullname, email, token){
            this.userData.fullname = fullname;
            this.userData.email = email;
            this.userData.token = token;
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

        async register(userData) {
            try{
                const response = await API.post('/register', userData);
                const data = response.data;
                this.setUserData(data.user.fullname, data.user.email, data.token);

                const $toast = useToast();

                $toast.success('Cont creeat cu succes',{
                    position: 'top-right'
                });

                router.push({ path: '/' });
            }catch(error) {
                let validationErrors = error.response.data.data;
                if(error.response.status === 403){
                    let validationErrors = error.response.data.data;
                    this.mapRegistrationErrors(validationErrors);
                }
            }
        }
    },

})