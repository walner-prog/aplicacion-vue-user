<template>
    <br><br><br><br>
    <div class="container-fluid mt-6  justify-content-center align-items-center">
      <div class="row">
        <div class="col-md-6 offset-md-3 " >
          <div class="card" style="background-color: darkseagreen;">
            <div class="card-header bg-success bg-opacity-75 text-white text-center fst-italic">INICIA SESION</div>
            <div class="card-body">
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <label class="fst-italic text-white" for="username">Usuario:</label>
                  <input class="form-control" type="text" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                  <label class="fst-italic text-white" for="password">Contraseña:</label>
                  <input class="form-control" type="password" id="password" v-model="password" required>
                </div>
                <br>
                <div class="form-group text-center">
                  <button class="btn btn-success" type="submit">Iniciar sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:3001/auth/login', {
            username: this.username,
            password: this.password
          });
  
          const token = response.data.token;
          // Guardar el token de sesión en el almacenamiento local o en una cookie
          localStorage.setItem('token', token);
          // Redirigir a otra página o realizar alguna acción después del inicio de sesión
          // Por ejemplo, redirigir a la página de perfil del usuario
          this.$router.push('/home');
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  