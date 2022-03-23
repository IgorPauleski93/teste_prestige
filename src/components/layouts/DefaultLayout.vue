<template>
  <div class="nav">
    <ul v-for="rota in rotas" :key="rota.id">
      <li>
        <router-link :to="rota.redirect">{{ rota.name }}</router-link>
      </li>
    </ul>
  </div>
  <slot></slot>
  <footer>
    <h1>Desenvolvido por Igor Pereira Pauleski</h1>
  </footer>
</template>

<script>
export default {
  setup() {
    const rotas = [
      { id: 1, name: "Home", redirect: "/" },
      { id: 2, name: "Contato", redirect: "/contato" },
    ];

    return {
      rotas,
    };
  },
};
</script>

<style scoped>
.nav {
  width: 100vw;
  height: 10vh;
  display: flex;
  background: cornflowerblue;
}

.nav > ul {
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
}

.nav > ul > li {
  padding: 10px;
  list-style: none;
}

.nav > ul > li > a {
  text-decoration: none;
  color: #f2f2f2f2;
  font-size: 20px;
}

footer {
  width: 100%;
  height: 30px;
  font-size: 7px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: cornflowerblue;
}
</style>
