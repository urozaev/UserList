import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const { store } = new Vuex.Store({
    state: {
        users: [ {
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
        ]
    }
});