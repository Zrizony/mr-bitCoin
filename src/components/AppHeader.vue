<template>
  <section class="main-container main-nav">
    <nav class="flex align-center space-between">
      <span class="logo">Mr-Bitcoin</span>

      <div v-if="isLoggedinUser" class="flex align-center clean-list nav-options">
          <span>Hello {{ loggedinUsername }}</span>
          <span>Balance: ({{ loggedinBalance }} BTC)</span>
        <button class="btn-dropdown">
          <img v-bind:src="navIcon">
        </button>
        <div class="nav-content">
          <RouterLink to="/">Dashboard</RouterLink>
          <RouterLink to="/contacts">Contacts</RouterLink>
          <RouterLink v-on:click="onLogout" to="/loginsignup">Logout</RouterLink>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import router from '../router'
import shortImgsUrl from '@/assets/imgs/imgs.js'

export default {
  data() {
    return {
      loggedinUser: null,
      navIcon: shortImgsUrl.navBarIcon
    }
  },
  created() {
    this.loggedinUser = this.$store.getters.loggedinUser
    if (!this.loggedinUser && this.$route.fullPath !== '/loginsignup') {
      console.log(this.$route.fullPath)
      router.push('/loginsignup')
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch({ type: 'logout' })
      router.push('/loginsignup')
    },
  },
  computed: {
    isLoggedinUser() {
      return this.$store.getters.loggedinUser ? true : false
    },
    loggedinUsername() {
      return this.$store.getters.loggedinUser.username
    },
    loggedinBalance() {
      return this.$store.getters.loggedinUser.balance
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/setup/variables.scss';

.main-nav {
  height: 70px;
  border-bottom: 1px solid #eceff1;
  color: #050f19;
}

.nav-options {
  font-size: 1em;
  font-weight: bold;
  gap: 2em;
  position: relative;

  & a {
    color: #050f19;
    :hover {
      cursor: pointer;
    }
  }
}

.logo {
  color: $clr8;
  font-size: 1.5em;
  font-weight: bold;
}

.btn-dropdown {
  background-color: $clr1;
  width: 50px;
  height: 50px;
}

.nav-content {
  display: none;
  position: absolute;
  top: 100;
  right: 0;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;

  a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
background-color: $clr7;
  }
  }
}

.nav-options:hover .nav-content {display: block;}

.nav-options:hover .btn-dropdown {background-color: $clr2;}
</style>
