<script lang="js">
import { login } from "~/data/buttons";
import navStyles from "news-site-css/dist/nav.module.css";
import buttonStyles from "news-site-css/dist/button.module.css";
export default {
  data () {
    return {
      login,
      navStyles,
      buttonStyles
    }
  },
  methods: {
      logIn() {
        console.log('logIn clicked!');
      },
      openSitemap() {
        navigateTo("/");
      }
  },
}
</script>

<template>
  <nav
    :class="navStyles['page-navigation']"
    aria-label="main menu"
  >
    <div :class="navStyles['page-navigation-row']">
      <div :class="navStyles['page-navigation-column-left']">
        <Navbar :callback="openSitemap" />
      </div>
      <div :class="navStyles['page-navigation-column-right']">
        <button
          id="login-button"
          :class="[buttonStyles.button, buttonStyles['secondary-button'], navStyles['nav-button']]"
          @click="logIn"
        >
          {{ login.label }}
        </button>
      </div>
    </div>
  </nav>
</template>
