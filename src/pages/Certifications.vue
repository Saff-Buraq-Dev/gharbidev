<template>
  <q-page class="flex flex-center">
    <q-pdfviewer
      v-model="show"
      type="html5"
      :src="updatedSrc"
      content-class="absolute"
    ></q-pdfviewer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Certifications",
  data() {
    return {
      show: true,
      src: "pdf/ccp.pdf",
    };
  },
  methods: {
    getLocation(source) {
      let url = location.href;
      if (location.href[location.href.length - 1] !== "/") {
        url += "/";
      }
      url += "../" + source;
      return url;
    },
  },
  computed: {
    updatedSrc() {
      if (process.env.MODE === "electron") {
        return "/" + this.src;
      }
      return this.src;
    },
  },
});
</script>
