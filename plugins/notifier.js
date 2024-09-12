export default ({ store }, inject) => {
  inject('notifier', {
    showMessage({ msg = '', color = '' }) {
      store.commit('snackBar/showMessage', { msg, color });
    },
  });
};
