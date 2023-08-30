<template>
  <div class="row">
    <div class="col q-pa-md q-gutter-md">
      <q-carousel animated v-model="slide" arrows infinite control-color="primary" :autoplay="7000" swipeable>
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
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="~assets/thinking.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{ $t("intro.problemSolving") }}</div>
            <div class="text-subtitle1">
              {{ $t("intro.problemSolvingText") }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="text-center q-pa-md bordered">
        <a v-for="link in usefulLinks" :key="link.icon" :href="link.url" target="_blank">
          <q-btn flat round :color="link.color" :icon="link.icon" size="40px"></q-btn></a>
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
  padding: 6px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}

.bordered {
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
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
      usefulLinks: [
        {
          url: "https://github.com/Saff-Buraq-Dev",
          color: "black",
          icon: "fab fa-github",
        },
        {
          url: "https://www.linkedin.com/in/safouene-gharbi-523155138/",
          color: "primary",
          icon: "fab fa-linkedin",
        },
        {
          url: "https://www.credly.com/badges/91634c7c-a16b-4a43-9949-7092af73b554/public_url",
          color: "warning",
          icon: "img:aws.png",
        },
        {
          url: `pdf/resume-${this.lang}.pdf`,
          color: "negative",
          icon: "img:cv.png",
        },
        {
          url: "mailto: gharbi.safwen@hotmail.com",
          color: "black",
          icon: "fas fa-envelope",
        },
      ],
      slide: 1,
    };
  },
  computed: {},
});
</script>
