<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $t("fullstackDeveloper") }} | AWS Certified Solutions Architect Associate
        </q-toolbar-title>

        <div>
          <q-btn-toggle v-model="selectedLang" class="my-custom-toggle" no-caps rounded unelevated
            toggle-color="secondary" color="white" :value="selectedLang" text-color="primary" :options="langs"
            @update:model-value="toggleLang">
          </q-btn-toggle>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <a href="/">
          <q-img src="~assets/gharbidev.png" contain />
        </a>
        <EssentialLink v-for="link in essentialLinks" :key="link.title[selectedLang]" :lang="selectedLang"
          v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :lang="selectedLang" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "../components/EssentialLink.vue";

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
      essentialLinks: [
        {
          title: { fr: "Introduction", en: "Introduction" },
          caption: {
            fr: "Une courte introduction",
            en: "A quick introduction",
          },
          icon: "account_circle",
          link: "/intro",
        },
        {
          title: { fr: "Scolarité", en: "School" },
          caption: {
            fr: "Voir mon parcours",
            en: "See my cursus",
          },
          icon: "school",
          link: "/school",
        },
        {
          title: { fr: "Expériences", en: "Experiences" },
          caption: {
            fr: "Voir mon cheminement professionnel",
            en: "See my career path",
          },
          icon: "work",
          link: "/experiences",
        },
        {
          title: { fr: "Curriculum Vitae", en: "Curriculum Vitae" },
          caption: {
            fr: "Voir mon cv",
            en: "See my cv",
          },
          icon: "description",
          link: "/curriculum",
        },
        {
          title: { fr: "Technologies", en: "Technologies" },
          caption: {
            fr: "Voir ma pile technologique",
            en: "See my tech stack",
          },
          icon: "biotech",
          link: "/techs",
        },
        {
          title: { fr: "Jeu des compétences", en: "Skills game" },
          caption: {
            fr: "Testez mes compétences",
            en: "Test my skills",
          },
          icon: "sports_esports",
          link: "/skills",
        },
        {
          title: { fr: "Projets", en: "Projects" },
          caption: {
            fr: "Mes projets personnels",
            en: "My personal projects",
          },
          icon: "engineering",
          link: "/projects",
        },
        {
          title: { fr: "Certifications", en: "Certifications" },
          caption: {
            fr: "Voir mes certifications",
            en: "See my certifications",
          },
          icon: "workspace_premium",
          link: "/certifications",
        },
      ],
      langs: langsList,
      selectedLang: this.getLang(),
    };
  },

  mounted() {
    this.$i18n.locale = this.getLang();
  },

  methods: {
    getLang() {
      if (localStorage.getItem("lang")) {
        return localStorage.getItem("lang");
      } else {
        return "fr";
      }
    },
    toggleLang(lang) {
      this.$i18n.locale = lang;
      this.selectedLang = lang.substring(0, 2);
      this.setLang(lang);
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
