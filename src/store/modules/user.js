export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("https://git.heroku.com/urozaev-backend.git", {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const users = await res.json();
            ctx.commit('setUsers', users)
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },

        updateUser(state, userNew) {
            fetch("https://git.heroku.com/urozaev-backend.git" + userNew.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
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

        createUser(state, newUser) {
            fetch("https://git.heroku.com/urozaev-backend.git", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            newUser.id = state.users[state.users.length - 1].id + 1
            state.users.push(newUser)
        },

        deleteUser(state, userId) {
            fetch("https://git.heroku.com/urozaev-backend.git" + userId.id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
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