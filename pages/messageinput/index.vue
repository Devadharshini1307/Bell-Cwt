
<template>
  <div class="message-input-container">
    <v-text-field
      v-model="newMessage"
      label="Enter a message"
      class="message-input-field"
    ></v-text-field>
    <v-btn
      @click="setMessage(newMessage)"
      class="update-message-btn"
      color="primary"
    >
      Update Message
    </v-btn>
    
  </div>

</template>
  
  <script>
 import { postMixin } from '../../mixins/postMixin';
  
  export default {
    mixins: [postMixin],
    data() {
      return {
        newMessage: ''
      };
    },
  };
  </script>
  <style scoped>
 .theme--light.v-btn.v-btn--has-bg {
    background-color: dodgerblue;
}
  .message-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
  
  .message-input-field {
    width: 100%;
    max-width: 400px;
    margin-bottom: 16px;
  }
  
  .update-message-btn {
    width: 100%;
    max-width: 200px;
  }
  </style>