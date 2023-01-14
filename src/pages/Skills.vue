<template>
  <div class="row q-pa-md" v-if="!loading">
    <div class="col-4 q-pa-md bordered">
      <h3 class="q-pb-md text-center">Skills</h3>
      <draggable
        class="list-group"
        :list="skills"
        group="skills"
        @change="updateScore"
        itemKey="name"
        ghost-class="ghost"
        placeholder="drop-placeholder"
      >
        <template #item="{ element, index }">
          <q-img
            :src="element.url"
            :alt="element.name + index"
            height="64px"
            width="64px"
          >
          </q-img>
        </template>
      </draggable>
    </div>
    <div class="col-4 q-pa-md bordered">
      <h3 class="q-pb-md text-center">Stack</h3>
      <draggable
        class="list-group q-ma-sm"
        :list="stack"
        group="skills"
        @change="updateScore"
        itemKey="name"
        ghost-class="ghost"
        placeholder="drop-placeholder"
      >
        <template #item="{ element, index }">
          <q-img
            :src="element.url"
            :alt="element.name + index"
            height="64px"
            width="64px"
          >
          </q-img>
        </template>
      </draggable>
    </div>
    <div class="col-4 q-pa-sm bordered">
      <div class="container">
        <h3 class="q-pb-md text-center">Score</h3>
        <q-btn
          round
          icon="notifications"
          class="notificationBtn"
          v-if="stars >= 4"
          @click="inception = true"
        >
          <q-badge floating color="red" rounded></q-badge>
        </q-btn>
      </div>

      <!-- DIALOG -->
      <q-dialog v-model="inception">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ $t("hireMe") }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-weight-medium">
            {{ $t("hireMeText", { stackText: stackText }) }}
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <a href="mailto: gharbi.safwen@hotmail.com">
              <q-btn flat :label="$t('talk')"></q-btn>
            </a>
            <q-btn flat :label="$t('close')" v-close-popup></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- SCORE BOARD -->
      <q-card flat bordered class="my-card bg-grey-1">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div id="score" class="col text-center">00</div>

            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item clickable>
                      <q-item-section @click="reset()">Reset</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-actions class="justify-center">
          <q-rating
            v-model="stars"
            max="5"
            size="3em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
          ></q-rating>
        </q-card-actions>
      </q-card>
    </div>
  </div>
  <div class="q-pa-md">
    <q-card class="instructions-card q-pa-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ $t("game.instructions") }}</div>
      </q-card-section>

      <q-separator></q-separator>

      <div class="text-justify text-weight-bold q-pa-md">
        {{ $t("game.instructionsText") }}
      </div>
    </q-card>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.ghost {
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px dashed #ccc;
}
.drop-placeholder {
  background-color: #ddd;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 12px;
}
.my-card {
  margin: auto;
  width: 100%;
  max-width: 400px;
}
.bordered {
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
}
.container {
  align-items: center; /* center the items vertically */
  justify-content: space-between; /* align the items to the left and right */
  position: relative; /* set position relative to allow the absolute positioning of the icon */
}
.notificationBtn {
  position: absolute; /* position the icon absolutely */
  right: 0; /* align it to the right */
  top: 50%; /* center it vertically */
  transform: translateY(-50%); /* adjust the position */
}
#score {
  font-size: xx-large;
}
</style>
<script>
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import {
  html,
  css,
  javascript,
  angular,
  vuejs,
  quasar,
  thymeleaf,
  java,
  spring,
  jpa,
  python,
  flask,
  git,
  github,
  gitlab,
  svn,
  mysql,
  auroradb,
  mongodb,
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
  name: "Skills",
  components: {
    draggable,
  },
  props: {
    lang: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      inception: false,
      loading: true,
      skills: [
        html,
        css,
        javascript,
        angular,
        vuejs,
        quasar,
        thymeleaf,
        java,
        spring,
        jpa,
        python,
        flask,
        git,
        github,
        gitlab,
        svn,
        mysql,
        auroradb,
        mongodb,
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
      stack: [],
    };
  },
  methods: {
    updateScore: function () {
      let total = 0;
      for (let tech of this.stack) {
        total += tech.score;
      }
      let mean = this.stack.length > 0 ? total / this.stack.length : 0;
      const obj = document.getElementById("score");
      const old = parseInt(obj.innerText);
      this.animateValue(obj, old, mean, 1000);
    },
    reset() {
      while (this.stack.length > 0) {
        this.skills.push(this.stack.shift());
      }
      this.updateScore();
    },
    animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
  computed: {
    stars() {
      let mean =
        this.stack.length > 0
          ? this.stack.reduce((acc, curr) => acc + curr.score, 0) /
            this.stack.length
          : 0;
      return mean / 20;
    },
    stackText() {
      let names = this.stack.map((item) => item.name);
      return names.join(", ");
    },
  },
  mounted() {
    setTimeout(() => (this.loading = false));
  },
});
</script>



