import axios from "axios";
import { useState } from "react";

const useCrud = () => {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    const URL = `https://users-crud.academlo.tech/users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createNewUser = (data) => {
    const URL = `https://users-crud.academlo.tech/users/`;
    axios
      .post(URL, data)
      .then((res) => {
        getAllUsers();
        document.getElementById("div__app").classList.add("was-validated");
        setTimeout(() => {
          document.getElementById("div__app").classList.remove("was-validated");
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        

       if(window.confirm("¿Estás seguro de eliminar este usuario?")) {
        getAllUsers()
        document.getElementById("div__app").classList.add("was-deleted");
        setTimeout(() => {
          document.getElementById("div__app").classList.remove("was-deleted");
        }, 5000);
       } else {
        document.getElementById("div__app").classList.add("was-cancelled");
        setTimeout(() => {
          document.getElementById("div__app").classList.remove("was-cancelled");
        }, 5000);
       }

      })
      .catch((err) => console.log(err));
  };

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(URL, data)
      .then((res) => {
        getAllUsers()
        document.getElementById("div__app").classList.add("was-updated");
        setTimeout(() => {
          document.getElementById("div__app").classList.remove("was-updated");
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  return { users, getAllUsers, createNewUser, deleteUserById, updateUserById };
};

export default useCrud;
