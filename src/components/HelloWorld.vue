<template>
    <div class="hello">
        <input type="text" name="username" v-model="name">
        <input type="tel" name="age" v-model="age">
        <button @click="blurForm">提交</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            name: "",
            age: "",
            dataList: [
                { name: "小红", age: "12" },
                { name: "小明", age: "14" },
                { name: "小马", age: "12" }
            ]
        };
    },
    methods: {
        blurForm() {
            // //联合判断
            // var name = this.name;
            // var age = this.age;
            // for (var i = 0; i < this.dataList.length; i++) {
            //     if (
            //         this.dataList[i].name == name &&
            //         this.dataList[i].age == age
            //     ) {
            //         console.log("数据已存在！");
            //     }
            // }

            // //组件间传值
            //this.$emit("chuanzhi", {name:this.name,age:this.age});

            //使用vuex存值
            this.$store.commit("setInfo",{name:this.name,age:this.age});
        }
    },
    mounted(){
      
    }
};
</script>

<style scoped>
</style>
