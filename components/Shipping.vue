<template>
  <v-container fluid="sm" style="background-color: white">
    <v-container>
      <p class="display-2 black--text font-weight-light text-center pa-4">
        การจัดส่ง
      </p>
      <v-card color="grey" class="ma-3">
        <v-col :cols="12" sm="12">
          <tr>
            <v-icon color="black" class="display-2">mdi-package</v-icon>
            <td class="pa-2">ทางเลือกการจัดส่ง</td>

            <td class="text-right pa-2">
              <v-checkbox
      v-model="selected"
      label="นัดรับมือ"
      value="นัดรับมือ"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="ส่งปลายทาง textFiled"
      value="ส่งปลายทาง"
    ></v-checkbox>

              <!-- <v-btn
                class="ma-1"
                color="blue-grey"
                href="/home"
                align="center"
                elevation="2"
                large
              >
                จัดส่งปลายทาง
              </v-btn> -->
            </td>
          </tr>
        </v-col>
      </v-card>
      <v-card color="grey" class="ma-3">
        <v-col :cols="12" sm="12">
          <tr>
            <v-icon color="black" class="display-2">mdi-cart-variant</v-icon>
            <td class="pa-2">สินค้าที่สั่งซื้อ</td>

            <p>
              <v-list-item-content>
                <v-list-item-title
                  class="pa-2 black--text rounded-pill"
                  style="background-color: #e0e0e0"
                  >ชื่อสินค้า : pointerสินค้า loop
                </v-list-item-title>
              </v-list-item-content>
            </p>
          </tr>
        </v-col>
      </v-card>

      <v-card color="grey" class="ma-3">
        <v-col :cols="12" sm="12">
          <tr>
            <v-icon color="black" class="display-2">mdi-alert-circle</v-icon>
            <td style="width: 100px" class="pl-3">หมายเหตุ</td>
            <v-list-item-content>
              <p
                class="ma-0 pa-3 black--text"
                style="background-color: #e0e0e0"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </v-list-item-content>
          </tr>
        </v-col>
      </v-card>
      <p class="display-2 black--text font-weight-light text-center pa-5">
        ช่องทางการชำระเงิน
      </p>

      <v-card color="grey" class="ma-3">
        <v-col :cols="12" sm="12">
          <tr>
            <v-icon color="black" class="display-2">mdi-bank</v-icon>

            <td class="text-right pa-2">
              
                <v-checkbox
                href=""
                align="center"
                class=" rounded pt-5 ma-5"
                 style="background-color: #121235"
                  v-model="selected"
                  label="เก็บเงินปลายทาง"
                  value="เก็บเงินปลายทาง"
                ></v-checkbox>
              
           
              <v-btn
                class="ml-4"
                color="green"
                href="/home"
                align="center"
                elevation="2"
                large
              >
                K-BANK
              </v-btn>
              <v-btn
                class="ml-4"
                color="blue"
                href="/home"
                align="center"
                elevation="2"
                large
              >
                NEXT
              </v-btn>

              <v-btn
                class="brown--text ml-4"
                color="yellow"
                href="/home"
                align="center"
                elevation="2"
                large
              >
                KMA
              </v-btn>
            </td>
          </tr>
        </v-col>
      </v-card>
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
    </v-card>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        selected: [],
      }
    },
  }
</script>