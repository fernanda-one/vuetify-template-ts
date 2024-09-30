<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-6 text-center" :elevation="0">
        <v-icon size="64" color="error" class="mb-4"
          >mdi-alert-circle-outline</v-icon
        >

        <v-card-title class="text-h4 font-weight-bold">
          404 - Page Not Found
        </v-card-title>

        <v-card-text class="text-body-1 mb-6">
          Oops! It seems like the page you're looking for doesn't exist. Maybe
          you took a wrong turn. Let us help you find your way back.
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            variant="outlined"
            to="/"
            class="text-capitalize"
            :elevation="2"
            color="primary"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <v-icon left>mdi-home</v-icon>
            Back to Home
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const hover = ref(false);
</script>

<style scoped>
.v-btn {
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
