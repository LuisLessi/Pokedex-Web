<script setup>
</script>
<template>
  <nav class="navbar navbar-expand-lg-fixed navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/icon_navbar.png"
          alt="Bootstrap"
          class="icon_navbar"
          width="30"
          height="24"
        />
      </router-link>
      <router-link class="navbar-brand" to="/">Pokédex Web</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">All generation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/First"
              >First generation</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Second"
              >Second generation</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Third"
              >Third generation</router-link
            >
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/Four"
              >Four generation</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Fifth"
              >Fifth generation</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:-webkit-any-link {
  text-decoration: none;
  color: white;
}

.icon_navbar {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

</style>