/* eslint-disable no-debugger */
export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch(
                "https://urozaev.github.io/VueApp/users.json"
            );
            const users = await res.json();
            ctx.commit('setUsers', users)
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        updateUser(state, userNew) {
            const userOld = state.users.find(user => {
                return userNew.id == user.id;
            })
            userOld.name = userNew.name
        
        },
        createUser(state, newUser) {
            newUser.id = state.users[state.users.length - 1].id + 1
            state.users.push(newUser)
        },
        deleteUser(state, userId) {
            // state.users.find(user => {
            //     return user.id == userId;
            // })
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