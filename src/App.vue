<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-bottom-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
import axios from 'axios'

export default {
  data (){
    return {
      seller:{}
    };
  },
  created(){
    axios.get('/api/seller')
        .then((response) => {
            response = response.data;
            console.log(response)
            if(response.errno === 0) {
                this.seller = response.data;
            }
        });
    },
  components: { 'v-header': header }
}
</script>

<style>
#app .tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

#app .tab .tab-item {
  flex: 1;
  text-align: center;
}

#app .tab .tab-item a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}

#app .tab .tab-item a.active {
  color: #f01414;
}

.border-bottom-1px {
  position: relative;
}

.border-bottom-1px::after {
  background-color:  rgb(77, 85, 93);
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2.0),
only screen and (min-resolution: 2dppx) {
  .border-bottom-1px::after {
    transform: scaleY(0.5);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 3.0),
only screen and (min-resolution: 3dppx) {
  .border-bottom-1px::after,
  .border-top-1px::after {
    transform: scaleY(0.333);
  }
}
</style>
