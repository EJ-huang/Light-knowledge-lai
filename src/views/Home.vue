<template>
  <div class="home">
    <Header />
    <Content />
    <Explain />
    <Date />
    <News />
    <Advantage />
    <Question />

  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Explain from '@/components/Explain.vue'
import Date from '@/components/Date.vue'
import News from '@/components/News.vue'
import Question from '@/components/Question.vue'
import Advantage from '@/components/Advantage.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Explain,
    Date,
    News,
    Question,
    Advantage
  }
}
</script>
