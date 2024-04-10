<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand active" href="#">Usuarios</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" :class="{ 'active': $route.path === '/home' }">
            <router-link to="/home" class="nav-link" aria-current="page">Mostrar</router-link>
          </li>
          <li class="nav-item" :class="{ 'active': $route.path === '/reporte' }">
            <router-link to="/reporte" class="nav-link">Reporte</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
</template>

<style>
  .nav-item.active {
    background-color: #13543b; /* Color de fondo para el elemento de menú activo */
  }

  /* Media query para pantallas pequeñas */
  @media (max-width: 992px) {
    .nav-item.active {
      background-color: #13543b; /* Cambia el color de fondo en pantallas pequeñas */
      padding: 5px; /* Ajusta el padding del elemento de menú activo en pantallas pequeñas */
      width: 80px;
    }
  }
</style>
