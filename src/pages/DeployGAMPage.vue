<template>
  <q-page padding>
    GAM DEPLOY PAGE

    <q-btn color="primary" label="Export" @click="exportGAM" />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ TituloDialog }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ MsgDialog }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";

//DOCS : https://wiki.genexus.com/commwiki/servlet/wiki?30642,GAM%20deploy%20tool%20command%20line%20%28only%20windows%29

export default {
  name: "DeployGAMPage",
  setup() {
    const alert = ref(false);
    const deployToolu9Path =
      "E:\\Projetos_Vue_Quasar\\DeployTool\\DeployTool\\src\\GAMDeployTools\\gx17u9\\GamDeployTool.exe";
    const MsgDialog = ref("");
    const TituloDialog = ref("");

    /* FUNÇÕES */
    function exportGAM() {
      window.NodeAPIElectron.execFileShell(
        "E:\\Projetos_Vue_Quasar\\DeployTool\\DeployTool\\src\\GAMDeployTools\\gx17u9\\GamDeployTool.exe"
      );
    }

    return {
      exportGAM,
      alert,
      MsgDialog,
      TituloDialog,
    };
  },
};
</script>
