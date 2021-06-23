<template>
  <base-layout page-title="Impressum" defaultBackLink="/home">
    <ion-grid>
      <ion-row>
        <div class="center">
          <p>Im Auftrag von</p>
          <img height="130" src="../images/axelgermek-logo.png" />
          <h4>
            <a style="text-decoration:none" href="axelgermek.de"
              >www.axelgermek.de</a
            >
          </h4>
          <br>
          <p>Design & Umsetzung</p>
          <h4>
            Julian Germek
            <a href="https://www.linkedin.com/in/julian-germek-593175165/"
              ><ion-icon :icon="logoLinkedin"></ion-icon
            ></a>
          </h4>
        </div>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonIcon } from "@ionic/vue";
import { logoLinkedin } from "ionicons/icons";

export default {
  components: { IonGrid, IonRow, IonIcon },
  setup() {
    return { logoLinkedin };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

ion-grid {
  height: 100%;
}
ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
