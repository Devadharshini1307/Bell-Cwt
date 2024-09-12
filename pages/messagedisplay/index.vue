
</script>
<template>
  <div class="message-input-container">
    <h2>Message from Vuex Store:</h2>
    <b>{{ getMessage }}</b>
  </div>
</template>

<script>
import { postMixin } from '../../mixins/postMixin';

export default {
  mixins: [postMixin]
};
</script>
<style>
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
</style>