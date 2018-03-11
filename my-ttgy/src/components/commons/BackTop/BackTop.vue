<template>
  <div  v-scroll-show="isShow"
  scroll-distance="200">
      <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
        <div v-back-top v-if="isShow.value"  class="back-top animated">
          <i class="iconfont">&#xe609;</i>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'back-top',
  data () {
      return {
          isShow:{value:false}
      }
  },
  methods: {
      scroll () {
        //   this.isShow = true
      }
  }
}
</script>

<style lang="scss" >
    .back-top {
        width: 40px;height: 40px;line-height: 40px;text-align: center;
        color: #fff;
        position: fixed;right: 25px;bottom: 45px;z-index: 999;
        border-radius: 50%;
        border: 1px solid #65a032;
        i{
            color: #65a032;
        }
    }
</style>
