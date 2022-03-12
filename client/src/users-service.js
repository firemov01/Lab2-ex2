function users() {
  get = function () {
    return axios.get('http://localhost:3000/users');
  };

  deleteId = function (id) {
    return axios.delete(`http://localhost:3000/users/${id}`);
  };

  createUser = function (user){
    return axios.put(`http://localhost:3000/users`, user);
  }

  updateUser = function (id, user){
    console.log(id, user);
    return axios.patch(`http://localhost:3000/users`, {user: {...user}, index: id});
  }

  return {
    get: get,
    delete: deleteId,
    createUser: createUser,
    updateUser: updateUser
  };
}
