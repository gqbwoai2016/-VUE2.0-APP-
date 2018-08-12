<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
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
    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from './common/js/util';
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data() {
      return {
//        对最外层模块设置ID模拟这个商家的标签，以便于收藏功能实现，因为有很多商家存在
        seller: {
          id: (() => {
            const queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        const res = response.data;
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, res.data);
        }
      });
    },
    components: {
//      本来也可以用header但是和h5标签冲突，故重新起名
      'v-header': header
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'common/scss/mixin.scss';
  /*使用移动端经典布局flex来排tab部分（商品，商家，评论）*/
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, .1));
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
