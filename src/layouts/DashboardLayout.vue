<script setup>
import { ref } from "vue";

const drawer = ref(true);

const items = ref([
  {
    title: "Dashboard",
    prependIcon: "mdi-view-dashboard-outline",
    link: true,
  },
  {
    title: "Team",
    prependIcon: "mdi-account-group",
    link: true,
  },
  {
    title: "Projects",
    prependIcon: "mdi-briefcase-outline",
    link: true,
  },
  {
    title: "Calendar",
    prependIcon: "mdi-calendar",
    link: true,
  },
  {
    title: "Reports",
    prependIcon: "mdi-file-chart-outline",
    link: true,
  },
]);
</script>

<template>
  <VLayout full-height="true">
    <VNavigationDrawer v-model="drawer">
      <VList density="compact" item-props :items="items" nav />

      <template #append>
        <VListItem
          class="ma-2"
          link
          nav
          prepend-icon="mdi-cog-outline"
          title="Settings"
        />
      </template>
    </VNavigationDrawer>

    <VAppBar border="b" class="ps-4" flat>
      <VAppBarNavIcon
        v-if="$vuetify.display.smAndDown"
        @click="drawer = !drawer"
      />

      <VAppBarTitle>Application</VAppBarTitle>

      <template #append>
        <VBtn class="text-none me-2" height="48" icon slim>
          <VAvatar
            color="surface-light"
            image="https://cdn.vuetifyjs.com/images/john.png"
            size="32"
          />

          <VMenu activator="parent">
            <VList density="compact" nav>
              <VListItem append-icon="mdi-cog-outline" link title="Settings" />

              <VListItem append-icon="mdi-logout" link title="Logout" />
            </VList>
          </VMenu>
        </VBtn>
      </template>
    </VAppBar>

    <VMain>
      <div class="pa-4">
        <VSheet
          border="dashed md"
          color="surface-light"
          height="500"
          rounded="lg"
          width="100%"
        />
      </div>
    </VMain>
  </VLayout>
</template>
