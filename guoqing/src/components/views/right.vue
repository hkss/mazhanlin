<template>
  <div class="right">
    <transition enter-active-class="animated  bounceInUp">
      <router-view :goods="goods" @delNews="del1($event)" 
      @addnews='addnews($event)'
      >

   
      </router-view>
    </transition>
  </div>
</template>
<script>

export default {
  props: ["goods"],

  methods: {
    del1() {

     var q=localStorage.getItem('i')
   console.log(q)
      this.goods.splice(q, 1);
    },addnews(e){
this.goods.push({
  describe:e
})
    }
  },

  data() {
    return {};
  }
};
</script>
<style scoped>
.right {
  background: #fff;
  flex: 1;
}
</style>