<script lang="ts" setup></script>

<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex align-center justify-center fill-height">
        <VRow justify="center" align="center">
          <VCol cols="12" sm="8" md="4">
            <VCard class="h-100" elevation="0">
              <VCardTitle class="text-center">
                <VIcon icon="mdi-vuetify" color="primary" class="mr-2" />
              </VCardTitle>

              <VCardSubtitle class="text-center text-h5">
                Log into your account
              </VCardSubtitle>

              <VCardText class="mt-6 py-0 px-0 py-md-2 px-md-2">
                <VForm validate-on="lazy">
                  <VTextField
                    class="mb-0"
                    variant="outlined"
                    density="compact"
                    type="email"
                    label="Email"
                  />

                  <VTextField
                    class="mt-0"
                    variant="outlined"
                    density="compact"
                    type="password"
                    label="Password"
                  />

                  <VRow justify="space-between">
                    <VCheckbox label="Remember me" class="mt-1" />
                    <RouterLink
                      class="text-decoration-none text-primary cursor-pointer mt-5 mr-2"
                      to="/register"
                    >
                      Forgot password?
                    </RouterLink>
                  </VRow>

                  <VBtn block color="primary" class="rounded-lg text-capitalize"
                    >Log In</VBtn
                  >
                </VForm>
              </VCardText>
              <VCardActions class="justify-center">
                <span>New in this site?</span>
                <RouterLink
                  class="text-decoration-none text-primary cursor-pointer"
                  to="/register"
                >
                  Create an account
                </RouterLink>
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>
