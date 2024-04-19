<template>
    <div class="row">
      <div class="col-lg-8 offset-lg-2 col-sm-12">
        <div class="row">
          <div class="col-md-4 mb-3" v-for="user in users" :key="user.id">
            <div class="card h-100">
              <div class="card-body bg-success">
                <h5 class="card-title text-white">{{ user.nombre }}</h5>
                <h6 class="card-subtitle mb-2 text-white-50">{{ user.email }}</h6>
                <p class="card-text">Rol: {{ user.rol }}</p>
                <div class="d-flex justify-content-between">

                  <button @click="deleteUser(user.id)" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i> Eliminar
                  </button>
                </div>
              </div>
              <div class="card-footer bg-danger">
                <small class="text-white-50">ID: {{ user.id }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import axios from 'axios';
  
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    methods: {
      async deleteUser(userId) {
        // Mostrar un mensaje de confirmación con SweetAlert2
        const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: 'No podrás revertir esta acción',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar'
        });
  
        // Si el usuario confirma la eliminación
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(`https://apiusuarios-evxn.onrender.com/api/users/${userId}`);
            console.log('Usuario eliminado:', response.data);
            // Mostrar alerta de éxito
            await Swal.fire(
              '¡Eliminado!',
              'El usuario ha sido eliminado correctamente.',
              'success'
            );
            // Emitir un evento para notificar al componente padre que se ha eliminado un usuario
            this.$emit('user-deleted');
          } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            // Mostrar alerta de error
            await Swal.fire(
              'Error',
              'No se pudo eliminar el usuario.',
              'error'
            );
          }
        }
      },
      editUser(userId) {
        // Emitir un evento para notificar al componente padre que se quiere editar un usuario
        this.$emit('edit-user', userId);
      }
    }
  };
  </script>
  
  <style>
  /* Estilos CSS */
  </style>
  