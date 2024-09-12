import { mapGetters, mapActions } from 'vuex';
export const postMixin = {
  computed: {
    ...mapGetters(['getMessage'])
  },
   
    methods: {
      ...mapActions(['updateMessage']),
      setMessage(message) {
        this.updateMessage(message);
        this.$router.push('/messagedisplay')
      }
    },
  };
 
