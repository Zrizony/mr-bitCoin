<template>
  <section class="contact-list">
    <div
      class="contact-card"
      v-for="contact in contacts"
      v-bind:key="contact._id"
    >
      <contact-preview
        v-bind:contact="contact"
        v-on:select-contact="onSelectedContact"
      />
    </div>
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  methods: {
    async onSelectedContact(contactId) {
      this.$store.dispatch({ type: 'loadContactById', contactId })
    },
  },
  components: { ContactPreview },
}
</script>

<style lang="scss" scoped>
.contact-list {
  .contact-card {
    border-bottom: 1px solid lightgray;
    scroll-snap-align: center;
    cursor: pointer;
    height: 72px;

    &:hover {
      background-color: rgb(239, 243, 245);
    }
  }
}
</style>
