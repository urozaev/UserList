export default {
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },

        async updateUser(state, userNew) {
            await fetch("http://localhost:8041/" + userNew.id, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userNew)
            })
            const userOld = state.users.find(user => {
                return userNew.id == user.id;
            })
            userOld.name = userNew.name
            userOld.birthday = userNew.birthday
            userOld.phone = userNew.phone
            userOld.role = userNew.role
            userOld.isArchive = userNew.isArchive
        },

        async createUser(state, newUser) {
            await fetch("http://localhost:8041/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            state.users.push(newUser)
        },

        async deleteUser(state, userId) {
            await fetch("http://localhost:8041/" + userId.id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            state.users.splice(state.users.indexOf(userId), 1)
        }
    },
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("http://localhost:8041/");
            const users = await res.json();
            ctx.commit('setUsers', users)
        }
    }
}