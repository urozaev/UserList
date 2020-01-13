<template>
    <div class="creatin">
        
        <userForm :userId="userId" v-if="showModal"></userForm>
        <ul class="list-group user__list">
            <li class="col-md-4 list-group-item user" v-for="(user, index) in users" :key='index'>
                <div class="content">
                    <span><strong>{{user.name}}</strong></span>
                    <br>
                    <span>ID: {{user.id}}</span>
                    <br>
                    <span>Специальность:<br>{{user.role}}</span>
                    <br>
                    <span>Номер телефона:<br>{{user.phone}}</span>
                </div>
                    

                <button type="button" class="user__edit-btn btn btn-primary" @click="editInfo(user.id)">
                    <span aria-hidden="true">Изменить</span>
                </button>
                <button type="button" class="btn btn-delete" @click="removeUser(index)">
                    <span aria-hidden="true">Удалить</span>
                </button>
            </li>
        </ul>
        
    </div>
</template>
<script>
import userForm from './userForm'

export default {
    name: 'users',
    data() {
        return{
            userId: null,
            showModal: false,
            users: [  {
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
        }
    },
    components: {
        userForm
    },
    methods: {
        removeUser(index) {
            this.$emit('remove-user', index)
        },
        editInfo(index) {
            // this.$emit('show-modal', true),
            this.userId = index
            this.showModal = true
            this.$emit('edit-info', index)
        },
        closeModal() {
            this.showModal = false
        }
    }
}
</script>
<style lang="sass" scoped>
.creatin
    width: 100%
    height: auto

.btn-delete
    background-color: red
    color: white
    font-weight: 700

</style>