<template>
  <main class="customer">
    <Hero :hero="fm.hero" />
    <Story :testimonials="fm.testimonials" />
    <Trust :trust="fm.trust" />
    <TeamsCollaborate :collaborate="fm.collaborate" />
    <Testimonial />
    <CustomerComments :comments="fm.comments" />
    <Cards :stories="fm.stories" />
    <BottomCta :bottom-cta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import Story from './sections/Story.vue';
import Trust from './sections/Trust.vue';
import TeamsCollaborate from './sections/TeamsCollaborate.vue';
import Testimonial from './sections/Testimonial.vue';
import CustomerComments from './sections/CustomerComments.vue';
import Cards from './sections/Cards/Index.vue';
import BottomCta from '@vcomp/BottomCta.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
</script>

<style lang="sass" scoped>
.customer
  overflow: hidden
</style>
