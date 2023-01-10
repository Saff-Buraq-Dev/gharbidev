<template>
  <q-item clickable tag="router-link" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title[lang] }}</q-item-label>
      <q-item-label caption>{{ caption[lang] }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: Object,
      required: true,
    },

    caption: {
      type: Object,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      required: true,
    },

    lang: {
      type: String,
      default: "fr",
    },
  },
});
</script>
