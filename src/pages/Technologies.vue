<template>
  <TurnPhone v-if="$q.screen.width < 600">
  </TurnPhone>
  <div v-else>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="frontend" icon="fa fa-desktop" label="Frontend"></q-tab>
          <q-tab name="backend" icon="fa fa-server" label="Backend"></q-tab>
          <q-tab name="vcs" icon="fab fa-git-alt" label="VCS"></q-tab>
          <q-tab name="database" icon="fas fa-database" label="Database"></q-tab>
          <q-tab name="other" icon="fas fa-screwdriver-wrench" label="other tools"></q-tab>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel v-for="stack in stacks" :key="stack.name" :name="stack.name">
            <div class="text-h4 q-mb-md">{{ stack.name }}</div>
            <div class="row q-pa-md justify-start stack">
              <span v-for="tech in stack.techs" :key="tech.name" :title="tech.name" class="col-2 q-pa-md brand">
                <a target="_blank" :href="tech.website">
                  <q-img :src="tech.url" :alt="tech.name" height="64px" width="64px">
                  </q-img>
                </a>
              </span>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<style scoped>
.stack {
  background-color: #eee;
}

.brand {
  filter: grayscale(100%);
  transition: all 0.2s;
  object-fit: contain;
}

.brand:hover {
  filter: none;
  transform: scale(1.3);
}
</style>

<script>
import { defineComponent, ref } from "vue";
import TurnPhone from "../components/TurnPhone.vue"
import {
  html,
  css,
  javascript,
  angular,
  vuejs,
  quasar,
  thymeleaf,
} from "../assets/techs.js";
import { java, spring, jpa, python, flask } from "../assets/techs.js";
import { git, github, gitlab, svn } from "../assets/techs.js";
import { mysql, auroradb, mongodb } from "../assets/techs.js";
import {
  vscode,
  intellij,
  eclipse,
  maven,
  tomcat,
  nginx,
  postman,
  aws,
  docker,
  kafka,
  actions,
} from "../assets/techs.js";

export default defineComponent({
  name: "Technologies",
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
      stacks: [
        {
          name: "frontend",
          techs: [html, css, javascript, angular, vuejs, quasar, thymeleaf],
        },
        {
          name: "backend",
          techs: [java, spring, jpa, python, flask],
        },
        {
          name: "vcs",
          techs: [git, github, gitlab, svn],
        },
        {
          name: "database",
          techs: [mysql, auroradb, mongodb],
        },
        {
          name: "other",
          techs: [
            vscode,
            intellij,
            eclipse,
            maven,
            tomcat,
            nginx,
            postman,
            aws,
            docker,
            kafka,
            actions,
          ],
        },
      ],
    };
  },
  setup() {
    return {
      tab: ref("frontend"),
      splitterModel: ref(20),
    };
  },
});
</script>
