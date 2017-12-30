<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" v-bind:src="seller.avatar">
      </div><div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
        <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="bullletin-wrapper">
      </div>
  </div>
</div>
</template>
<script>
export default{
  props:{
    seller:{
      type:Object
    }
  }
}
</script>
<style>
.header{
  background:#000;
  color:#fff;
}
.content-wrapper{
  padding: 24px 12px 18px 24px;
  font-size:0;
}
.content-wrapper .avatar{
  display:inline-block;
}
.content-wrapper .avatar{
  border-radius:2px;
}
.content-wrapper .content{
  display:inline-block;
  margin-left:16px;
  font-size:14px;
}
.content-wrapper .content .title{
  margin:2px 0 8px 0
}
.content-wrapper .content .title .brand{
  display:inline-block;
  vertical-align:top;
  width:30px;
  height:18px;
  background:url("brand@2x.png");
  background-size:30px 18px 
}
.content-wrapper .content .title .name{
  margin-left:6px;
  font-size:16px;
  line-height:18px;
  font-weight:bold;
}
.content-wrapper .content .description{
  margin-bottom:10px;
  line-height:12px;
  font-size:12px;
}
</style>

