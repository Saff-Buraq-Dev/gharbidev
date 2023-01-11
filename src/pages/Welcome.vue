<template>
  <div class="row">
    <div class="col-3 q-pa-md q-gutter-md">
      <q-card class="full-height" bordered>
        <q-card-section horizontal>
          <q-img class="col" src="~assets/saff.png" fit="contain"></q-img>
          <q-card-actions vertical>
            <a target="_blank" href="https://github.com/Saff-Buraq-Dev"
              ><q-btn flat round icon="fab fa-github" size="xl"></q-btn
            ></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/safouene-gharbi-523155138/"
              ><q-btn
                flat
                round
                color="primary"
                icon="fab fa-linkedin"
                size="xl"
              ></q-btn
            ></a>
            <a
              target="_blank"
              href="https://www.credly.com/badges/8d1cf179-5bdb-495d-8225-e1bde963acdb/public_url"
            >
              <q-btn
                flat
                round
                color="warning"
                icon="fab fa-aws"
                size="xl"
              ></q-btn>
            </a>
            <a target="_blank" :href="pdfHref">
              <q-btn
                flat
                round
                color="negative"
                icon="fas fa-file-pdf"
                size="xl"
              ></q-btn
            ></a>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-9 q-pa-md q-gutter-md">
      <div class="full-height">
        <q-carousel
          animated
          v-model="slide"
          arrows
          infinite
          control-color="primary"
        >
          <q-carousel-slide :name="1" img-src="~assets/programming.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">{{ $t("intro.passion") }}</div>
              <div class="text-subtitle1">{{ $t("intro.passionText") }}</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~assets/collaboration.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">{{ $t("intro.collaboration") }}</div>
              <div class="text-subtitle1">
                {{ $t("intro.collaborationText") }}
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide :name="3" img-src="~assets/thinking.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">{{ $t("intro.problemSolving") }}</div>
              <div class="text-subtitle1">
                {{ $t("intro.problemSolvingText") }}
              </div>
            </div></q-carousel-slide
          >
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.row {
  height: calc(100% - 40px);
  overflow: hidden;
}
.full-height {
  height: calc(100% - 40px);
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome",
  props: {
    lang: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      slide: 1,
    };
  },
  computed: {
    pdfHref() {
      return `src/assets/resume-${this.lang}.pdf`;
    },
  },
});
</script>
