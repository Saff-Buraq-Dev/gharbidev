<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Safouene Gharbi </q-toolbar-title>

        <div>
          <q-btn-toggle
            v-model="selectedLang"
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="secondary"
            color="white"
            :value="selectedLang"
            text-color="primary"
            :options="langs"
            @update:model-value="setLang"
          >
          </q-btn-toggle>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const langsList = [
  { label: "FR", value: "fr" },
  { label: "EN", value: "en" },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data() {
    return {
      essentialLinks: linksList,
      langs: langsList,
      selectedLang: this.getLang(),
    };
  },

  methods: {
    getLang() {
      // Check if the 'lang' property exists in local storage
      if (localStorage.getItem("lang")) {
        // Return the value of the 'lang' property if it exists
        return localStorage.getItem("lang");
      } else {
        // Return 'fr' if the 'lang' property does not exist
        return "fr";
      }
    },
    setLang(lang) {
      // Write the value of the 'lang' parameter to local storage with the key 'lang'
      localStorage.setItem("lang", lang);
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
