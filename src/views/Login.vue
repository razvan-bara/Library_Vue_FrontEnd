<script setup>
    import { reactive, onBeforeMount } from 'vue';
    import { useAuthService } from '@/services/authService.js';

    const authService = useAuthService();
    const loginErrors = authService.loginErrors;

    const user = reactive({
        email: '',
        password: '',
    });

    function loginUser(){
        authService.login(user);
    }

    function removeError(e){
        let inputName = e.target.name;

        loginErrors[inputName] = '';
        loginErrors.serverError = '';
    }

</script>


<template>
    <section class="login_wrapper">
        <div class="form_header">
            <h1 class="form_title">Intra in cont</h1>
        </div>
        <div class="login_container">
            <form @submit.prevent="loginUser" class="form_body" method="POST">
                <fieldset class="form_group" :data-error="loginErrors.email">
                    <input @focus="removeError" type="email" name="email" placeholder="Email" v-model="user.email" >
                    <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </fieldset>
                <fieldset class="form_group" :data-error="loginErrors.password">
                    <input @focus="removeError" type="password" name="password" id="form_password" placeholder="Parola" v-model="user.password">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                </fieldset>
                    <input class="btn primary_btn" type="submit" value="Login">
                    <router-link to="/register"><button class="btn secondary_btn">Creeaza-ti contul</button></router-link>
                    <p class="error_color" v-if="loginErrors.serverError">
                        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /> 
                        <span class="error_text"> {{ loginErrors.serverError }} </span> 
                    </p>
            </form>
        </div>
    </section>
</template>

<style scoped>

    .login_wrapper{
        background: url("../assets/imgs/background_auth.jpg") no-repeat center center fixed;
        color: var(--primary-dark);
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .login_container{
        width: clamp(300px,40vw,500px);
        background-color: var(--accent-color);
        padding: 0.5rem 2rem 2rem;
        border-radius: 0 0 15px 15px;
    }

    .form_header{
        width: clamp(300px,40vw,500px);
        border-radius: 15px 15px 0 0;
        padding: 0.5rem;
        height: 3rem;
        background-color: var(--primary-color);
        border-bottom: 2px solid var(--secondary-color);
        
    }

    .form_title{
        text-transform: uppercase;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;
    }

    .form_body{
        font-weight: 400;
        font-size: 1rem;
        width: 100%;
    }

    .form_group{
        height: 40px;
        position: relative;
        margin: 20px auto 15px;
    }

    .form_group::after{
        position: absolute;
        inset: 75% 0 0 0;
        content: attr(data-error);
        color: var(--error-color);
        font-size: 0.95rem;
    }

    .form_group > input{
        padding-left: 5px;
        width: 100%;
        height: 30px;
        border: none;
        border-bottom: 1.5px solid var(--primary-dark);
    }

    .form_group > input:focus{
        background-color: inherit;
    }

    .form_group > svg {
        /* filter: drop-shadow(1px 1px 10px var(--primary-grey)); */
        top: 17%;
        right: 2%;
        position: absolute;
    }

    .btn{
        font-weight: 700;
        text-align: center;
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
        cursor: pointer;
        border-radius: 40px;
        transition: opacity 0.5s ease, background-color 0.5s ease;
        border: 1px solid var(--primary-grey);
    }

    .primary_btn{
        background-color: var(--primary-color);
        color: var(--primary-dark);
    }

    .primary_btn:hover{
        opacity: 0.7;
    }

    .secondary_btn{
        opacity: 1;
        color: var(--primary-dark);
    }

    .secondary_btn:hover{
        background-color: var(--primary-color);
    }
    .error_text{
        padding-left: 2px;
    }

    @media screen and (min-width: 769px) {
        .form_title{
            font-size: 2rem;
        }

        .form_body{
            font-size: 1.2rem;
        }
        
    }

</style>
