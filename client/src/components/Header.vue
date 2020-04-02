<template>
  <div class="nav-menu">
    <nav>
      <div class="nav-wrapper indigo darken-1">
        <a href class="center brand-logo">Полка кафки</a>
        <a href data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/books">Книги</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/login">Войти</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul id="mobile-demo" class="sidenav" @click="$emit('close-menu')">
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/books">Книги</a>
      </li>
      <li>
        <a href="/about">О нас</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>
