<template>
<div>
    <p v-text="names"></p>
    <input type="text" v-model="ages">
    <hello-page></hello-page>
</div>
</template>
<script>
import helloPage from './HelloWorld';
import { mapGetters } from 'vuex';

export default {
  computed:mapGetters({
            names:"getInfoName",
            ages:"getInfoAge"
        }),
  data(){
      return{
          num:"111111",
      }
  },
  components:{
      helloPage,
  },
  methods:{
    /*
      jieshou(msg){
          this.names = msg.name;
          this.ages = msg.age;
          //console.log(msg);
          //this.num = msg;
      }
      */
  },
  mounted(){
  } 
}
</script>
<style scoped>

</style>
