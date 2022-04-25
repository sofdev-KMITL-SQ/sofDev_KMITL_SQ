<template>
  <v-container>
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
              class="rounded pt-5 ma-5"
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
</template>