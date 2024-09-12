
export const state = () => ({
    state: {
        email: '',
         message: ''
      },
  });
  
  export const getters = {
    getEmail: (state) => state.email,
    getMessage:(state) => state.message
      
  };
  
  export const actions = {
    updateEmail({ commit }, email) {
        console.log(email)
        commit('setEmail', email);
      },
      updateMessage({ commit }, newMessage) {
        commit('setMessage', newMessage);
      }
  };
  
  export const mutations = {
    setEmail(state, email) {
        state.email = email;
      },
      setMessage(state, newMessage) {
        state.message = newMessage;
      }
  };

  
