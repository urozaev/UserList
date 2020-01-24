<template>
    <div class="creatin container">

        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Role</th>
                    <th scope="col">Archive</th>
                    <th scope="col">
                        <button type="button" class="btn btn-success" @click="resetModal()"> Create new user </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in allUsers" :key='index'>
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.birthday}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.isArchive}}</td>
                    <td>
                        <button class="btn btn-info" type="button"  @click="editUser(user)"> Edit </button> 
                        / 
                        <button @click="deleteUser(user)" class="btn btn-danger" type="button"> Delete </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal
            id="modalForm"
            centered
            ref="modal"
            title="User info"
            @ok="handleOk"
            @cancel="handleCancel"
            >
            <form ref="form" @submit.stop.prevent="eventSubmit">
                <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required">
                    <b-form-input id="name-input" v-model="user.name" :state="nameState" required></b-form-input>
                </b-form-group>
                <b-form-group :state="birthdayState" label="Birthday" label-for="birthday-input" invalid-feedback="Fill in birthday field">
                    <b-form-input id="birthday-input" v-model="user.birthday" :state="birthdayState" v-mask="`##/##/####`" required></b-form-input>
                </b-form-group>
                <b-form-group :state="phoneState" label="Phone" label-for="phone-input" invalid-feedback="Fill in phone field">
                    <b-form-input id="phone-input" v-model="user.phone" :state="phoneState" v-mask="`+# (###) ### ## ##`" required></b-form-input>
                </b-form-group>
                <b-form-group label="Role" label-for="role-input">
                    <b-form-select id="role-input" v-model="user.role" :options="userRoles"></b-form-select>
                </b-form-group>
                <b-form-group label="Archive" label-for="archive-checkbox">
                    <b-form-checkbox id="archive-checkbox" v-model="user.isArchive" name="archive-checkbox"></b-form-checkbox>
                </b-form-group>
            </form>
        </b-modal>
        
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'users',
    computed: mapGetters(["allUsers"]),
    data() {
        return{
            user: {
                id: "",
                name: "",
                isArchive: false,
                role: "",
                phone: "",
                birthday: "",
            },
            nameState: null,
            phoneState: null,
            birthdayState: null,
            userRoles: [
                { value: 'designer', text: 'designer' },
                { value: 'manager', text: 'manager' },
                { value: 'developer', text: 'developer' }
            ],
            isEditing: false
        }
    },
    created() {
        this.cachedUser = Object.assign({}, this.user)
    },
    async mounted() {
        this.fetchUsers();
    },
    methods: {
        ...mapActions(['fetchUsers']),
        ...mapMutations(['createUser', 'deleteUser', 'editUser']),

        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            this.birthdayState = valid
            this.phoneState = valid
            return valid
        },

        resetModal() {
            this.$bvModal.show("modalForm")
            Object.assign(this.$data, this.$options.data())
        },

        deleteUser(elem){
            this.$store.commit('deleteUser', elem)
        },

        editUser(userElem){
            this.isEditing = true
            this.$bvModal.show("modalForm")
            this.user = userElem

            this.cachedUser = Object.assign({}, this.user)
        },

        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()

            // Trigger submit handler
            this.eventSubmit()
        },

        handleCancel(bvModalEvt) {
            bvModalEvt.preventDefault()
            if (this.isEditing) {
                this.user = Object.assign({}, this.cachedUser)
            }
            this.user = this.user

            // this.eventSubmit()
        },

        eventSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }

            if (!this.isEditing) {
                this.createUser(Object.assign({}, this.user))
            }

            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide('modalForm')
            })
        }
    }
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

    .table thead th
        vertical-align: baseline

    .btn-success
        color: #fff
        background-color: #218838
        border-color: #1e7e34

</style>