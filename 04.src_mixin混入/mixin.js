// 第一步建立混合
export const hunhe1 = {
    methods:{
        showInfo(){
            alert('我是小马')
        }
    },
    mounted() {
        console.log("你好,我是混合的生命周期函数")
    },
}
export const hunhe2 = {
    data(){
        return {
            x:980509,
            y:980314
        }
    }
}