<template>
  <v-container fluid="sm" style="background-color: white">
    <p class="display-2 black--text font-weight-light text-center pa-5">
      ช่องทางการชำระเงิน
    </p>
    <v-card color="grey" class="ma-3">
      <v-col :cols="12" sm="12">
        <tr>
          <v-icon color="black" class="display-2">mdi-bank</v-icon>

          <td class="text-right pa-2">
            <v-btn
          
              @click="overlay = !overlay"
              align="center"
           class="ml-4"
             href="/home"
              style="background-color: #121235"
               elevation="2"
              v-model="selected"
              label="เก็บเงินปลายทาง"
              value="เก็บเงินปลายทาง"
            >เก็บเงินปลายทาง</v-btn>

            <v-btn
              @click="overlay = !overlay"
              href="/home"

              class="ml-4"
              color="green"
              align="center"
              elevation="2"
              large
            >
              K-BANK
            </v-btn>
            <v-btn
              @click="overlay = !overlay"
              href="/home"

              class="ml-4"
              color="blue"
              align="center"
              elevation="2"
              large
            >
              NEXT
            </v-btn>

            <v-btn
              @click="overlay = !overlay;"
              href="/home"
              class="brown--text ml-4"
              color="yellow"
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


    <div class="text-center">

      <v-overlay :value="overlay">  <h1 class="green--text" >ชำระเงินเสร็จสิ้น!!<v-icon  color="green">mdi-checkbox-marked-circle</v-icon></h1>
      <h3>กำลังกลับไปยังหน้าเริ่มต้น</h3>
        <v-progress-circular indeterminate size="64"> 
        
      
        
        </v-progress-circular>
      </v-overlay>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      snackbar: false,
      overlay: false,
      zIndex: 0,
    };
  },
  methods: {
    submit() {
      this.snackbar = true;
      this.overlay = !overlay;
      
    },
    
  },
      watch: {
      overlay (val) {
        val && setTimeout(() => {
         
          this.overlay = false
          
        }, 3000)
      },
    },

    
};

</script>
