<template>
  <main>
    <div>
      <hero
        headline="Far-away places"
        subtext="Custom plate boats made for"
        reverse
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505458695/obb-hero_gy13vl.jpg"
      />

      <hero
        headline="The history"
        subtext="Established Cairns, 2003.<br>Started, much earlier."
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505109978/obb-history_yglgqt.jpg"
        filterOpacity="0.8"
        link="/the-history"
      />

      <hero
        headline="The factory"
        subtext="Our hangar-sized workshop. Where we build it."
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505458695/obb-factory_mpiq6q.jpg"
        filterOpacity="0.3"
        link="/the-factory"
      />

      <hero
        headline="The process"
        subtext="Precision fabrication with water-jet cutting tech."
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505458854/obb-process_wmg0oz.jpg"
        filterOpacity="0.8"
        link="/the-process"
      />

      <hero
        headline="The boat builders"
        subtext="Boat-lovers, from hair to toes."
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505458859/obb-team2_uoziti.jpg"
        filterOpacity="0.6"
        link="/the-boat-builders"
      />

      <hero
        headline="The designs"
        subtext="Your custom plate boat starts here."
        backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1505458697/obb-designs_fxdqhh.jpg"
        filterOpacity="0.7"
        link="/the-designs"
      />
    </div>

    <Block>
      <div class="u-size11of12 u-sm-size3of4">
        <div class="header">Let's Talk</div>
        <div class="lede">Got ideas? Write to us:</div>
        <form-contact />
      </div>
    </Block>

    <a
      :class="['go-top', {
        hidden: !scrolledNearBottom
      }]"
      @click.prevent="scrollToTop"
    >
      <span class="smallheader">&uarr; Top</span>
    </a>
  </main>
</template>

<script>
import Hero from '~/components/hero.vue'
import Container from '~/components/container.vue'
import Block from '~/components/block.vue'
import FormContact from '~/components/form-contact.vue'

export default {
  components: {
    Hero,
    Container,
    Block,
    FormContact
  },

  data () {
    return {
      scrolledNearBottom: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (event) {
      const offset = 550
      const scrolledNearBottom = (window.scrollY + window.innerHeight) >= (document.body.scrollHeight - offset)

      this.scrolledNearBottom = scrolledNearBottom
    },

    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
@import "../assets/vars.css";

.go-top {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: calc(1.5 * var(--grid-gutter));
  transform: translateY(0);
  transition:
    opacity var(--transition-duration) var(--transition-debounce),
    transform 0s var(--transition-debounce);
}

.go-top.hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition:
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}


</style>
