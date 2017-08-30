<template>
    <div>
        <!--  名称输入框,绑定names -->  
        名称:<input v-model="names" placeholder="请输入名称"><br>  
        <!--  单价输入框,绑定price -->  
        单价:<input v-model="price" placeholder="请输入单价"><br>   
        <!--  添加按钮  -->  
        <input type="button" value="添加" @click="add">  
        <table>  
            <thead>  
                <tr>  
                    <th width="10%">序号</th>  
                    <th width="30%">名称</th>  
                    <th width="30%">数量</th>  
                    <th width="10%">单价</th>  
                    <th width="10%">总价</th>  
                    <th width="10%">操作</th>  
                </tr>  
            </thead>  
            <tbody>  
                <tr v-for="(item,index) in items" :key="index">  
                    <td>{{index}}</td>  
                    <td>{{item.names}}</td>  
                    <td>  
                        <input type="button" value="-"  @click="minus(item)">  
                            {{item.num}}   
                        <input type="button" value="+" @click="push(item)">  
                    </td>  
                    <td>{{item.price}}</td>  
                    <td>{{item.price * 1000 * item.num / 1000}}</td>  
                    <td><span @click="deletes(index)">删除</span></td>  
                </tr>  
                <tr>  
                    <td>总价</td>  
                    <!-- 总价格  -->  
                    <td colspan="5">{{priceAll}}</td>  
                </tr>  
            </tbody>  
        </table>  
    </div>
</template>
<script>
    export default{
        data(){  
            return{  
                items:[             // 模拟一些数据  
                    {  
                        names:"Vue.js权威指南",   // 名称  
                        num:1,                   // 数量  
                        price:99                 // 单价   
                    },  
                    {  
                        names:"MongoDB权威指南",  
                        num:1,  
                        price:67.2  
                    },  
                    {  
                        names:"图解HTTP",  
                        num:1,  
                        price:41.7  
                    },  
                    {  
                        names:"Node.js权威指南",  
                        num:1,  
                        price:75.7  
                    },  
                    {  
                        names:"Node.js项目实践",  
                        num:1,  
                        price:64.2  
                    }  
                ],  
                names:"",  
                price:"",  
                // showData:true,  
                priceAll:0     //初始总价格为零  
            }  
        },
        methods:{  
            //   增加事件  
            push:function(item){  
                item.num+=1;  
            },  
        
            //  减少事件  
            minus:function(item){  
                //  如果数量为零的话,不做操作  
                if(item.num<=1) return false;  
                item.num-=1;  
            },  
        
            //  删除事件  
            deletes:function(index){  
                this.items.splice(index,1)  
            },
            // 添加事件  
            add:function(){  
                // 判断名称是否为空  
                if(this.names.replace(/\s/g,"")==""){  
                    alert("名称不能为空");  
                    return false;  
                }  
            
                // 判断单价是否为空  
                    if(this.price.replace(/\s/g,"")==""){  
                    alert("单价不能为空");  
                    return false;  
                }  
            
                // 添加到数组  
                this.items.push({"names":this.names,"price":this.price,"num":1});  
            
                // 清空名称与单价  
                this.names="";  
                this.price="";  
            },
            calc:function(){
                var num=0;  
                //  遍历数组,  
                this.items.forEach(function(v){  
                    //  把每个元素的数量和单价的乘积相加;  (注：这里*1000是为了处理浮点数运算的精度丢失)  
                    num+=v.price * 1000 * v.num;  
                })  
                //   如果num的计算结果为零的话,直接为 0; 否则加上符号与单位;  
                num==0?  
                this.priceAll=0:  
                this.priceAll="$"+(num/1000).toFixed(2)+"元";    //将结束除以1000。还原数据;  
                this.items.length==0?this.showData=false:this.showData=true;  
            }
        },
        mounted:function(){
            this.calc();
        },
        watch:{  
            // 监听items的变化  
            "items":{  
                deep:true,   //深度监听  
                handler:function(){  
                    this.calc(); 
                }  
            }  
        }  
    }
</script>
<style>
    table{width:800px;border-collapse:collapse;}  
    th,td{border:1px solid #ccc;height:25px;line-height:25px;text-align:center}  
    input[type='button']{width:40px;height:20px;line-height:20px;}  
    span{cursor:pointer;font-size:12px}  
</style>

