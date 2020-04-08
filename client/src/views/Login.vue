<template>
  <div class="login-form">
    <a href="" class="">Здесь должно быть лого</a>
    <ul class="collapsible">
      <li class="active">
        <div class="collapsible-header">
          Авторизация
        </div>
        <div class="collapsible-body">
          <div class="row">
            <form class="col s12" method="POST">
              <div class="input-field">
                <input type="hidden" name="operation" value="signin-user">
                <input id="login" name="login" placeholder="Ваша почта или логин" type="text" class="validate">
                <label for="login">Логин</label>
              </div>
              <div class="input-field">
                <input id="password" name="password" placeholder="Ваш пароль" type="text" class="validate">
                <label for="password">Пароль</label>
              </div>
              <button class="waves-effect waves-light btn">
                Войти
              </button>
            </form>
            {{ info }}
          </div>
        </div>
      </li>
      <li>
        <div class="collapsible-header mark">
          Регистрация
        </div>
        <div class="collapsible-body">
          <div class="row">
            <form class="col s12" method="POST">
              <div class="input-field">
                <input type="hidden" name="operation" value="create-user">
                <input id="email" name="email" type="email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input id="login" name="login" placeholder="Ваш логин" type="text" class="validate">
                <label for="login">Логин</label>
              </div>
              <div class="input-field">
                <input id="password" name="password" placeholder="Ваш пароль" type="text" class="validate">
                <label for="password">Пароль</label>
              </div>
              <button class="waves-effect waves-light btn">
                Зарегистрироваться
              </button>
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
   
    },
    mounted() {
      // this.$http.get('http://localhost:1337/login')
      //   .then(result => {
      //     this.info = result.errorMsg;
      //   }) 
      axios
        .get('localhost:8085/login')
        .then(response => {
          console.log(this.info = response);
          this.info = response;
        }).catch((error) => {
          console.log(error);
        });
    }
};
</script>
  