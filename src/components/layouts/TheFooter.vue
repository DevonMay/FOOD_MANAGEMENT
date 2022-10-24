<template lang="">
   <footer class="footer px-4 " style="height:80px; background:transparent" >
        <div class="copyright text-center  ">
          © {{year}}
         
        </div>  
     
  </footer>
</template>
<script>
export default {
     data() {
    return {
      year: new Date().getFullYear()
    }
     }
}
</script>
