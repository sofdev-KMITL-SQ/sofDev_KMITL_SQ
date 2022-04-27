<template>
  <v-container fluid class="bg">
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4 black--text">
        ชื่อร้าน ร้านฉันเอง
      </p>
      <p class="overline text-center black--text">
        เจ้าของร้าน <b>Lorem ipsum</b> | 094-444-4444
      </p>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
        <v-container fluid-sm>
         <v-card justify="center" align="center" style="background-color: white">
            <v-img
              height="155px"
              width="155px"
              :src="require('../assets/img/review/user.jpg')"
            ></v-img>
           
          </v-card>
       
        
        </v-container>
         

          <p class="black--text pt-5 subtitle-1 font-weight-light">
            รายละเอียดร้าน Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

         <v-col class="text-right">
  <v-btn color="rgb(243, 95, 16)" class="whit-rexr" href="/users/Order">Order MY SHOP</v-btn>
  <v-btn color="rgb(243, 95, 16)" class="whit-rexr" href="/users/MyShop/Edit">Edit</v-btn>
</v-col>


          <p class="body-1 font-weight-light pt-10 black--text">
            <b>สินค้าที่มี</b> 

            
          </p>
          


       

          <!-- 
          <v-list three-line="true" avatar="true">
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" inactive="true">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title
                  ><v-rating
                    v-model="rating"
                    class=""
                    background-color="warning lighten-3"
                    color="warning"
                    dense
                  ></v-rating>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list> -->

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              :key="pro.id"
              v-for="pro in products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-card-title>{{ pro.type }} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="
                          d-flex
                          transition-fast-in-fast-out
                          white
                          darken-2
                          v-card--reveal
                          display-3
                          white--text
                        "
                        style="height: 100%"
                      >
                        <v-btn
                          v-if="hover"
                          color="success"
                          href="/product"
                          class=""
                          >VIEW</v-btn
                        >
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a href="/product" style="text-decoration: none">{{
                        pro.name
                      }}</a>
                    </div>
                    <div class="black--text">${{ pro.price }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
        </div>
      </div>
      
    </v-container>
  </v-container>
</template>
<script>
export default {

  
  data: () => ({
    

    

    item: 5,

    products: [
      {
        id: 1,
        name: "BLACK TEE",
        type: "Jackets",
        price: "18.00",
        src: require("../assets/img/shop/1.jpg"),
      },
      {
        id: 2,
        name: "WHITE TEE",
        type: "Polo",
        price: "40.00",
        src: require("../assets/img/shop/2.jpg"),
      },
      {
        id: 3,
        name: "Zara limited...",
        type: "Denim",
        price: "25.00",
        src: require("../assets/img/shop/3.jpg"),
      },
      {
        id: 4,
        name: "SKULL TEE",
        type: "Jackets",
        price: "30.00",
        src: require("../assets/img/shop/4.jpg"),
      },
      {
        id: 5,
        name: "MANGO WINTER",
        type: "Sweaters",
        price: "50.00",
        src: require("../assets/img/shop/5.jpg"),
      },
    ],
  }),
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}

.bg {
  background: white;
}
</style>
