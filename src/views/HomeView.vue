<template>
  <div class="row">
    <div class="col-lg-4 offset-lg-2 mb-3">
      <input type="text" v-model="categoryFilter" @input="searchUsers" class="form-control" placeholder="Buscar por nombre de usuario">
    </div>
    <div class="col-lg-4 mb-3">
      <button @click="goToCreateProductView" class="btn btn-success">
        <i class="fa-solid fa-plus"></i> Crear Usuario
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-8 offset-lg-2 col-sm-12">
      <div class="table-responsive">
        <table class="table table-bordered table-hover border-dark">
          <thead class=" bg-info
          ">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th colspan="2">Acciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider " id="contenido">
            <tr class="bg-dark bg-opacity-10" v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.nombre }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.rol }}</td>
              <td>
                <router-link :to="{ name: 'EditProduct', params: { id: user.id } }" class="btn btn-sm btn-warning mr-3">
                  <i class="fa-solid fa-edit"></i> Editar
                </router-link>
              </td>
              <td>
                <button @click="deleteUser(user.id)" class="btn btn-sm btn-danger mr-3">
                  <i class="fa-solid fa-trash"></i> Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      categoryFilter: '', // Nueva propiedad para la búsqueda por nombre de usuario
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
  try {
    const url = `https://apiusuarios-evxn.onrender.com/api/users?nombre=${this.categoryFilter.trim()}`;
    const response = await axios.get(url);
    this.users = response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
},

    // Método para buscar usuarios por nombre
    searchUsers() {
      this.getUsers();
    },
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
          // Actualizar la lista de usuarios después de eliminar uno
          this.getUsers();
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
      // Redirige a la vista de edición del usuario con el ID userId
      this.$router.push({ name: 'EditProcuct', params: { id: userId } });
      console.log('Editando usuario con ID:', userId);
    },
    goToCreateProductView() {
      // Redirige a la vista de creación de usuario
      this.$router.push({ name: 'create-product' });
    }
  }
};
</script>

<style>
/* Estilos CSS */
</style>
