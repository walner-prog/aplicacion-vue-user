<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">Editar Usuario</div>
          <div class="card-body">
            <h1>Editar Usuario</h1>
            <form @submit.prevent="updateUser">
              <div class="form-group mb-3">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" v-model="editedUser.nombre" class="form-control" required>
              </div>
              <div class="form-group mb-3">
                <label for="email">Correo:</label>
                <input type="email" id="email" v-model="editedUser.email" class="form-control" required>
              </div>
              <div class="form-group mb-3">
                <label for="rol">Rol:</label>
                <input type="text" id="rol" v-model="editedUser.rol" class="form-control" required>
              </div>
              <br>
              <button type="submit" class="btn btn-primary">Guardar Cambios</button>
              <div class="row mt-3">
                <div class="col-md-6 offset-md-3">
                  <router-link to="/home" class="btn btn-secondary mb-3">
                    Volver a la lista de usuarios
                  </router-link>
                </div>
              </div>
            </form>
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
  data() {
    return {
      editedUser: {
        id: null,
        nombre: '',
        email: '',
        rol: ''
      }
    };
  },
  mounted() {
    const userId = this.$route.params.id;
    this.loadUser(userId);
  },
  methods: {
    async loadUser(userId) {
      try {
        const response = await axios.get(`https://apiusuarios-evxn.onrender.com/api/users/${userId}`);
        this.editedUser = response.data;
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    },
    async updateUser() {
      try {
        await axios.put(`https://apiusuarios-evxn.onrender.com/api/users/${this.editedUser.id}`, this.editedUser);
        console.log('Usuario actualizado correctamente');
        // Mostrar alerta de éxito
        Swal.fire('¡Éxito!', 'Usuario actualizado exitosamente', 'success');
        this.$router.push({ path: '/home' }); // Redirige al listado de usuarios después de actualizar
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        // Mostrar alerta de error
        Swal.fire('Error', 'No se pudo actualizar el usuario', 'error');
      }
    }
  }
};
</script>
