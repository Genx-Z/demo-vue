<template>
  <div class="hello">
      <input type="text" name="username" v-model="name">
      <input type="tel" name ="age" v-model="age">
      <button @click = "blurForm">提交</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:"",
      age:"",
      dataList:[
        {name:"小红",age:"12"},
        {name:"小明",age:"14"},
        {name:"小马",age:"12"}
      ]
    }
  },
  methods:{
    blurForm(){
      var name = this.name;
      var age = this.age;
      for(var i=0; i<this.dataList.length; i++){
        if(this.dataList[i].name == name && this.dataList[i].age == age){
            console.log("数据已存在！");
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
