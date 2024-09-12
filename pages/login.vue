<template>
  <v-container fluid fill-height class="login-container">
    <v-row justify="center" align="center" class="login-form">
      <v-col cols="12" sm="8" md="4" class="login-form">
        <v-card class="elevation-12">
          <v-card-title class="headline text-center">Login</v-card-title>

          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                label="Email"
                v-model="email"
                :rules="emailRules"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
           
              <v-btn
                block
                @click="submit"
                :disabled="!valid"
                large
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
   
 

  </v-container>
</template>

<script>
export default {

  data() {
    return {
      email: '',
      valid: false,
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateEmail', this.email);
        this.$router.push('/homepage');
      }
    },
  },
};
</script>
<style>

</style>
<style scoped>
.login-container {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  height: 100vh;
}

.login-row {
  height: 100%; 
}

.login-form {
  max-width: 400px; 
  width: 100%;
  margin: auto; 
}
.v-card {
  padding: 24px;
  border-radius: 8px;
  background-color: white;
}

.v-btn {
  margin-top: 24px;
}

.v-text-field input {
  color: #000;
}

.v-card-title {
  color: #0072ff;
}
</style>
