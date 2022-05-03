<template>
  <div>
    <header>
        <nav class="headerNav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/albums">Albums</RouterLink>
            <RouterLink to="/chanteurs">Chanteurs</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    <body>
      <RouterView class="routerView" />
    </body>
  </div>
</template>


<style>
  #app {
    margin: 0 auto;
  }

  .headerNav {
    margin: auto;
    width: 50%;
    padding: 10px;
    height: 30px;
    flex: 1;
    border: black solid 1px;
    border-style: dotted solid;
    text-align: center;
  }

  .routerView {
    position: absolute;
    width: 98%;
    height: 500px;
    top: 100px;
    text-align: center;
  }

  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    padding: 0 5rem;
  }

  @media (min-width: 1024px) {
    nav {
      font-size: 2rem;
      padding: 2rem 0;
    }
  }
</style>
