export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch(
                // "https://jsonplaceholder.typicode.com/users?_limit=" + limit
                "https://urozaev.github.io/VueApp/users.json"
            );
            const users = await res.json();
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        createUser(state, newUser) {
            state.users.push(newUser)
        },
        deleteUser(state, userId) {
            state.users.find(user => {
                return user.id == userId;
            })
            state.users.splice(state.users.indexOf(userId), 1)
        }
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