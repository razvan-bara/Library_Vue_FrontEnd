<script setup>
    const form_url = "...";

</script>


<template>
    <section class="sign_up_wrapper">
        <div class="form_header">
            <h1 class="form_title">Creeaza un cont</h1>
        </div>
        <div class="sign_up_container">
            <form :action=form_url class="form_body" method="POST">
                <fieldset class="form_group">
                    <input type="email" name="email" id="form_email" placeholder="Email">
                    <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="text" name="last_name" id="form_last_name" placeholder="Nume">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="text" name="first_name" id="form_first_name" placeholder="Prenume">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="password" name="password" id="form_password" placeholder="Parola">
                    <font-awesome-icon icon="fa-solid fa-user-lock" />
                </fieldset>
                <fieldset class="form_group">
                    <input type="password" name="confirm_password" id="form_confirm_password" placeholder="Confirma parola">
                    <font-awesome-icon icon="fa-solid fa-user-lock" />
                </fieldset>
                    <input type="submit" value="Submit">
            </form>
        </div>
    </section>
</template>

<style scoped>
    .sign_up_wrapper{
        color: var(--primary-dark);
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .sign_up_container{
        width: clamp(270px,40vw,500px);
        height: 400px;
        background-color: var(--accent-color);
        padding: 2rem;
        border-radius: 0 0 15px 15px;
    }

    .form_title{
        text-transform: uppercase;
        font-size: 2rem;
        text-align: center;
        font-weight: 600;
    }

    .form_header{
        width: clamp(270px,40vw,500px);
        border-radius: 15px 15px 0 0;
        padding: 0.5rem;
        height: 3rem;
        background-color: var(--primary-color);
        border-bottom: 2px solid var(--primary-grey);
    }

    .form_body{
        font-weight: 400;
        font-size: 1.2rem;
        width: 100%;
        height: 100%;
        aspect-ratio: 1;
    }

    .form_group{
        position: relative;
        margin: 20px auto;
        gap: 5px;
    }
    .form_group > input{
        padding-left: 10px;
        width: 100%;
        height: 30px;
        background-color: white;
        border-radius: 0 3.5px 3.5px 0;
        border: 1px solid var(--primary-dark);
        border-left: 5px solid var(--primary-color);
    }
    .form_group > svg {
        /* filter: drop-shadow(1px 1px 10px var(--primary-grey)); */
        top: 20%;
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
        transition: opacity 0.5s ease 0s;
        box-shadow: 4px 6px 10px 1px var(--primary-grey);
    }

    input[type="submit"]:hover{
        opacity: 0.7;
    }

</style>
