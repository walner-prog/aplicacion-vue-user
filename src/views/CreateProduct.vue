<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">Crear Usuario</div>
          <div class="card-body">
            <h1>Crear Usuario</h1>
            <form @submit.prevent="createUser">
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" v-model="user.nombre" required>
              </div>
              <div class="form-group">
                <label for="email">Correo:</label>
                <input type="email" class="form-control" id="email" v-model="user.email" required>
              </div>
              <div class="form-group">
                <label for="rol">Rol:</label>
                <input type="text" class="form-control" id="rol" v-model="user.rol" required>
              </div>
              <br>
              <button type="submit" class="btn btn-success text-center">Crear Usuario</button>
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
      user: {
        nombre: '',
        email: '',
        rol: ''
      }
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await axios.post('https://apiusuarios-evxn.onrender.com/api/users', this.user);
        console.log('Usuario creado:', response.data);
        // Mostrar alerta de éxito
        Swal.fire('¡Éxito!', 'Usuario creado exitosamente', 'success');
        // Redirige al listado de usuarios después de crear uno
        this.$router.push({ path: '/home' });
      } catch (error) {
        console.error('Error al crear el usuario:', error);
        // Mostrar alerta de error
        Swal.fire('Error', 'No se pudo crear el usuario', 'error');
      }
    }
  }
};
</script>
