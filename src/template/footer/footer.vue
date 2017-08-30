<template>
  <div class="footer">
      <ul>
          <li v-for="footer in list" :key="footer.id">
              {{footer.name}}
          </li>
      </ul>
  </div>
</template>

<script>
    import Vue from 'vue';
    export default({
        data(){
            return {
                list:[
                    {
                        name:"footer01",
                        url:"../../img/footer01.png",
                        href:"http:\/\/www.baidu.com"
                    },
                    {
                        name:"footer02",
                        url:"../../img/footer02.png",
                        href:"http:\/\/www.dearus.com"
                    },
                    {
                        name:"footer03",
                        url:"../../img/footer03.png",
                        href:"http://www.sina.com"
                    }
                ]
            }
        }
    })
</script>

<style>
    .footer{position:fixed;bottom:0;left:0;width:100%;}
    .footer:after{content:"";clear:both;display:block}
    .footer li{width:33.333%;float:left;height:30px;line-height:30px;text-align:center;cursor:pointer}
</style>
