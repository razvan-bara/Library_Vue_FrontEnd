<script setup>
    import { reactive } from 'vue';
    import axios from 'axios';

    const form_url = "...";

    const user = reactive({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
    });

    function submitForm(){
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(res => (console.log(res)))
    }

</script>


<template>
    <section class="sign_up_wrapper">
        <div class="form_header">
            <h1 class="form_title">Creeaza un cont</h1>
        </div>
        <div class="sign_up_container">
            <form @submit.prevent="submitForm" class="form_body" method="POST">
                <fieldset class="form_group">
                    <input type="email" name="email" placeholder="Email" v-model="user.email">
                    <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="text" name="last_name" id="form_last_name" placeholder="Nume" v-model="user.last_name">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="text" name="first_name" id="form_first_name" placeholder="Prenume" v-model="user.first_name">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="password" name="password" id="form_password" placeholder="Parola" v-model="user.password">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="password" name="password_confirmation" id="form_confirm_password" placeholder="Confirma parola" v-model="user.password_confirmation">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                </fieldset>
                    <input type="submit" value="Submit">
            </form>
        </div>
    </section>
</template>

<style scoped>

    .sign_up_wrapper{
        background: url("../assets/imgs/background_auth.jpg") no-repeat center center fixed;
        color: var(--primary-dark);
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .sign_up_container{
        width: clamp(300px,40vw,500px);
        height: 400px;
        background-color: var(--accent-color);
        padding: 2rem;
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
        height: 100%;
        aspect-ratio: 1;
    }

    .form_group{
        position: relative;
        margin: 20px auto;
    }

    .form_group > input{
        padding-left: 5px;
        width: 100%;
        height: 30px;
        border: none;
        border-bottom: 1.5px solid var(--primary-dark);
    }
    .form_group > svg {
        /* filter: drop-shadow(1px 1px 10px var(--primary-grey)); */
        top: 17%;
        right: 2%;
        position: absolute;
    }

    input[type="submit"]{
        font-weight: 700;
        text-align: center;
        width: 100%;
        height: 40px;
        background-color: var(--primary-color);
        cursor: pointer;
        border-radius: 40px;
        transition: opacity 0.5s ease 0s;
        box-shadow: 4px 6px 10px 1px var(--primary-grey);
    }

    input[type="submit"]:hover{
        opacity: 0.7;
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
