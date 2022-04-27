<template>

      <v-row
        align="center"
      >
        <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="valueTime"
            :items="itemsTime"
            attach
            chips
            label="Time"
            multiple
            
          ></v-select>        
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="valueDay"
            :items="itemsDay"
            filled
            chips
            label="Time"
            multiple
          ></v-select>
        </v-col>
        
      </v-row>
      
      

</template>

<script>
  export default {
    data: () => ({
      itemsDay: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี','วันศุกร์','วันเสาร์'],
      valueDay: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี','วันศุกร์','วันเสาร์'],
      itemsTime: ['10:30-11:00', '12:30-13:00', '16:30-17:00', '19:30-20:00'],
      valueTime: ['10:30-11:00', '12:30-13:00', '16:30-17:00', '19:30-20:00'],
    }),
  }

</script>
© 2022 GitHub, Inc.