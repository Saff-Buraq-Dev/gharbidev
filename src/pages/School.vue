<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        {{ $t("schooling") }}
      </q-timeline-entry>

      <q-timeline-entry
        v-for="entry in entries"
        :key="entry.title"
        :title="entry.title[lang]"
        :subtitle="entry.subtitle[lang]"
        :side="entry.side"
        :icon="entry.icon"
      >
        <div class="q-pa-lg">
          <p class="text-subtitle2">{{ entry.school }}</p>
          <q-linear-progress stripe size="25px" :value="entry.progress">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="primary"
                :label="entry.progressLabel"
              ></q-badge>
            </div>
          </q-linear-progress>

          <br /><q-separator inset></q-separator><br />
          <div>
            <q-list bordered separator>
              <q-item
                clickable
                v-ripple
                v-for="skill in entry.skills[lang]"
                :key="skill"
              >
                <q-item-section>{{ skill }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "School",
  props: {
    lang: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      entries: [
        {
          title: {
            fr: "Baccalauréat en Informatique et Génie Logiciel",
            en: "Bachelor of Computer Science and Software Engineering",
          },
          subtitle: { fr: "Sep 2020 - En cours", en: "Sep 2020 - In progress" },
          icon: "fas fa-computer",
          side: "left",
          school: "Université du Québec à Montréal - UQAM",
          skills: {
            fr: [
              "Langages et cadriciels: Java / C / C++ / Python / Flask / Angular",
              "Programmation Orientée Objets",
              "Outils de versionning: Git",
              "Cycle de vie du logiciel",
            ],
            en: [
              "Languages and frameworks: Java / C / C++ / Python / Flask / Angular",
              "Object Orientedd Programming",
              "Versioning tools: Git",
              "Software life cycle",
            ],
          },
          progress: "0.6",
          progressLabel: "60%",
        },
        {
          title: {
            fr: "D.O Ostéopathie",
            en: "Osteopathy D.O",
          },
          subtitle: {
            fr: "Sep 2013 - Mai 2016",
            en: "Sep 2013 - Mai 2016",
          },
          icon: "fas fa-notes-medical",
          side: "right",
          school:
            "Institut de l'Enseignement de l'Ostéopathie du Québec - IEOQ",
          skills: {
            fr: ["Ostéopathie crânienne, structurelle, fasciale et viscérale."],
            en: ["Cranial, structural, fascial and visceral osteopathy."],
          },
          progress: "1",
          progressLabel: "100%",
        },
        {
          title: {
            fr: "Baccalauréat en Physiothérapie",
            en: "Bachelor of Physiotherapy",
          },
          subtitle: { fr: "Sep 2010 - Mai 2013", en: "Sep 2010 - Mai 2013" },
          icon: "fas fa-notes-medical",
          side: "left",
          school:
            "École Supérieure des Sciences et Techniques de la Santé de Tunis - ESSTST",
          skills: {
            fr: [
              "Anatomie du corps humain",
              "Établir un diagnostic et un plan de traitement",
            ],
            en: [
              "Human Body Anatomy",
              "Establish a diagnosis and a treatment plan",
            ],
          },
          progress: "1",
          progressLabel: "100%",
        },
      ],
    };
  },
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? "dense"
          : $q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
});
</script>
