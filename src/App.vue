<template>
  <div id="page-container">
    <header>
      <h1>musictools</h1>
      <section id="navbar">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
        <div>Not signed in</div>
      </section>
      <hr />
    </header>

    <OctocatCorner />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import OctocatCorner from "@/components/OctocatCorner.vue";

  export default defineComponent({
    components: { OctocatCorner },
  });
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&display=swap');

  html
    /* https://uigradients.com/#eXpresso */
    //background -webkit-linear-gradient(to bottom, #ad5389, #3c1053) /* Chrome 10-25, Safari 5.1-6 */
    //background linear-gradient(to bottom, #ad5389, #3c1053)

    background linear-gradient(135deg, #ad5389, #3c1053)
    background-size 400% 400%

    animation backgroundGradient 30s ease infinite

    margin 0
    height 100vh

  #app
    font-family 'Open Sans', sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

    color white

  #page-container
    max-width 600px
    margin 40px auto

  #navbar
    display flex
    flex-direction row
    justify-content space-between

    nav
      display flex
      flex-direction row
      column-gap 1em

  hr
    margin 20px 0
    border none
    border-top 1px solid white

  a
    color inherit

  @keyframes backgroundGradient
    0%
      background-position: 0 50%

    50%
      background-position: 100% 50%

    100%
      background-position: 0 50%
</style>
