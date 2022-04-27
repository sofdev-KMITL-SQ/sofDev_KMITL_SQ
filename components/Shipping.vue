<template>
  <v-container fluid="xs" style="background-color: white">
    <v-container>
      <p class="display-2 black--text font-weight-light text-center pa-4">
        SHIPPING
      </p>

      <v-card color="grey" class="ma-3">
        <v-col :cols="12" sm="12">
          <tr>
            <v-icon color="black" class="display-2">mdi-cart-variant</v-icon>
            <td class="pa-2">สินค้าที่สั่งซื้อ</td>

            <p>
              <v-list-item-content>
                <v-list-item-title
                  class="pa-2 white--text rounded-pill"
                  style="background-color: #b5b5b5"
                  >ชื่อสินค้า : pointerสินค้า loop
                </v-list-item-title>
              </v-list-item-content>
            </p>
          </tr>
        </v-col>
      </v-card>
      <v-card
        color="grey"
        class="
          ma-3
          text-center
          grey
          d-flex
          flex-column
          align-center
          justify-center
        "
        height="100%"
      >
        <tr align="center">
          <v-icon color="black" class="display-2">mdi-map-marker</v-icon>
          <p>ภาพสถานที่ภายในสถาบัน</p>
        </tr>
        <v-col :cols="12" sm="12">
          <v-img
            :src="require('@/assets/img/shipping/KmitlMap.png')"
            class="ma-0 pa-1 whiter--text rounded display-1"
            contain
            style=""
          ></v-img>
        </v-col>
      </v-card>

      <div class="rounded-pill ma-3">
        <v-card color="grey" class="">
          <v-col :cols="12" sm="12">
            <tr>
              <v-icon color="black" class="display-2">mdi-package</v-icon>
              <td class="pa-2">ทางเลือกการจัดส่ง</td>

              <td class="text-right pa-2">
                <v-checkbox
                  @click="resetForm"
                  v-model="kmitlDes"
                  style="background-color: #121235"
                  :label="`นัดรับที่สถาบัน`"
                  value="นัดรับที่สถาบัน"
                  color="error "
                  class="ml-3 pt-4"
                ></v-checkbox>

                <v-autocomplete 
                  v-model="valueAddress"
                  style="background-color: #121235"
                  class="ml-3 pt-4"
                  :items="itemsAddress"
                  dense
                  filled
                  :disabled="!kmitlDes"
                  label="Address"
                ></v-autocomplete>
                <!-- <p>{{value}}</p> -->
                <v-autocomplete
                  v-model="valueTime"
                  style="background-color: #121235"
                  class="ml-3 pt-4"
                  :items="itemsTime"
                  dense
                  filled
                  :disabled="!kmitlDes"
                  label="Time"
                  
                ></v-autocomplete>

  
                <div id="container" style="margin: 15px auto 0; width: 250px">
                  <br />
                  <ejs-multiselect
                    id="multiselect"
                    :dataSource="sportsData"
                    placeholder="Select a game"
                    mode="CheckBox"
                    :fields="fields"
                    :maximumSelectionLength="maximumSelectionLength"
                  ></ejs-multiselect>
                </div>

                <v-card
                  flat
                  class="ml-3 pl-3"
                  style="background-color: #b5b5b5"
                >
                  <v-snackbar
                    v-model="snackbar"
                    absolute
                    top
                    right
                    color="success"
                  >
                    <span>Registration successful!</span>
                    <v-icon dark> mdi-checkbox-marked-circle </v-icon>
                  </v-snackbar>
                  <v-form
                    ref="form"
                    @submit.prevent="submit"
                    style="background-color: #b5b5b5"
                  >
                    <v-container fluid>
                      <p style="text-align: left" class="mr-1">
                        จัดส่งโดยบริษัทขนส่ง
                      </p>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.first"
                            :disabled="kmitlDes"
                            :rules="rules.name"
                            color="rgb(243, 95, 16)"
                            label="First name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.last"
                            :rules="rules.name"
                            :disabled="kmitlDes"
                            color="rgb(243, 95, 16)"
                            label="Last name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            v-model="form.address"
                            :rules="rules.address"
                            :disabled="kmitlDes"
                            color="rgb(243, 95, 16)"
                            label="Address"
                            required
                          >
                            <template v-slot:label> </template>
                          </v-textarea>
                        </v-col>
                         

                        <v-col cols="12" sm="6"> </v-col>
                      </v-row>
                      
                    </v-container>

                  </v-form>
                  
                </v-card>


                 <v-card
                 flat
                  class="ml-3 pl-3 mt-3"
                  style="background-color: rgb(255, 162, 22)"
                 
                 >
                          <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.contact"
                            :rules="rules.contact"
                        
                            color="white"
                            label="contact (ID LINE, Phone Number etc.)" 
                            required
                          ></v-text-field>
                        </v-col>
                          
                          </v-card>
                <!-- <v-checkbox
                v-model="selected"
                label="ส่งปลายทาง textFiled"
                value="ส่งปลายทาง"
              ></v-checkbox> -->

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
      </div>

      <v-card color="grey" class="ma-3">
        <v-card-actions color="grey" class="ma-3">
          <v-spacer></v-spacer>
          <v-btn depressed color="error" text @click="resetForm"> Reset </v-btn>

          <v-btn
            :disabled="!formIsValid & (valueAddress == null || valueTime == null || !ContraceIsValid)   "
            text
            color="primary"
            href="/Shipping/Paying"
            type="submit"
            @click="submit"
          >
            confirm
          </v-btn>
        </v-card-actions>
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
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      address: "",
      contact:"",
          });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
        address: [(val) => (val || "").length > 0 || "This field is required"],
        contact: [(val) => (val || "").length > 9 || "This field is required"],
      },
      contact: null,
      conditions: false,
      content: "ยอมรับมา...",
      snackbar: false,
      defaultForm,
      kmitlDes: false,
      itemsAddress: [
        "Zone-A-โรงพระเทพ",
        "Zone-A-อาคารวิจัยนาโนเทคโนโลยี",
        "Zone-A-โรงยิม 2",
        "Zone-B-ศูนย์เครื่องมือวิทยาศาสตร์",
        "Zone-B-ตึกใหม่",
        "Zone-B-คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี",
        "Zone-B-คณะบริหารธุรกิจ",
        "Zone-C-สำนักหอสุดกลาง",
        "Zone-C-โรงอาหารกลางน้ำ คณะเทคโนโลยีการเกษตร",
        "Zone-D-อาคารเรียนรวมคณะวิศวกรรมศาสตร์ 12 ชั้น",
        "Zone-D-อาคารเรียนรวม คณะสถาปัตยกรรมศาสตร์",
      ],
      valueAddress: null,
      itemsTime: [
        "9:30 - 10:00",
        "10:30 - 11:00",
        "11:30 - 12:00",
        "12:30 - 13:00",
        "13:30 - 14:00",
        "14:30 - 15:00",
        "15:30 - 16:00",
        "16:30 - 17:00",
        "17:30 - 18:00",
        "18:30 - 19:00",
        "19:30 - 20:00",
      ],
      valueTime: null,

    };
  },

  computed: {
    formIsValid() {
      return this.form.first && this.form.last && this.form.address && this.form.contact;
    },
    ContraceIsValid() {
      return this.form.contact;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
      this.valueAddress = null;
      this.valueTime = null;

    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>

