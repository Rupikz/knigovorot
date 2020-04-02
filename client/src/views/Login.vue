<template>
  <div class="login-form">
    <a href="" class="logo">Полка кафки</a>
    <ul class="collapsible">
      <li class="active">
        <div class="collapsible-header">
          Авторизация
        </div>
        <div class="collapsible-body">
          <div class="row">
            <form class="col s12">
              <div class="input-field">
                <input id="login" placeholder="Ваша почта или логин" type="text" class="validate">
                <label for="login">Логин</label>
              </div>
              <div class="input-field">
                <input id="password" placeholder="Ваш пароль" type="text" class="validate">
                <label for="password">Пароль</label>
              </div>
              <a class="waves-effect waves-light btn">Войти</a>
            </form>
          </div>
        </div>
      </li>
      <li>
        <div class="collapsible-header">
          Регистрация
        </div>
        <div class="collapsible-body">
          <div class="row">
            <form class="col s12">
              <div class="input-field">
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input id="login" placeholder="Ваш логин" type="text" class="validate">
                <label for="login">Логин</label>
              </div>
              <div class="input-field">
                <input id="password" placeholder="Ваш пароль" type="text" class="validate">
                <label for="password">Пароль</label>
              </div>
              <a class="waves-effect waves-light btn">Зарегистрироваться</a>
            </form>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
    name: 'Login',
    components: {
   
    }
};
</script>
  