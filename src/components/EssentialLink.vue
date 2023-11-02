<template>
  <q-item v-if="isInternalLink" clickable :tag="tagType" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title[lang] }}</q-item-label>
      <q-item-label caption>{{ caption[lang] }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-else clickable :tag="tagType" :href="link" target="_blank" rel="noopener noreferrer">
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
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: Object,
      required: true,
    },

    caption: {
      type: Object,
      default: () => ({}),
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
  setup(props) {
    const isInternalLink = computed(() => !props.link.startsWith('http'));
    const isExternalLink = computed(() => props.link.startsWith('http'));
    const tagType = computed(() => isInternalLink.value ? 'router-link' : 'a');

    return { isInternalLink, isExternalLink, tagType };
  },
});
</script>
