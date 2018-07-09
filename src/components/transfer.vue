<template>
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <keep-alive>
    <p v-if="show">hello</p>
    </keep-alive>
  </transition>
</div>
</template>

<script>

export default {
  name: 'transfer',
  data () {
    return {
      show: true
    }
  }
}

</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
