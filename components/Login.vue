<template>
  <div>
    <b-form-input
      type="text"
      v-model="email"
      placeholder="Email"></b-form-input>

    <b-form-input
      type="password"
      v-model="password"
      placeholder="Password"></b-form-input>

    <b-button @click="login">Login</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login({ $axios }) {
      const data = await this.$axios.$post('http://localhost:5000/api/auth/login', {
        email: this.email,
        password: this.password
      });
      console.log(data);
    }
  }
}
</script>