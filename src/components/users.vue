<template>
    <div class="creatin container">
        <!-- <userForm></userForm> -->

        <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Birthday</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Archive</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in allUsers" :key='index'>
                    <th>{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.birthday}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.isArchive}}</td>
                    <td>
                        <button class="btn btn-info" type="button" v-b-modal.modalForm @click="getUser(user)"> Edit </button> / <button @click="deleteUser(index)" class="btn btn-danger" type="button"> Remove </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="submit-list mt-3">
        Submitted Names:
        <div v-if="submittedNames.length === 0">--</div>
        <ul v-else class="mb-0 pl-3">
            <li v-for="(name, index) in submittedNames" :key="index">
                <p>{{user.name}}</p>
                <p>{{user.phone}}</p>
            </li>
        </ul>
        </div>
            

        <b-modal
            id="modalForm"
            centered
            ref="modal"
            title="User info"
            
            
            @ok="handleOk"
            >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required">
                    <b-form-input id="name-input" v-model="user.name" :state="nameState" required></b-form-input>
                </b-form-group>
                <b-form-group :state="birthdayState" label="Birthday" label-for="birthday-input" invalid-feedback="birthday is required">
                    <b-form-input id="birthday-input" v-model="user.birthday" :state="birthdayState" v-mask="`##/##/####`" required></b-form-input>
                </b-form-group>
                <b-form-group :state="phoneState" label="Phone" label-for="phone-input" invalid-feedback="Phone is required">
                    <b-form-input id="phone-input" v-model="user.phone" :state="phoneState" v-mask="`+# (###) ### ## ##`" required></b-form-input>
                </b-form-group>
                <b-form-group :state="roleState" label="Role" label-for="role-input" invalid-feedback="Role is required">
                    <b-form-select id="role-input" v-model="user.role"  :state="roleState" :options="userRoles"></b-form-select>
                </b-form-group>
                <b-form-group :state="archiveState" label="Archive" label-for="archive-checkbox">
                    <b-form-checkbox id="archive-checkbox" v-model="user.isArchive" name="archive-checkbox"></b-form-checkbox>
                </b-form-group>
            </form>
        </b-modal>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import userForm from './components/userForm.vue'

export default {
    name: 'users',
    computed: mapGetters(["allUsers"]),
    data() {
        return{
            user: {
                name: '',
                isArchive: false,
                role: "",
                phone: "",
                birthday: ""
            },
            nameState: null,
            phoneState: null,
            birthdayState: null,
            roleState: null,
            archiveState: null,
            submittedNames: [],
            userRoles: [
                { value: 'designer', text: 'designer' },
                { value: 'manager', text: 'manager' },
                { value: 'developer', text: 'developer' }
            ]
        }
    },
    // components: {
    //     // userForm
    // },
    methods: {
        ...mapActions(['fetchUsers']),
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            return valid
        },
        resetModal() {
            this.name = ''
            this.nameState = null
        },
        getUser(index) {
            this.user = index
        },
        deleteUser(elem){
            this.users.splice(elem, 1)
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
            return
            }
            // Push the name to submitted names
            this.submittedNames.push(this.user.name)
            // Hide the modal manually
            this.$nextTick(() => {
            this.$bvModal.hide('modalForm')
            })
        }
    },
    async mounted() {
        this.fetchUsers();
    },
}
</script>

<style lang="sass" scoped>
    .creatin
        width: 100%
        height: auto
        padding-top: 3rem

    button
        background: 0
        color: white
        border: 0

    .submit-list
        color: #fff

</style>