<template>
  <div>
    <b-navbar toggleable="lg" :type="theme" :variant="theme">
      <b-navbar-brand href="#">
        <Logo /> <sub>Socio</sub>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav> 
      
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="logged" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-if="!logged" v-b-modal.authModal>Login</b-nav-item>
          <b-nav-item v-if="!logged" href="#">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal id="authModal" title="BootstrapVue">
      <div class="my-4">
        <Login />
      </div>
    </b-modal>

  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Login from '@/components/Login'
export default {
  props: ['theme'],
  components: {
    Logo, Login
  },
  data() {
    return {
      logged: false,
      mainProps: { blank: true, blankColor: '#777', width: 28, height: 28, class: 'm1' },
    }
  }
}
</script>