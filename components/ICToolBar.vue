<template>
  <div class="tlbar">
    <v-toolbar dense color="blue">
      <v-toolbar-title
        class="tlTitle"
        style="color: white; font-size: 35px; font-family: sans-serif"
        >Bell</v-toolbar-title
      >

      <v-divider class="pa-4" vertical></v-divider>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            v-if="toolbarType != 'login'"
            v-bind="attrs"
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title
              >{{ item.title }}
              <v-divider></v-divider>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-divider vertical></v-divider>
      <v-spacer></v-spacer>

      <v-btn v-if="toolbarType != 'login'" color="primary" elevation="2">
        My CWT
      </v-btn>
      <v-divider class="pa-4" vertical></v-divider>
      <div style="color: white" class="pa-4">EN/FR</div>
      <v-divider class="pa-4" vertical></v-divider>
      <v-btn v-if="toolbarType != 'login'" class="primary" icon color="white">
        <v-icon>mdi-export</v-icon>
      </v-btn>
      <v-btn v-else class="primary"> bell.ca/Enterprise </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Mass Market Home' },
        { title: 'Enterprise Home' },
        { title: 'Fibe TV Home' },
        { title: 'User Access Management(2)' },
        { title: 'Search Tool' },
        { title: 'Add Profile from CSG' },
        { title: 'Add a Fibe TV profile' },
        { title: 'Quote Request' },
        { title: 'Installer Locator' },
        { title: 'Document Center' },
        { title: 'Reports' },
        { title: 'Region Locator' },
        { title: 'Your Buisness Unit' },
      ],
    };
  },
  props: {
    toolbarType: {
      type: String,
      default: null,
    },
  },
};
</script>
<style>
.tlTitle {
  padding-left: 150px !important;
}
</style>
