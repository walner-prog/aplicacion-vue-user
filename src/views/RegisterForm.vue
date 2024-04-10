<template>
    <div class="container">

        <div class="row mt-3">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header bg-warning  text-white text-center">Registrate</div>
                    <div class="card-body">
                        <form @submit.prevent="registerUser">
                            <div class="form-group">
                                 <label for="username">Usuario:</label>
                                 <input class=" form-control" type="text" id="username" v-model="username" required>
                            </div>
                            <div class="form-group">
                                
                            <label for="password">Contraseña:</label>
                            <input class=" form-control" type="password" id="password" v-model="password" required>
                            </div>
                                 <br>
                            <div class="form-group text-center">
                                <button class="btn btn-primary text-center" type="submit">Registrarse</button>
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
      async registerUser() {
        try {
          const response = await axios.post('http://localhost:3001/auth/register', {
            username: this.username,
            password: this.password
          });
          
          if (response.status === 201) {
            alert('¡Usuario registrado correctamente!');
            // Redirigir a otra página si es necesario
          } else {
            alert('Error al registrar usuario');
          }
        } catch (error) {
          console.error('Error al registrar usuario:', error);
          alert('Error al registrar usuario. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  