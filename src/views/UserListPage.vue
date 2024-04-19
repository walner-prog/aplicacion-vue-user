<template>
    <div>
      <h1 class=" text-center fw-bolder bg-secondary">Usuarios</h1> <hr>
      <user-list :users="users" @edit-user="editUser" @user-deleted="getUsers" />
    </div>
  </template>
  
  <script>
import UserList from './UserList.vue';
  import Swal from 'sweetalert2';
  import axios from 'axios';
  
  export default {
    components: {
      UserList
    },
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      async getUsers() {
        try {
          const response = await axios.get('https://apiusuarios-evxn.onrender.com/api/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error al obtener los usuarios:', error);
        }
      },
      async editUser(userId) {
        // Implementa la lógica para editar un usuario según tus necesidades
      }
    }
  };
  </script>
  
  <style>
  /* Estilos CSS */
  </style>
  