<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="toolbar">
          <q-avatar>
            <img src="../assets/gxIcon.jpg" />
          </q-avatar>
          <span style="margin-left: 10px; flex: 0">Deploy Tool</span>
          <div
            style="
              width: 100px;
              flex: 1;
              display: flex;
              justify-content: flex-end;
            "
          >
            <q-toggle
              v-model="darkMode"
              unchecked-icon="far fa-lightbulb"
              checked-icon="fas fa-moon"
              @click="$q.dark.toggle()"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/DeployGAMPage" label="Deploy GAM" />
        <q-route-tab to="/DeployGXFlowPage" label="Deploy GXFlow" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>v0.1</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();
    const darkMode = ref(false);

    return {
      darkMode,
    };
  },
});
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
}
</style>
