<template>
  <main class="request-quote">
    <ContactHero :contact-hero="fm.hero" />
    <Contact :contact-section="fm.contact_section" />
    <BottomCta :bottom-cta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import ContactHero from '../components/ContactHero.vue';
import Contact from './sections/Contact.vue';
console.log('Contact: ', Contact);
import BottomCta from '@vcomp/BottomCta.vue';

/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm);

/* End Data */
</script>

<style lang="sass" scoped>
:deep(.hero .hero-body .title )
  font-size: 48px
  @media screen and (max-width: 699px)
    font-size: 32px
</style>
