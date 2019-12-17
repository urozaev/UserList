<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
a 
  color: #42b983

h1
  color: #fff
  font-weight: 700

</style>
