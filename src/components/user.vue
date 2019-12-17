<template>
    <div class="creatin">
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
                    
                <button type="button" class="user__edit-btn btn btn-primary">
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
export default {
    name: 'user',
    props: ['users'],
    methods: {
        removeUser(index) {
            this.$emit('remove-user', index)
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