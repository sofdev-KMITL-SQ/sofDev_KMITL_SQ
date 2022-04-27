<template>
  <v-container fluid style="background-color: white">
    <v-container class="mt-12">
      <p class="display-2 black--text font-weight-light text-center mt-5 pa-4">
        REVIEW
      </p>

      <tr>
        <td class="pa-2">
          <v-card flat class="ml-3 pl-3" style="background-color: #b5b5b5">
            <v-col :cols="12">
              <v-col>
                <v-img
                  width="350px"
                  height="auto"
                  :src="require('../assets/img/home/slider3.jpg')"
                ></v-img
              ></v-col>

              <tr>
                <td class="pa-2 text-left black--text">ชื่อร้านค้า :</td>

                <p>
                  <v-list-item-content>
                    <v-list-item-title
                      class="pa-2 black--text rounded-pill"
                      style="background-color: #b5b5b5"
                      >ร้านนี้ดี
                    </v-list-item-title>
                  </v-list-item-content>
                </p>
              </tr>

              <tr>
                <td class="pa-2 text-left black--text">สินค้าที่สั่งซื้อ :</td>

                <p>
                  <v-list-item-content>
                    <v-list-item-title
                      class="pa-2 black--text rounded-pill"
                      style="background-color: #b5b5b5"
                      >น้ำมันพืชทาหน้า
                    </v-list-item-title>
                  </v-list-item-content>
                </p>
              </tr>
            </v-col>
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
                      v-model="form.title"
                      :rules="rules.title"
                      color="rgb(243, 95, 16)"
                      label="Heading"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.Review"
                      color="rgb(243, 95, 16)"
                      label="Review"
                    >
                      <template v-slot:label> </template>
                    </v-textarea>
                  </v-col>
                  <v-col>
                    <v-rating
                      v-model="form.rating"
                      class="display-2"
                      background-color="warning lighten-3"
                      color="warning"
                      dense
                      length="5"
                      size="50"
                    ></v-rating>
                  </v-col>

                  <v-card  class="ma-3">
                    <v-col  class="ma-3">
                      <v-spacer></v-spacer>

                      <v-btn depressed color="error" text @click="resetForm">
                        Reset
                      </v-btn>

                      <v-btn
                        :disabled="!formIsValid"
                        text
                        color="primary"
                        href="/users/Order"
                        type="submit"
                        @click="
                          submit;
                          overlay = !overlay;
                        "
                      >
                        confirm
                      </v-btn>
                    </v-col>
                  </v-card>

                  <v-col cols="12" sm="6"> </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </td>
      </tr>
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
    <div class="text-center">
      <v-overlay :value="overlay">
        <h1 class="green--text">
          รีวิวเสร็จสิ้น!!<v-icon color="green"
            >mdi-checkbox-marked-circle</v-icon
          >
        </h1>
        <h3>กำลังกลับไปยังหน้า order</h3>
        <v-progress-circular indeterminate size="64"> </v-progress-circular>
      </v-overlay>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      title: "",
      Review: "",
      rating: 1,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        title: [(val) => (val || "").length > 0 || "This field is required"],
      },
      snackbar: false,
      defaultForm,
      kmitlDes: false,
      overlay: false,
    };
  },

  computed: {
    formIsValid() {
      return this.form.title;
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

