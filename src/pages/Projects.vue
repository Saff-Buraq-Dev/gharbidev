<template>

  <TurnPhone v-if="$q.screen.width < 600">
  </TurnPhone>
  <div v-else class="row q-pa-md justify-center">
    <div class="col-6 q-pa-md" v-for="project in projects" :key="project.name">
      <q-card class="my-card">
        <q-img :src="project.image" draggable fit="contain" height="200px"></q-img>

        <q-card-section>
          <a :href="project.url" target="_blank">
            <q-btn fab color="black" icon="fab fa-github" class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"></q-btn>
          </a>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ project.name }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            <q-icon size="md" :name="project.statusIcon"
              :color="project.status['en'] == 'Finished' ? 'secondary' : 'primary'"></q-icon>{{ project.status[lang] }}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn color="grey" flat dense :label="$t('seeMore')"
            :icon="project.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="project.expanded = !project.expanded"></q-btn>
        </q-card-actions>
        <q-slide-transition>
          <div v-show="project.expanded">
            <q-separator></q-separator>
            <q-card-section class="text-subitle2">
              {{ project.description[lang] }}
            </q-card-section>
            <q-card-section class="justify-left">
              <a v-for="tech in project.stack" :key="tech.name" :href="tech.website" target="_blank">
                <q-icon :name="'img:' + tech.url" size="48px"></q-icon>
              </a>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.bordered {
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
}
</style>

<script>
import { defineComponent } from "vue";
import TurnPhone from "src/components/TurnPhone.vue";
import { angular, java, spring, jpa } from "../assets/techs.js";

export default defineComponent({
  name: "Projects",
  components: {
    TurnPhone,
  },
  props: {
    lang: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      projects: [
        {
          name: "RoboMed",
          url: "https://github.com/Saff-Buraq-Dev/RoboMed",
          image: "projects/robomed.png",
          status: { fr: "En cours de construction", en: "In progress" },
          statusIcon: "pending",
          description: {
            fr: `RoboMed se veut être un robot médecin, capable de donner un diagnostic fiable, quand celà est possible, grâce à un questionnaire assez précis. 
                        Quand il n'est pas certain du diagnostic, il va donner des prescriptions pour des examens complémentaires (radiographie, analyse sanguine, etc.).
                        Le but principal de ce robot, est d'alléger la charge de travail aux urgences, en diminuant le nombre de personnes qui affluent seulement parce
                        qu'ils sont inquiets, et qu'ils n'ont pas la bonne information. Une simple visite sur RoboMed pourrait leur donner l'heure juste et leur faire
                        sauver le temps de se déplacer aux urgences et ainsi alléger le travail aux urgences.`,
            en: `RoboMed wants to be a robot doctor, capable of giving a reliable diagnosis, when possible, thanks to a fairly precise questionnaire.
                        When he is not sure of the diagnosis, he will give prescriptions for additional examinations (X-ray, blood test, etc.).
                        The main purpose of this robot is to lighten the workload in the emergency room, by reducing the number of people who come only because
                        that they are worried, and that they don't have the right information. A simple visit to RoboMed could give them the facts and make them
                        save time traveling to the emergency room and thus lighten the work in the emergency room.`
          },
          expanded: false,
          stack: [angular]
        },
        {
          name: "Server-App",
          url: "https://github.com/Saff-Buraq-Dev/Server-App",
          image: "projects/servers.png",
          status: { fr: "Terminé", en: "Finished" },
          statusIcon: "check_circle_outline",
          description: {
            fr: `Server-App vous permet d'enregistrer vos différents serveurs et voir leur état. Ce projet m'a permis de bien explorer SpringBoot
                        et mieux pratiquer Angular.`,
            en: `Server-App allows you to register your different servers and see their status. This project allowed me to fully explore SpringBoot
                        and better practice Angular.`,
          },
          stack: [angular, java, spring, jpa]
        },
      ]
    };
  },
  computed: {},
});
</script>
