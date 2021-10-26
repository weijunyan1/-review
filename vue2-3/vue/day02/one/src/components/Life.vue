
<template>
  <div>
      <p>学习生命周期</p>
      <p id="myP">{{msg}}</p>
      <ul id="myUL">
          <li v-for="(val,index) in arr" :key="index">
              {{val}}
          </li>
      </ul>
      <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'HELLO'
        }
    },
    // 一。初始化
    // beforeCreate 说明vue钩子函数被执行 （但是此时访问不到页面元素）
    beforeCreate(){
        console.log('beforeCreate -- 执行');
        console.log(this.msg);//undefined
    },
    // data和methods初始化以后
    // 场景：网络请求，注册全局事件
    created(){
        console.log("created -- 执行");
        console.log(this.msg);//HELLLO

        this.timer = setInterval(()=>{
            console.log("哈哈哈");
        },1000)
    }
}
</script>

<style>

</style>