var app = new Vue({
    el: '#app',
    data: {
list:[
    {
        id:1,
        name:'iPhone 7',
        price:1,
        count:1
    },
    {
        id:2,
        name:'iPad Pro',
        price:2,
        count:1
    },
    {
        id:3,
        name:'MacBook Pro',
        price:3,
        count:1
    }
],
checkAll:false,
    },
    computed: {
        totalPrice:function(){
            var total=0;
            for (let index = 0; index < this.list.length; index++) {
                var item=this.list[index];
                total+=item.price*item.count;
                
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        handleReduce:function(index){
           if(this.list[index].count===1){ $.toast('不能在减少了哦','text'); return;}
           this.list[index].count--;
       },
       handleAdd:function(index){
           this.list[index].count++;
       },
       handleRemove:function(index){
           this.list.splice(index,1);
       },
       allCheck:function(){
           this.checkAll=true;
       }

    }
});