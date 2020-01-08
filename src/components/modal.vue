<template>
    <div id="modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-body">
            <form id="userForm" class="form-horizontal user-form" action="" method="GET">
                <div class="form-group">
                <label for="name" class="control-label">Имя пользователя</label>
                <div class="form-input-box">
                    <input type="text" class="form-control" ref="namePicker" id="name" placeholder="Имя пользователя" :value="value[1].name" @input="updateValue()" required>
                </div>
                <label for="phone" class="control-label">Телефон</label>
                <div class="form-input-box">
                    <input type="tel" class="form-control" ref="phonePicker" id="phone" placeholder="Телефон" v-mask="`+# (###) ### ## ##`" :value="value.phone" @input="updateValue()" required>
                </div>
                <label for="user-bday" class="control-label">Дата рождения</label>
                <div class="form-input-box">
                    <input type="text" name="bday" class="form-control" ref="bdayPicker" id="bday" placeholder="Дата рождения" v-mask="`##/##/####`" :value="value.bday" @input="updateValue()" required>
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
</template>

<script>
export default {
    name: 'modal',
    props: [
        "value",
        "showModal"
        ],
    methods: {
        updateValue() {
            this.$emit('input', {
                name: this.$refs.namePicker.value,
                phone: this.$refs.phonePicker.value,
                bday: this.$refs.bdayPicker.value
            })
        },
        closeModal(index) {
            this.$emit('show-modal', index)
        }
    }
}
</script>
<style lang="sass">
    .modal
        position: relative
        display: flex

</style>