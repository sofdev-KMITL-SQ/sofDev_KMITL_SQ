<template>
  <v-container fluid class="bg">
    <v-card color="#414141">
      <v-col>
        <v-text-field
          v-model="form.NameShop"
          :rules="rules.NameShop"
          color="rgb(243, 95, 16)"
          label="Edit Name-Shop "
          required
        >
          <template v-slot:label> </template>
        </v-text-field> </v-col
    ></v-card>

    <v-container>
      <p class="overline text-center black--text">
        เจ้าของร้าน <b>Lorem ipsum</b> | 094-444-4444
      </p>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <v-container fluid-sm>
            <v-card
              justify="center"
              align="center"
              style="background-color: white"
            >
              <v-img
                height="155px"
                width="155px"
                :src="require('../assets/img/review/user.jpg')"
              ></v-img>
            </v-card>
          </v-container>

          <v-card color="#414141">
            <v-col>
              <v-textarea
                v-model="form.DetailShop"
                color="rgb(243, 95, 16)"
                label="Edit Detail-Shop "
              >
                <template v-slot:label> </template>
              </v-textarea> </v-col
          ></v-card>

          <p class="black--text pt-5 subtitle-1 font-weight-light"></p>

          <v-card>
            <v-col class="text-right">
              <v-btn
                type="submit"
                @click="resetForm;"
                color="error"
                class="whit-rexr"
                href="/users/MyShop"
                >Cancel</v-btn
              >
              <v-btn
                type="submit"
                @click="
                  submit;
                  overlay = !overlay;
                "
                color="rgb(243, 95, 16)"
                :disabled="!formIsValid"
                class="whit-rexr"
                href="/users/MyShop"
                >Comfirm</v-btn
              >
            </v-col>
          </v-card>

          <div>
            <p class="body-1 font-weight-light pt-10 black--text">
              <b>เพิ่มสินค้า</b>
            </p>

            <v-card flat class="ml-3 pl-3" style="background-color: #b5b5b5">
              <v-snackbar v-model="snackbar" absolute top right color="success">
                <span>Registration successful!</span>
                <v-icon dark> mdi-checkbox-marked-circle </v-icon>
              </v-snackbar>
              <v-form
                ref="form"
                @submit.prevent="submit"
                style="background-color: #b5b5b5"
              >
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.NameProduct"
                        :rules="rules.NameProduct"
                        color="rgb(243, 95, 16)"
                        label="Name product"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.ProductType"
            
                        :rules="rules.ProductType"
                        color="rgb(243, 95, 16)"
                        label="Product type"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.ProductsPrice"
                        :rules="rules.ProductsPrice"
                  
                        color="rgb(243, 95, 16)"
                        label="Products price"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-file-input
                        :rules="rules.value"
                        accept="image/png, image/jpeg"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Picture Product"
                        required
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="form.value"
                        :rules="rules.value"
                    
                        color="rgb(243, 95, 16)"
                        label="DetailProduct"
                        required
                      >
                        <template v-slot:label> </template>
                      </v-textarea>
                    </v-col>
                    

                    <v-col cols="12" sm="6"> </v-col>
                  </v-row>
               
            <v-col class="text-right">
              <v-btn
                type="submit"
                @click="resetForm;"
                color="error"
                class="whit-rexr"
                href="/users/MyShop"
                >Cancel</v-btn
              >
              <v-btn
                type="submit"
                @click="
                  submit;
                  overlay = !overlay;
                "
                color="rgb(243, 95, 16)"
                :disabled="!formProductIsValid"
                class="whit-rexr"
                href="/users/MyShop"
                >Comfirm</v-btn
              >
            </v-col>
        
                </v-container>
              </v-form>
            </v-card>
          </div>

          <v-divider></v-divider>

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
    <div class="text-center">
      <v-overlay :value="overlay">
        <h1 class="green--text">
          เสร็จสิ้น!!<v-icon color="green">mdi-checkbox-marked-circle</v-icon>
        </h1>
        <h3>กำลังกลับไปยังหน้าร้านค้า</h3>
        <v-progress-circular indeterminate size="64"> </v-progress-circular>
      </v-overlay>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      DetailShop: "",
      NameShop: "",
      NameProduct:"",
      ProductsPrice:"",
      ImgProduct: "" ,
      DetailProducts:"",
      ProductType:"",
     
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        NameShop: [(val) => (val || "").length > 0 || "This field is required"],
        value  : [(value) => !value || value.size  < 4000000 || "This field is required"],
        ProductsPrice: [(val) => (val || "").length > 0 || "This field is required"],
        DetailProducts: [(val) => (val || "").length > 0 || "This field is required"],
        ProductType: [(val) => (val || "").length > 0 || "This field is required"],
        NameProduct: [(val) => (val || "").length > 0 || "This field is required"],


        
      },
      overlay: false,
      defaultForm,

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
    };
  },
  computed: {
    formIsValid() {
      return this.form.NameShop;
    },
    formProductIsValid() {
      return this.form.NameProduct&&
      this.form.ProductsPrice&&
        this.form.ProductType&&
         this.form.DetailProducts;

    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
      this.DetailShop = null;
      this.NameShop = null;
      this.form.NameProduct= null;
      this.form.ProductsPrice= null;
        this.form.ProductType= null;
         this.form.DetailProducts= null;
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },
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
