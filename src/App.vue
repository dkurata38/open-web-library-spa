<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn icon
        @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer" temporary absolute>
      <v-list>
        <v-list-item v-for="(navigationItem, i) in navigationItems"
          :key="i" link>
          <v-list-item-icon>
            <v-icon v-text="navigationItem.icon">
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link v-bind:to="navigationItem.route" v-text="navigationItem.title">
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script type="application/javascript">
export default {
  data() {
    return {
      drawer: false,
      navigationItems: [
        { title: 'HOME', route: '/', icon: 'mdi-home' },
        { title: 'ABOUT', route: '/about', icon: 'mdi-help-circle' },
      ],
    };
  },
};
</script>
