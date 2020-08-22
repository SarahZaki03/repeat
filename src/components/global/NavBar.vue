<template>
  <nav class="text-dark navbar navbar-expand-lg navbar-light bg-white p-0">
    <div class="container">
      <router-link :to="`/${$i18n.locale}`" class="navbar-brand">
        <div class="logo-container">
        <h1 class="head">{{ $t("navbar.head") }}</h1>
        <img
          src="@/assets/logo.svg"
          class="logo"
        />
        </div>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto menu">
          
          <li class="nav-item my-nav-item">
            <router-link :to="`/${$i18n.locale}`" class="nav-link home">
              {{ $t("home.title") }}
            </router-link>
          </li>

          <li class="nav-item my-nav-item">
            <router-link :to="`/${$i18n.locale}/references`" class="nav-link about">
              {{ $t("references.title") }}
            </router-link>
          </li>

          <li class="nav-item my-nav-item">
            <router-link
              :to="`/${$i18n.locale}/contact`"
              class="nav-link contact"
            >
              {{ $t("contact.purpose") }}
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown clickable">
            <a
              class="nav-link text-big text-dark pt-2 mt-2 mr-3"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-language"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a @click="setLocale('ar')" class="dropdown-item ar-font"> العربية </a>
              <a @click="setLocale('en')" class="dropdown-item">English</a>              
              <a @click="setLocale('fr')" class="dropdown-item">French</a>
            </div>
          </li>

          <li class="nav-item">
            <div v-if="auth">
              <label @click="logout" class="nav-link nav-item logout">
                <!-- <h5 class="nav-item">{{ $t("navbar.logout") }} ( {{ name }} )</h5> -->
                <h5 class="nav-item">{{ $t("navbar.logout") }} </h5>
              </label>
            </div>
            <div v-else>
              <router-link
                :to="`/${$i18n.locale}/identity`"
                class="nav-link text-upper login"
              >
                {{ $t("navbar.login") }}
              </router-link>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from "axios";
import i18n from "../../i18n";

export default {
  name: "Navbar",
  data() {
    return {
      auth: false,
      name: ""
    };
  },

  mounted: function() {
    this.auth = localStorage.getItem("user_token") ? true : false;
    this.name = localStorage.getItem("user_fullName");
    this.controlNavColor();
  },

  methods: {
    logout() {
      document.querySelector("#page-loader").style.display = "flex";
      localStorage.removeItem("user_token");
      this.$router.push(`/${this.$i18n.locale}/identity`);
      this.$router.go();
    },

    setLocale(newLocale) {
      // delete axios.defaults.headers.common["Accept-Language"]

      // axios.defaults.headers.common["Accept-Language"] = newLocale
      process.VUE_APP_I18N_LOCALE = newLocale;
      // axios.defaults.headers = {
      //   "Accept-Language": newLocale
      // }
      // this.$i18n.locale = newLocale;
      i18n.locale = newLocale;
      this.$router.push({
        params: { lang: newLocale }
      });

      this.$router.go();
    },

    controlNavColor() {
      if (this.auth) {
        document
          .querySelector(".home")
          .setAttribute("style", "color: black !important");
        document
          .querySelector(".list")
          .setAttribute("style", "color: black !important");
        document
          .querySelector(".about")
          .setAttribute("style", "color: black !important");
        document
          .querySelector(".contact")
          .setAttribute("style", "color: black !important");
      } else {
        document
          .querySelector(".home")
          .setAttribute("style", "color: gray !important");
        document
          .querySelector(".list")
          .setAttribute("style", "color: gray !important");
        document
          .querySelector(".about")
          .setAttribute("style", "color: black !important");
        document
          .querySelector(".contact")
          .setAttribute("style", "color: black !important");
      }
    }
  }
};
</script>

<style scoped lang="scss">
$primary: #ec4315;
$gold: #d6a206;

.text-upper {
  text-transform: uppercase;
}
.logout > h5 {
  border-bottom: 2px solid $primary;
  margin: 13px 0px -10px 0px;
  padding: 0px 0px 10px 0px;
  font-size: 15px !important;
}
.logout:hover {
  cursor: pointer;
}

.nav-item {
  display: inline-block;
  font-weight: bold;
  height: 100%;
  color: black !important;
}

.text-big {
  font-size: 1.2em;
}

.clickable {
  cursor: pointer;
}

h1 {
  color: red($color: #000000);
} 
.navbar {
  background: transparent !important;
  // direction: rtl;
}
.menu .nav-link{
  font-family: 'Dubai';
  font-weight: 700;
  color: $gold;
  background-image: linear-gradient(180deg, currentColor 50% , transparent);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: .5s;
}
.menu .nav-link:hover{
	background-size: 100% 2px;
}
.nav-link.router-link-exact-active {
  background-size: 100% 2px; 
}
.login {
  margin: 10px;
}
.logo-container{
  display: flex;
  flex-direction: row-reverse;
  margin-top: .5em;
}
.logo {
	height: 50px;
  width: 50px;
  padding-top: 8px;
  margin-right: 1em;
}
.head{
  display: inline-block;
	color: white;
  font-size: 2.3em;
	font-family: 'Ge tasmeem';
	font-weight: 500;
}

.dropdown-menu {
  margin : 12px
}
</style>
