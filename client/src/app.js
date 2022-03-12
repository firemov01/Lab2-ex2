function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      usersService: null,
      userForm: { name: null, city: null }
    },
    created: function () {
      this.usersService = users();
      this.refetch();
    },
    methods: {
      refetch: function () {
        this.usersService.get().then(response => (this.users = response.data));
      },
      deleteUser: function (id) {
        this.usersService.delete(id);
        this.users.splice(id, id === 0 ? 1 : id);
      },
      createUser: function () {
        this.usersService.createUser(this.userForm);
        this.users.push(this.userForm);
        this.userForm = { name: null, city: null };
      },
      updateUser: function (id) {
        this.usersService.updateUser(id, this.userForm);
        console.log(this.users[id]);
        this.users[id] = this.userForm;
        this.userForm = { name: null, city: null };
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
