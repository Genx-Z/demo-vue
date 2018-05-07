<template>
<div>
    <p v-text="names"></p>
    <input type="text" v-model="ages">
    <hello-page v-on:chuanzhi="jieshou($event)"></hello-page>
</div>
</template>
<script>
import helloPage from './HelloWorld';
export default {
  data(){
      return{
          num:"111111",
          names:"11",
          ages:"22",
      }
  },
  components:{
      helloPage,
  },
  methods:{
      jieshou(msg){
          this.names = msg.name;
          this.ages = msg.age;
          //console.log(msg);
          //this.num = msg;
      }
  },
  mounted(){
  } 
}
</script>
<style scoped>

</style>
