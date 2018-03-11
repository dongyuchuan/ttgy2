<template>
  <div class="main-box app-home">
      <tab-bar></tab-bar>
      <banner></banner>
      <sections></sections>
      <list></list>
      <back-top></back-top>

  </div>
</template>

<script>
import TabBar from './TabBar'
import Banner from './Banner'
import Sections from './Sections'
import List from './list'
import BackTop from '../../commons/BackTop/BackTop'

export default {
  name:'app-home',
  components: {
    TabBar,Banner,Sections,List,BackTop
  }
}
</script>

<style lang="scss">

</style>
