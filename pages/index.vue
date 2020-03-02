<template>
  <b-container>
    <div>
      <b-form-input
        class="mt-5"
        v-model="title"
        placeholder="Title"></b-form-input>
      <b-form-textarea
        @keyup.enter="addPost"
        class="mt-2"
        id="textarea"
        v-model="content"
        placeholder="Content"
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      <b-form-input
        class="mt-2"
        v-model="tags"
        placeholder="Tags"></b-form-input>
    </div>

    <div>
      <b-button
        class="mt-2"
        block
        variant="primary">Create
        Post</b-button>
    </div>

    <br>

    <div class="mt-3 mb-3" v-for="(post, index) in posts" :key="index">
      <b-card title="Post title" sub-title="@username">
        <b-card-text>Post content</b-card-text>
        <b-card-text class="text-muted small"> time</b-card-text>
        <div>
          <b-badge pill variant="primary">Primary</b-badge>
          <b-badge pill variant="secondary">Secondary</b-badge>
          <b-badge pill variant="success">Success</b-badge>
          <b-badge pill variant="danger">Danger</b-badge>
          <b-badge pill variant="warning">Warning</b-badge>
          <b-badge pill variant="info">Info</b-badge>
          <b-badge pill variant="light">Light</b-badge>
          <b-badge pill variant="dark">Dark</b-badge>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      tags: ''
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.list
    }
  },
  methods: {
    addPost (e) {
      this.$store.commit('posts/add', e.target.value)
      e.target.value = ''
    },
  }
}
</script>

<style>

</style>
