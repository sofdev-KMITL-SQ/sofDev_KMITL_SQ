<template>
  <v-container fluid>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12 mt-4">
          <v-card outlined>
            <v-card-title class="mt-12">Filters</v-card-title>
            <!-- <v-btn color="error" @click="getDataAllProducts">GET DATA</v-btn> -->
            <div>
            </div>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              >
              </v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Products Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                append-icon="mdi-star "
                label="5"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="4"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="3"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="2"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="1"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-divider></v-divider>

           
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>

          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Showing 1-12 of 200 products</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>

          <!-- showProduct -->

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
                    <v-card-title class="black--text">{{ pro.type }} </v-card-title>
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
                    <div class="black--text">{{ pro.price }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>

          <!-- Page Lan -->

          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
<script >
import axios from "axios";
export default {
  data: () => ({
    range: [0, 10000],
    select: "Popularity",
    options: [
      "Default",
      "Popularity",
      "Relevance",
      "Price: Low to High",
      "Price: High to Low",
    ],
    page: 1,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Clothing",
        disabled: false,
        href: "breadcrumbs_clothing",
      },
      {
        text: "T-Shirts",
        disabled: true,
        href: "breadcrumbs_shirts",
      },
    ],
    min: 0,
    max: 10000,
    items: [
      {
        id: 1,
        name: "ประเภท",
        children: [
          { id: 2, name: "ของกิน" },
          { id: 3, name: "ของใช้" },
          { id: 4, name: "ประเภท" },
           { id: 5, name: "ประเภท" },
            { id: 6, name: "ประเภท" },
             { id: 7, name: "ประเภท" },
        ],
      },
    ],
    



    db: [
      {
        data: {
          shopProduct: [
            {
              _id: "626716d959db4bfe26224611",
              shopID: "6266a98781f0c0d3aa1b2bae",
              productName: "3.2",
              productPrice: 1,
              productDescription: "---",
              productStock: 1,
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "626716db59db4bfe26224613",
              shopID: "6266a98781f0c0d3aa1b2bae",
              productName: "3.2",
              productPrice: 1,
              productDescription: "---",
              productStock: 1,
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "626716dc59db4bfe26224615",
              shopID: "6266a98781f0c0d3aa1b2bae",
              productName: "3.2",
              productPrice: 1,
              productDescription: "---",
              productStock: 1,
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "62684a6d9651345898e78955",
              shopID: "123",
              productPic: "1651001965895.jpg",
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "62684a8d9f1ce6a4b6c6dcbf",
              shopID: "123",
              productPic: "1651001997173.jpg",
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "62684ae1fe881e96bbd36ce7",
              shopID: "123",
              productPic: "1651002081457.jpg",
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
            {
              _id: "62684b0b464d9faa54e702fb",
              shopID: "123",
              productPic: "1651002123460.jpg",
              productRating: 0,
              productSumOfRating: 0,
              productNumOfReview: 0,
              __v: 0,
            },
          ],
        },
        status: 200,
        statusText: "OK",
        headers: {
          "content-length": "1309",
          "content-type": "application/json; charset=utf-8",
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          headers: { Accept: "application/json, text/plain, */*" },
          method: "get",
          url: "http://localhost:3300/showAllProduct",
        },
        request: {},
      },
    ],

    products: [
      {
        id: 1,
        name: "ชื่อ",
        type: "ประเภท",
        price: "18.00",
        src: require("../assets/img/shop/1.jpg"),
      },
      {
        id: 2,
        name: "ชื่อ",
        type: "ประเภท",
        price: "40.00",
        src: require("../assets/img/shop/2.jpg"),
      },
      {
        id: 3,
          name: "ชื่อ",
        type: "ประเภท",
        price: "25.00",
        src: require("../assets/img/shop/3.jpg"),
      },
      {
        id: 4,
       name: "ชื่อ",
        type: "ประเภท",
        price: "30.00",
        src: require("../assets/img/shop/4.jpg"),
      },
      {
        id: 5,
         name: "ชื่อ",
        type: "ประเภท",
        price: "50.00",
        src: require("../assets/img/shop/5.jpg"),
      },
      {
        id: 6,
         name: "ชื่อ",
        type: "ประเภท",
        price: "34.00",
        src: require("../assets/img/shop/6.jpg"),
      },
      {
        id: 7,
        name: "ชื่อ",
        type: "ประเภท",
        price: "38.00",
        src: require("../assets/img/shop/7.jpg"),
      },
      {
        id: 8,
     name: "ชื่อ",
        type: "ประเภท",
        price: "25.00",
        src: require("../assets/img/shop/8.jpg"),
      },
      {
        id: 9,
     name: "ชื่อ",
        type: "ประเภท",
        price: "50.00",
        src: require("../assets/img/shop/9.jpg"),
      },
      {
        id: 10,
        name: "ชื่อ",
        type: "ประเภท",
        price: "34.00",
        src: require("../assets/img/shop/10.jpg"),
      },
      {
        id: 11,
       name: "ชื่อ",
        type: "ประเภท",
        price: "38.00",
        src: require("../assets/img/shop/11.jpg"),
      },
      {
        id: 12,
   name: "ชื่อ",
        type: "ประเภท",
        price: "25.00",
        src: require("../assets/img/shop/12.jpg"),
      },
    ],
  }),

  methods: {
    async getDataAllProducts() {
      console.log("londing...");
      await axios.get("http://localhost:3300/showAllProduct").then((res) => {
        this.PD = res;
        const obj = JSON.parse(JSON.stringify(this.PD));
        console.log(obj.data.shopProduct[0].productName);
        console.log("finish");
      });
    },
  },
};
</script>






