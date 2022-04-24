export default {
    install(Vue,x,y){
        console.log(x,y)
        // 全局过滤器
        Vue.filter('myTime',function(val){
            
            return val.slice(0,2)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
        }),
        // 定义全局混入
        Vue.mixin({
            data(){
                return {
                    x:19980509,
                    y:19980314
                }
            }
        })
        // 给Vue原型上面添加方法,vm 和vc 都能使用
        Vue.prototype.hello = () => {
            alert('你好')
        }
    }
}