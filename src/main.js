// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Resource from 'vue-resource'
import Bmob from 'hydrogen-js-sdk'

Vue.use(Resource);
Vue.config.productionTip = false;
Bmob.initialize("c9df3956b8fc0c55","794035");
// Bmob.debug(true);
Vue.prototype.Bmob = Bmob;

Vue.prototype.$goRoute = function(route){
  this.$router.push(route);
}
// Vue.config.warnHandler = function(msg, vm, trace) {
//   console.log(`Warn: ${msg}\nTrace: ${trace}`);
// }
// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// }


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('touppercase',function(value){
  let val;
  if(value){
    val = value.toUpperCase();
  }
  else{
    val = 'error';
  }
  return val;
})

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
})
