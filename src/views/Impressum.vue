<template>
  <base-layout page-title="Impressum" defaultBackLink="/home">
    <div class="center">
      <img src="../images/axelgermek-logo.png" />
      <h4>Im Auftrag von</h4>
      <h4>Axel Germek <a href="axelgermek.de">www.axelgermek.de</a></h4>
      <h4>Umgesetzt von</h4>
      <h4>
        Julian Germek
        <a href="https://www.linkedin.com/in/julian-germek-593175165/"
          ><ion-icon :icon="logoLinkedin"></ion-icon
        ></a>
      </h4>
    </div>
  </base-layout>
</template>

<script>
import { IonIcon } from "@ionic/vue";
import { logoLinkedin } from "ionicons/icons";

export default {
  components: { IonIcon },
  setup() {
    return { logoLinkedin };
  },
};
</script>

<style scoped>
.center {
  text-align:center
}
</style>
