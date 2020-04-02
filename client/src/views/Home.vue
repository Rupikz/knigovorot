<template>
  <div>
    <Banners />
    <h4 class="section-name">
      Художественная литература <span class="watch-more"><a>Смотреть еще ></a></span>
    </h4>
    <Cards />
    <h4 class="section-name">
      Научпоп <span class="watch-more"><a>Смотреть еще ></a></span>
    </h4>
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue';
import Banners from '@/components/Banners.vue';



export default {
  name: 'Home',
  components: {
    Cards,
    Banners,
  }
};
</script>
