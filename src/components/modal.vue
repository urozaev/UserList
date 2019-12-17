<template>
    <div id="modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-body">
            <form id="userForm" class="form-horizontal user-form" @submit.prevent="addUser()" action="" method="GET">
                <div class="form-group">
                <label for="name" class="control-label">Имя пользователя</label>
                <div class="form-input-box">
                    <input type="text" class="form-control" id="name" placeholder="Имя пользователя" v-model="users[0].name" required>
                </div>
                <label for="phone" class="control-label">Телефон</label>
                <div class="form-input-box">
                    <input type="tel" class="form-control" id="phone" placeholder="Телефон" v-mask="`+# (###) ### ## ##`" required>
                </div>
                <label for="user-birthday" class="control-label">Дата рождения</label>
                <div class="form-input-box">
                    <input type="text" name="birthday" class="form-control" id="birthday" placeholder="Дата рождения" v-mask="`##/##/####`" required>
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
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="editCancel" aria-label="Close"><span>Отмена</span></button>
                <br>
                <br>
                <button type="submit" class="user__remove-btn btn btn-primary" @click="removeUser()"><span aria-hidden="true">Удалить</span></button>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    props: ['users'],
    methods: {
        addUser() {
            if(!this.edit)
                {
                this.item.id = this.users.length + 1
                this.users.push(this.item);
            
                } else {
                this.users[this.editIndex] = this.item;
                this.edit = false;
                this.editIndex = -1;
                }
                
                this.saveUsers();

            // $('#modal').modal('hide');
            this.item = {name: '',phone: '',birthday: '',role: '', isArchive: false};
        },
        editCancel() {
            this.item = {name: '',phone: '',birthday: '',role: '',isArchive: false};
            this.editIndex = -1;
        },
    }
}
</script>
<style lang="sass">
    .modal
        position: relative
        display: flex

</style>