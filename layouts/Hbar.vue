<template>

<div>
  <nav id="navbar_top" class="navbar sticky-top navbar-expand-sm navbar-dark p-0" style="background-color: rgb(243, 95, 16);">
    <div class="container-fluid">
         <nuxt-link class="navbar-brand" to="/home">
           <p class="display-1 fw-normal"><img src="@/images/KMITLsqLOGO.png" width="325" height="auto" class="nav-avatar"></p> 
          </nuxt-link>

         <ul  class="navbar-nav"> 

          <!-- <form action="" class="d-flex  me-4 w-100 h-50 mt-5">
            <input type="search" class="form-control  " name="" id="" placeholder="ค้นหาสินค้า" describedby="search-addon">
            <button id="search-addon" type="button" class="btn btn-outlinefa-pull-right border border-light-0  btn-outline-light me-1">
              <i class="fas fa-search"></i>
           </button>

            
          </form>
           -->
          <!-- <a type="button" class=" fa-stack fa-2x btn-lg has-badge   mt-5 btn btn-outline-secondary border-2 border border-white rounded-circle  " data-count="8">
           
            <i class="fa  fa-stack-2x  "></i>
            <i class="fa fa-shopping-cart fa-stack-1x "></i>
            
            
          </a> -->
          
          <!-- UserImg -->
           <!-- <li class=" nav-item p-4 mt-3 ">
              <nuxt-link to="/users"><img src="@/images/user.png" width="auto" height="55" class="nav-avatar  rounded-circle "></nuxt-link>
            </li>       -->
          </ul>

          
         
    </div> 
   </nav>
   <nuxt/>
</div>

</template>