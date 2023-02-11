<template>
    <div>
        <div class="hr-anim" v-if="!isAuthenticated">
            <div id="hr-form" class="container h-100 float-end bg-white ps-20" :class="{
                'hr-login' : currentView == 'login-form' || currentView == null,
                'hr-inquiry' : currentView == 'inquiry-form'
            }">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="hr-bros"></div>
                    <p class="py-3 ps-1 hr-hover">RCG <br> SOLUTIONS</p>
                </div>
                <login-component/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    import { mapActions, mapGetters } from 'vuex'
    import LoginComponent from './subcomponents/LoginComponent.vue'
    export default {
        components: {
            'login-component': LoginComponent
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed: {
            ...mapGetters({
                currentView: 'welcome/getCurrentView',
            }),
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
                signIn:'auth/login',
                changeView: 'welcome/setCurrentView'
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
            },
            contactUs()
            {
                this.changeView('inquiry-form')
            }
        }
    }
</script>

<style scoped>
.hr-login {
    position: absolute;
    display: block;
    right:0;
    width: 59%;
    transition: 1s;
}

.hr-inquiry {
    position: absolute;
    display: block;
    transition: 1s;
    width: 59%;
    right: 41%;
}
.cursor-pointer {
    cursor: pointer;
}
</style>