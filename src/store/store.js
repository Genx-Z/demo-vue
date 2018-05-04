import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store =  new Vuex.Store({
    form: {
        selToolName: '',
        selmobile:'',
    },
    //还可以定义
    info:{
        name:'',
        sex:''
    },
    mutations: {
        "SET_FORM": function(form, toolName) {
            form.selToolName = toolName;
        },
        "SET_INFO": function(info, username) {
            info.name = username;
        },
    },
    getters: {
        "GET_FORM": function(form) {
            return form.selToolName;
        },
        "GET_INFO": function(info) {
            return info.name;
        },
    },
    //异步
    actions: {
        "SET_FORM": function(form, toolName) {
            store.commit("SET_FORM", toolName);
        }
    }
})
export default store;