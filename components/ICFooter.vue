<template>
  <div>
    <div>
      <v-divider class="mt-4"></v-divider>
    </div>

    <div class="footer">
      <v-btn icon>
        <v-icon dark> mdi-copyright </v-icon>
      </v-btn>
      <div class="footer">Bell Canada , 2022. All Rights reserved.</div>
      <div class="footer">
        <a>Contact us</a>
        <a>Jobs @ Bell</a>
        <a>Privacy</a>
        <a>Legal & Regulatory</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toolbarType: {
      type: String,
      default: null,
    },
  },
  methods: {
    appBarClick() {
      debugger;
    },
  },
};
</script>
<style>
.footer {
  display: inline-block;
}
</style>
