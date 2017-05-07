Vue.prototype.$ajax = axios;
new Vue({
    el:'#app',
    data:{
        number:3,
        addressList:[],
        index:NaN,
    },
    computed:{
        addressList_3(){
            return this.addressList.slice(0,this.number);
        }
    },
    methods:{
        more(){
            this.number = this.number===3?this.addressList.lenght:3;   
        },
        choice(i){
            this.index=i;
        }
    },
    mounted(){
        this.$ajax({
            method:'get',
            url:'../data/address.json',
        }).then(function(res){
            this.addressList=res.data;
        }.bind(this))
    },
});