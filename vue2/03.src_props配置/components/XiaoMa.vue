<template>
  <div class="XiaoMa">
      <h2>{{myname}}</h2>
      <h2>{{myage}}</h2>
      <h2>{{sex}}</h2>
      <button @click="showInfo">点我提示信息</button>
  </div>
</template>

<script>
export default {
    name:'XiaoMa',
    data(){
        return {
            myname:this.name,
            myage:this.age
        }
    },
    methods:{
        showInfo(){
            alert('我是小马')
        }
    },
    // props 第一种简单声明接收
    // props:['name','sex','age']
    //第二种接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//第三种接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>