<template>
  <v-snackbar v-model="show" :color="color" top right>
    {{ msg }}

    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click.prevent="show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      color: '',
      msg: '',
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackBar/showMessage') {
        this.msg = state.snackBar.msg;
        this.color = state.snackBar.color;
        this.show = true;
      }
    });
  },
};
</script>

<style></style>
