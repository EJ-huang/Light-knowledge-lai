<template>
  <div class="home">
    <Header />
    <Main />
    <Trade />
    <Student />
    <Formula />
    <Share />
    <Class />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Trade from '@/components/Trade.vue'
import Student from '@/components/Student.vue'
import Formula from '@/components/Formula.vue'
import Share from '@/components/Share.vue'
import Class from '@/components/Class.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Trade,
    Student,
    Formula,
    Share,
    Class,
    Footer
  }
}
</script>
