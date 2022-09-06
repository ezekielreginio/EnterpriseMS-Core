<template>
    <div>
        <div class="hr-anim" v-if="!isAuthenticated">
            <div class="container h-100 float-end w-50 bg-white hr-login ps-20">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="hr-bros"></div>
                    <p class="py-3 ps-1">HR <br> MANAGER</p>
                </div>
                <p class="text-danger fw-bold">SIGN IN TO </p>
                <p class="hris-header fw-bold fs-1">HUMAN RESOURCES</p>
                <p class="fs-10 text-secondary">Log in with your data that you entered during your registration, or with the credentials provided by your organization administrator. </p>

                <div class="container p-0 m-0">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.email">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="form.password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <button class="btn primary-bg text-white py-3 btn-text" type="button" @click.prevent="loginUser()">LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    import { mapActions } from 'vuex'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return {
                form:{
                    'email' : '',
                    'password' : ''
                },
                isAuthenticated: false,
            }
        },
        methods: {
            ...mapActions({
                signIn:'auth/login'
            }),
            async loginUser()
            {
                let vm = this
                await axios.get('/sanctum/csrf-cookie')
                await axios.post('api/login', this.form)
                .then((data)=>{
                    vm.isAuthenticated = true
                    this.signIn()
                })
                .catch((error) => {
                    // console.log("Error! ", JSON.stringify(error.response.data.errors))
                })
            }
        }
    }
</script>
