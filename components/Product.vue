<template>
  <v-container class="pt-t mt-10">
    <div>
      <v-container class="pt-t mt-12">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-12">
            <v-carousel>
              <v-carousel-item :src="require('../assets/img/home/slider4.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../assets/img/home/slider2.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../assets/img/home/slider3.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../assets/img/home/slider1.jpg')">
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="col-md-7 col-sm-7 col-xs-12">
            <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
            <div class="pl-6">
              <p class="display-1 mb-0">ชื่อสินค้า</p>
              <v-card-actions class="pa-0">
                <p class="headline font-weight-light pt-3">
                  $65.00
                  <del style="" class="subtitle-1 font-weight-thin">$80.00</del>
                </p>
                <v-spacer></v-spacer>
                <v-rating
                  v-model="rating"
                     
                  class=""
                  background-color="warning lighten-3"
                  color="warning"
                  dense
                   readonly
                   value="2"
                ></v-rating>
                <span class="body-2 font-weight-thin"> 5 REVIEWS</span>
              </v-card-actions>
              <p class="subtitle-1 font-weight-thin">
                รายละเอียด Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Tincidunt arcu non sodales neque
                sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
                Morbi tristique senectus et netus et malesuada.
              </p>
              
              <p class="title">ITEMS</p>

              <v-text-field
                outlined
                style="width: 100px"
                :value="1"
                dense
              ></v-text-field>
              <v-btn class="primary white--text" outlined tile dense
                ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
              >
              <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-xs-12 col-md-12">
            <v-tabs>
              <v-tab>รายละเอียดเพิ่มเติม</v-tab>

              <v-tab>รีวิว</v-tab>
              <v-tab-item>
                <p class="pt-10 subtitle-1 font-weight-thin">
                  รายละเอียดสินค้าเพิ่มเติม Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt
                  arcu non sodales neque sodales ut etiam. Lectus arcu bibendum
                  at varius vel pharetra. Morbi tristique senectus et netus et
                  malesuada
                </p>
              </v-tab-item>
              <v-tab-item>
                <v-list three-line="true" avatar="true">
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      inactive="true"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="item.title"
                        ></v-list-item-title
                        ><v-rating
                          v-model="rating"
                                readonly
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
                </v-list>
              </v-tab-item>
            </v-tabs>
            <v-card-text class="pa-0 pt-4" tile outlined>
              <p class="subtitle-1 font-weight-light pt-3 text-center">
                คุณอาจจะสนใจ
              </p>
              <v-divider></v-divider>
              <div class="row text-center">
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/home/deal1.jpg')"
                      >
                        <v-card-title>Bags & Purses </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 60% + Extra 10%</div>
                        <div>Baggit, Zara, Fossil</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/home/deal2.jpg')"
                      >
                        <v-card-title>T-Shirt </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 50%</div>
                        <div>Zara, Selected, Celio</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/home/deal3.jpg')"
                      >
                        <v-card-title>Jeans </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 60% + Extra 10%</div>
                        <div>Jack & Jones, Levis</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/shop/5.jpg')"
                      >
                        <v-card-title>Shirts </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 60% + Extra 10%</div>
                        <div>Nike, Adidas, Puma</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/home/deal4.jpg')"
                      >
                        <v-card-title>Shoes </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 60% + Extra 10%</div>
                        <div>Nike, Adidas, Puma</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('../assets/img/shop/3.jpg')"
                      >
                        <v-card-title>Jackets </v-card-title>
                      </v-img>

                      <v-card-text class="text--primary text-center">
                        <div>Upto 60% + Extra 10%</div>
                        <div>Nike, Adidas, Puma</div>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn class="ma-2" outlined color="info">
                          Explore
                        </v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
              </div>
            </v-card-text>
          </div>
        </div>
      </v-container>
      <!-- หน้าส่งท้าย -->
      <v-card color="rgb(243, 95, 16)" class="">
        <v-container>
          <v-row no-gutters>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col class="col-12 col-sm-3 pr-4" align="right">
                  <v-icon class="display-2">mdi-truck</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">จัดส่ง & รับมือ</h3>
                  <p class="font-weight-thin">สะดวกปลอดภัยในสถาบัน</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col class="col-12 col-sm-3 pr-4" align="right">
                  <v-icon class="display-2">mdi-cash</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">เจอ จ่าย จบ</h3>
                  <p class="font-weight-thin">ไม่รู้ๆๆๆๆ</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
              <v-row>
                <v-col class="col-12 col-sm-3 pr-4" align="right">
                  <v-icon class="display-2">mdi-headset</v-icon>
                </v-col>
                <v-col class="col-12 col-sm-9 pr-4">
                  <h3 class="font-weight-light">02-666-6666</h3>
                  <p class="font-weight-thin">
                    ติดต่อแอดมิน&nbsp; เผื่อเหงาไว้คุยเล่น(ไม่ช่วย)
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rating: 2,
    breadcrums: [
      {
        text: "หน้าหลัก",
        disabled: false,
        href: "/home",
      },
      {
        text: "หน้าร้าน",
        disabled: false,
        href: "/users/ShopUser",
      },
      {
        text: "สินค้า",
        disabled: true,
        href: "",
      },
    ],
    item: 5,
    items: [
      {
        avatar: require('../assets/img/review/user.jpg'),
        title: "หัวเรื่อง",
        subtitle:
          "&mdash; อันนี้คือเอาไว้บอกว่าอะไรเป็นยังไง",
      },
      {
        avatar: require('../assets/img/review/user.jpg'),
        title:
          'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "",
      },
      {
        avatar: require('../assets/img/review/user.jpg'),
        title: "Lorem ipsum dolor",
        subtitle:
          "&mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        avatar: require('../assets/img/review/user.jpg'),
        title: "อยากลาออก",
        subtitle: "",
      },
      {
        avatar: require('../assets/img/review/user.jpg'),
        title: "โครตรแย่",
        subtitle:
          "&mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
};
</script>
