<template>
  <v-container fluid="sm" style="background-color: white">
    <v-container>
      <p class="display-2 black--text font-weight-light text-center pa-4">
        การจัดส่ง
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
                  style="background-color: grey"
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
                class="ma-0 pa-1 whiter--text rounded"
                style="background-color: grey"
              >
                <v-list-item-content
                  >หมายเหตุสินค้า "Sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </v-list-item-content>
              </p>
            </v-list-item-content>
          </tr>
        </v-col>
      </v-card>

      <div class="rounded-pill ma-3" >
        <v-card color="grey" class="" >
          <v-col :cols="12" sm="12" >
            <tr >
              <v-icon color="black" class="display-2">mdi-package</v-icon>
              <td class="pa-2">ทางเลือกการจัดส่ง</td>

              <td class="text-right pa-2">
                <v-card flat class="ml-3 pl-3" style="background-color: grey">
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
                  <v-form ref="form" @submit.prevent="submit"   style="background-color: grey">
                    <v-container fluid >
                      <v-row >
                        <v-col cols="12" sm="6">
                          <v-text-field 
                            v-model="form.first"
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
                            color="rgb(243, 95, 16)"
                            label="Last name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea v-model="form.address" :rules="rules.address" color="rgb(243, 95, 16)" label="ที่อยู่"
                            required>
                            <template v-slot:label>
                           
                            </template>
                          </v-textarea>
                        </v-col>
                       
                        <v-col cols="12" sm="6">
                         
                        </v-col>
                        
                      </v-row>
                    </v-container>
                   
                  </v-form>
              
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
                      <v-btn text @click="resetForm"> Reset </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
                        type="submit"
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
  
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
        address: [(val) => (val || "").length > 0 || "This field is required"],

      },
      conditions: false,
      content:
        "ยอมรับมา...",
      snackbar: false,
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.address 
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>