<template>
  <section class="section security">
    <div class="content-wrap">
      <div class="is-content">
        <h1 class="title">
          {{ security.title }}
        </h1>
        <div class="content">
          {{ security.body }}
        </div>
        <div class="cta">
          <a :href="security.cta.url">{{ security.cta.title }}</a>
        </div>
      </div>
      <div class="is-image">
        <lazy-img
          class="image"
          :src="security.figure"
          :alt="security.alt"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  security: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.security
  position: relative
  padding: 120px 24px 48px
  background-color: $vibe-black
  +mobile
    padding-top: 60px
  .content-wrap
    +tablet
      display: flex
      justify-content: flex-end
    .is-image
      display: block
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1
      align-self: flex-end
    .is-content
      display: block
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1

  .title,.content
    color: #fff
  .title
    text-align: left
    font-size: 48px
    margin-bottom: 1.5rem
    +mobile
      font-size: 32px
  .title, .content, .cta
    +tablet
      max-width: 500px
      margin-left: auto
  .content
    margin-bottom: 3rem
  .cta a
    font-weight: $vibe-bold
    font-family: $vibe-family-body
    &:hover
      color: $primary
    &:not(:hover)
      color: $vibe-teal
  .column.is-image
    align-self: flex-end
  .image
    display: block
    width: 100%
    max-width: 690px
    margin-left: auto
    margin-right: -1.5rem
    margin-bottom: -3rem
</style>
