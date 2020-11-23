<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered elevated class="bg">
      <q-toolbar style="  text-align: center;">
        <q-toolbar-title>
          <q-avatar>
            <img
              class="logo"
              width="13rem"
              src="data:image/png;base64,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"
            />
          </q-avatar>
          People2Find
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer
      content-class="menuBg"
      :width="200"
 elevated
      show-if-above
      bordered
      behavior="desktop"
      v-model="right"
      side="right"
    >
      <!-- drawer content -->
      <q-list>
        <q-item-label header>Categorias</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          
          class="text-grey-4"

          exact
          
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false,
      navs: [
        {
          label: "Licenciados",
          icon: "event_available",
          to: "/eventos"
        },
        {
          label: "Tecnicos",
          icon: "construction",
          to: "/tecnicos"
        },
        {
          label: "Abot us",
          icon: "info",
          to: "/about-us"
        },
        {
          label: "Home",
          icon: "home",
          to: "/"
        },
        {
          label: "Home",
          icon: "home",
          to: "/"
        },
        {
          label: "Home",
          icon: "home",
          to: "/"
        },
        {
          label: "Home",
          icon: "home",
          to: "/"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Texturina:wght@200&display=swap");
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}



.bg {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  font-family: Texturina;
}

.menuBg {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  //width: auto;
}

.logo {
  width: auto;
  height: auto;
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
