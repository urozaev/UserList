<template>
    <div class="creatin">
        <ul class="list-group user__list">
            <li class="col-md-4 list-group-item user" v-for="(user, id) in users" :key='id'>
                <div class="content">
                    <span><strong>{{user.name}}</strong></span>
                    <br>
                    <span>ID: {{user.id}}</span>
                    <br>
                    <span>Специальность:<br>{{user.role}}</span>
                    <br>
                    <span>Номер телефона:<br>{{user.phone}}</span>
                </div>
                    
                <button type="button" class="user__edit-btn btn btn-primary" @click="editItem(index)">
                    <span aria-hidden="true">Изменить</span>
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'urozaev',
    props: ['users']
}
</script>
<style lang="sass" scoped>
.creatin
    width: 100%
    height: auto

</style>