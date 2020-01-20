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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key='index'>
                    <th>{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.birthday}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.isArchive}}</td>
                    <td>
                        <button class="btn btn-info" type="button" v-b-modal.modalForm @click="getUser(user)"> Edit </button> / <button class="btn btn-danger" type="button"> Remove </button>
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
        
        <!-- <userForm :userId="userId" v-if="showModal"></userForm> -->
        <div id="modalForm" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="modal-body">
                        <form id="userForm" class="form-horizontal user-form" action="" method="GET">
                            <div class="form-group">
                                <label for="name" class="control-label">Имя пользователя</label>
                                <div class="form-input-box">
                                    <input type="text" class="form-control" id="name" placeholder="Имя пользователя" @input="updateValue()" required>
                                </div>
                                <label for="phone" class="control-label">Телефон</label>
                                <div class="form-input-box">
                                    <input type="tel" class="form-control" id="phone" placeholder="Телефон" v-mask="`+# (###) ### ## ##`" @input="updateValue()" required>
                                </div>
                                <label for="user-bday" class="control-label">Дата рождения</label>
                                <div class="form-input-box">
                                    <input type="text" name="bday" class="form-control" id="bday" placeholder="Дата рождения" v-mask="`##/##/####`"  @input="updateValue()" required>
                                </div>
                                <label for="user-role" class="control-label">Специальность</label>
                                <div class="form-input-box">
                                    <select name="role" id="role" class="form-control">
                                        <option value="designer">Дизайнер</option>
                                        <option value="developer">Разработчик</option>
                                        <option value="manager">Контент-менеджер</option>
                                    </select>
                                </div>
                                <div class="col-10">
                                    <label for="archive" class="control-label">В архиве</label>
                                    <input type="checkbox" value="В архиве" name="archive" id="archive" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary"><span>OK</span></button>
                            <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close" @click="closeModal()"><span>Отмена</span></button>
                            <br>
                            <br>
                            <button type="submit" class="user__remove-btn btn btn-primary" @click="removeUser()"><span aria-hidden="true">Удалить</span></button>
                        </form>
                    </div>
                </div>
        </div>
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
// import userForm from './userForm'

export default {
    name: 'users',
    // computed: {
    //     users() {
    //         return this.$store.state.users;
    //     }
    // },
    data() {
        return{
            users: [  
                {
                    "id": 1,
                    "name": "Илья Емельянов",
                    "isArchive": false,
                    "role": "developer",
                    "phone": "+7 (883) 508-3269",
                    "birthday": "12.02.1982"
                },
                {
                    "id": 2,
                    "name": "Александр Ларионов",
                    "isArchive": true,
                    "role": "manager",
                    "phone": "+7 (823) 440-3602",
                    "birthday": "26.01.1986"
                },
                {
                    "id": 3,
                    "name": "Богдан Давыдов",
                    "isArchive": false,
                    "role": "developer",
                    "phone": "+7 (971) 575-2645",
                    "birthday": "29.11.1990"
                }
            ],
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
    methods: {
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

</style>