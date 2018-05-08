import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store =  new Vuex.Store({
    form: {
        selToolName: '',
    },
   
    info:{
        name:"",
        age:""
    },
    mutations: {
        "SET_FORM": function(form, toolName) {
            form.selToolName = toolName;
        },
        setInfo(info,msg){
            info.name = msg.name;
            info.age = msg.age;
            console.log(info.name + "---" + info.age);
        }
    },
    getters: {
        "GET_FORM": function(form) {
            return form.selToolName;
        },
        getInfoName(info){
            return info.name;
        },
        getInfoAge(info){
            return info.age;
        }
    },
    //异步
    actions: {
        "SET_FORM": function(form, toolName) {
            store.commit("SET_FORM", toolName);
        }
    }
})
export default store;