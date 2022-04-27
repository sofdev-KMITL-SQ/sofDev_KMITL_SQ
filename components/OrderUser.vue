<template>
  <v-container fluid class="" style="background-color: white">
    <v-container f>
      <p class="display-3 black--text font-weight-light text-center pa-4">
        ORDER
      </p>
      <v-row>
        <v-col>
          <v-card color="grey" class="ma-5">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">ร้านพรี่มีแต่ได้</th>

                    <th class="text-right">
                      สถานะการจัดส่ง : <a>กำลังจัดส่ง</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <!-- Item 1 -->
                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/1.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            >เก้าอี้ตัวนี้สีน้ำเงิน</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >จำนวน: <a>3</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <!-- Item 1 price-->

                    <td class="text-right">฿ 99</td>
                  </tr>
                  <v-container>
                    <v-btn
                      @click="overlayShop = !overlayShop"
                      color="rgb(243, 95, 16)"
                      >ติดต่อร้านค้า</v-btn
                    >
                    <v-btn
                      @click="overlay = !overlay"
                      color="white"
                      class="black--text"
                      >ตรวจสอบเลขพัสดุ</v-btn
                    >
                    <v-btn color="white" class="black--text"
                    href="/Product/Review"

                      >รีวิว/คอมเพลน</v-btn
                    >
                  </v-container>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>

          <v-card color="grey" class="ma-5">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">ร้านนี้ไม่รู้ๆๆๆ</th>

                    <th class="text-right">
                      สถานะการจัดส่ง : <a>ยังไม่ได้จัดส่ง</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <!-- Item 1 -->
                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/1.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>โซฟา</v-list-item-title>
                          <v-list-item-subtitle
                            >จำนวน: <a>3</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/3.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>โซฟา</v-list-item-title>
                          <v-list-item-subtitle
                            >จำนวน: <a>3</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <!-- Item 1 price-->

                    <td class="text-right">฿ 450</td>
                  </tr>
                  <v-container>
                    <v-btn
                      @click="overlayShop = !overlayShop"
                      color="rgb(243, 95, 16)"
                      >ติดต่อร้านค้า</v-btn
                    >
                    <v-btn
                      @click="overlay = !overlay"
                      color="white"
                      class="black--text"
                      >ตรวจสอบเลขพัสดุ</v-btn
                    >
                    <v-btn color="white" class="black--text"
                    href="/Product/Review"

                      >รีวิว/คอมเพลน</v-btn
                    >
                  </v-container>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>

          <v-card color="grey" class="ma-5">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">ร้านนี้เอ่อ</th>

                    <th class="text-right">
                      สถานะการจัดส่ง : <a>จัดส่งสำเร็จ</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <!-- Item 1 -->
                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/1.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>สูทเท่ๆ</v-list-item-title>
                          <v-list-item-subtitle
                            >จำนวน: <a>3</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/4.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>ขนม</v-list-item-title>
                          <v-list-item-subtitle
                            >จำนวน: <a>1</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <!-- Item 1 price-->

                    <td class="text-right">฿ 6000</td>
                  </tr>
                  <v-container>
                    <v-btn
                      @click="overlayShop = !overlayShop"
                      color="rgb(243, 95, 16)"
                      >ติดต่อร้านค้า</v-btn
                    >
                    <v-btn
                      @click="overlay = !overlay"
                      color="white"
                      class="black--text"
                      >ตรวจสอบเลขพัสดุ</v-btn
                    >
                    <v-btn color="white" class="black--text"
                    href="/Product/Review"

                      >รีวิว/คอมเพลน</v-btn
                    >
                  </v-container>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>

          <v-card color="grey" class="ma-5">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">ร้านโครตเท่</th>

                    <th class="text-right">
                      สถานะการจัดส่ง : <a>กำลังจัดส่ง</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <!-- Item 1 -->
                      <v-list-item key="1" @click="none">
                        <v-list-item-avatar>
                          <v-img
                            :src="require('../assets/img/shop/1.jpg')"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>เก้าอี้ฟ้า</v-list-item-title>
                          <v-list-item-subtitle
                            >จำนวน: <a>1</a></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <!-- Item 1 price-->

                    <td class="text-right">฿ 145</td>
                  </tr>
                  <v-container>
                    <v-btn
                      @click="overlayShop = !overlayShop"
                      color="rgb(243, 95, 16)"
                      >ติดต่อร้านค้า</v-btn
                    >
                    <v-btn
                      @click="overlay = !overlay"
                      color="white"
                      class="black--text"
                      >ตรวจสอบเลขพัสดุ</v-btn
                    >
                    <v-btn color="white" class="black--text"
                    href="/Product/Review"
                      >รีวิว/คอมเพลน</v-btn
                    >
                  </v-container>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
                  ติดต่อแอดมิน เผื่อเหงาไว้คุยเล่น(ไม่ช่วย)
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <div class="text-center">
        <v-overlay :z-index="zIndex" :value="overlay"
          ><v-card class="pa-6" color="white">
            <p class="black--text">TRACKING NUMBER : EF582568151TH</p>
            <v-btn
              class="white--text ma-2"
              color="teal"
              @click="overlay = false"
            >
              ปิด
            </v-btn>
          </v-card>
        </v-overlay>
      </div>

      <div class="text-center">
        <v-overlay :z-index="zIndex" :value="overlayShop"
          ><v-card class="pa-6" color="white">
            <p class="black--text">
              <v-img
                :src="require('@/assets/img/shop/qrcode.png')"
                height="300px"
                width="300px"
                class="ma-0 pa-1 whiter--text rounded display-1"
                contain
                style=""
              ></v-img>
            </p>
            <v-btn
              class="white--text ma-2"
              color="teal"
              @click="overlayShop = false"
            >
              ปิด
            </v-btn>
          </v-card>
        </v-overlay>
      </div>

      <div class="text-center">
        <v-overlay :z-index="zIndex" :value="overlayReview"
          ><v-card class="pa-6" color="white">
            <p class="black--text"></p>
            <v-btn
              class="white--text ma-2"
              color="teal"
              @click="overlayReview = false"
            >
              ปิด
            </v-btn>
          </v-card>
        </v-overlay>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    overlayShop: false,
    overlayReview: false,
  }),
};
</script>
<style>
.bg {
  background: white;
}
</style>


