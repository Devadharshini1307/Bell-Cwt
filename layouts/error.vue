<template>
  <v-row class="fill-height justify-center my-0">
    <v-col
      v-if="error.statusCode === 401 || error.statusCode === 403"
      md="1"
      class="d-flex justify-center align-center"
    >
      <v-row class="justify-center">
        <v-col md="12">
          <img
            :src="require(`~/assets/svg/${unauthorised}`)"
            class="icon"
            alt="'Page not found SVG'"
            height="250"
          />
        </v-col>
        <v-col md="12" class="text-body-2 info--text text-center">
          You are not authorised to visit this page. Contact your administrator
          to gain access to this page.
        </v-col>
        <v-col md="12" class="text-center">
          Click here to go back to the
          <NuxtLink to="/settings">Home Page</NuxtLink>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      v-if="error.statusCode === 404"
      md="1"
      class="d-flex justify-center align-center"
    >
      <v-row class="justify-center">
        <v-col md="12">
          <img
            :src="require(`~/assets/svg/${page_not_found}`)"
            class="icon"
            alt="'Page not found SVG'"
            height="250"
          />
        </v-col>
        <v-col md="12" class="text-body-2 neutral2--text text-center">
          The page you are looking for does not exist.
        </v-col>
        <v-col md="12" class="text-center">
          Click here to go back to the
          <NuxtLink to="/login">Home Page</NuxtLink>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      v-if="error.statusCode === 500"
      md="1"
      class="d-flex justify-center align-center"
    >
      <v-row class="justify-center">
        <v-col md="12">
          <img
            :src="require(`~/assets/svg/${server_down}`)"
            class="icon"
            alt="'Server down SVG'"
            height="250"
          />
        </v-col>
        <v-col md="12" class="text-body-2 info--text text-center">
          An unexpected error ocurred on the server. Please try again later.
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { svg } from '../constants/svg';
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      page_not_found: svg.PAGE_NOT_FOUND,
      server_down: svg.SERVER_DOWN,
      unauthorised: svg.UNAUTHORISED,
    };
  },
};
</script>

<style></style>
