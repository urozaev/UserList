export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users?_limit=3/"
            );
            const users = await res.json();
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    },
}