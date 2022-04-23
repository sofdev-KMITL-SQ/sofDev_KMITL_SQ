<template>
  <v-app id="inspire" class="bg">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="rgb(243, 95, 16)"
      dark
      height="90px"
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a href="/Home" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-truck</v-icon>&nbsp;<span style="font-size: 45px"
            >KMITL</span
          >&nbsp;SQUARE</a
        >
      </v-toolbar-title>
      <v-text-field
      clearable
        flat
        solo-inverted
        
        hide-details
        append-icon="mdi-magnify border"
        label="ค้นหาสินค้า"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      

      
      <v-spacer />
      <v-btn v-on="on" href="/Carts" icon class="mr-12">
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon class="mr-5"  href="">
        <!-- หน้าลูกค้า -->
        <v-img
        
          class="rounded-circle"
          style="border-radius: 50%"
          contain
          max-height="75"
          max-width="75"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-btn>
      <!-- <v-btn v-on="on" icon>
        <v-badge
          content="3"
          value="3"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn> -->
    </v-app-bar>
     <!-- <v-content >
     <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/" class="v-btn">
          <span>Home</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Shop</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="none"
              href="/shop"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
        <a href="/product" class="v-btn">
          <span>Product</span>
        </a>
        <v-btn href="/blog">
          <span>Blog</span>
        </v-btn>
      </v-bottom-navigation>
    </v-content> -->
    <router-view />


    <!-- หน้าล่างสุด -->
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text>
          <!-- <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn> -->
        </v-card-text>

        <v-card-text class="white--text pt-0">
          โอ๊ยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยย
          เย้ยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยช
          เย้ยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยช
          เย้ยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยช

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>28/4/2022</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "T-Shirts" },
        { title: "Jackets" },
        { title: "Shirts" },
        { title: "Jeans" },
        { title: "Shoes" },
      ],
      activeBtn: 1,
    };
  },
};
</script>
