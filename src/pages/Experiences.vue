<template>
  <TurnPhone v-if="$q.screen.width < 600">
  </TurnPhone>
  <div v-else>
    <div class="row q-pa-md q-gutter-sm">
      <div class="col-12">
        <q-input v-model="search" type="search" :hint="$t('search')" filled rounded debounce="200">
          <template v-slot:prepend>
            <q-icon name="search"></q-icon>
          </template>
          <template v-slot:append>
            <q-icon name="clear" @click="clearSearch()"></q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <div class="row q-pa-md q-gutter-sm">
      <div id="experiences" class="col-3">
        <q-list bordered separator>
          <q-item clickable v-ripple v-for="experience in filtered" :key="experience.company"
            @click="selectExperience(experience)" :class="
              experience.company == selectedExperience.company ? 'selected' : ''
            ">
            <q-item-section>
              <q-item-label class="experienceTitle">{{
                experience.title[lang]
              }}</q-item-label>
              <q-item-label caption>{{ experience.period[lang] }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-9">
        <q-card class="card-height" flat bordered>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h5 experienceCompany text-center">
                {{ selectedExperience.company }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-card>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
              narrow-indicator>
              <q-tab name="description" :label="$t('description')"></q-tab>
              <q-tab name="summary" :label="$t('summary')"></q-tab>
            </q-tabs>

            <q-separator></q-separator>

            <q-tab-panels v-model="tab" animated class="q-pa-md">
              <q-tab-panel name="description">
                <div class="text-h6">{{ $t("description") }}</div>
                <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 400px">
                  <q-list>
                    <q-item clickable v-ripple v-for="description in selectedExperience.descriptions[lang]"
                      :key="description">
                      <q-item-section avatar>
                        <q-icon color="secondary" name="check_circle_outline"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="experienceDescription text-justify">{{ description }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-scroll-area>
              </q-tab-panel>

              <q-tab-panel name="summary">
                <div class="text-h6">{{ $t("summary") }}</div>
                <q-list>
                  <q-item clickable v-ripple v-for="task in selectedExperience.tasks[lang]" :key="task">
                    <q-item-section avatar>
                      <q-icon color="secondary" name="check"></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="experienceTask">{{
                        task
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </q-card>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
}

.col-3,
.col-9 {
  flex: 1;
}

.list-height,
.card-height {
  height: 100%;
}

.selected {
  background-color: rgba(25, 118, 210, 1);
  color: white;
  font-size: large;

  & .text-caption {
    color: white;
    font-size: large;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";
import TurnPhone from "../components/TurnPhone.vue";
import { useQuasar } from 'quasar';
import Mark from "mark.js";

export default defineComponent({
  name: "Experiences",
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
      experiences: [
        {
          title: {
            fr: "Stagiaire d??veloppeur FullStack",
            en: "FullStack developer intern",
          },
          company: "Groupe Onscope",
          period: { fr: "Mai 2022 - D??c 2022", en: "Mai 2022 - Dec 2022" },
          tasks: {
            fr: [
              "D??velopper une application de recherche d'images bas??e sur le contenu",
              "Int??grer des fonctionnalit??s ?? une page web existante utilis??e par l'Office de la Propri??t?? Intellectuelle du Canada",
              "D??velopper des outils internes pour la recherche et d??veloppement",
            ],
            en: [
              "Develop a Content-Based Image Retrieval application",
              "Integrate functionality into an existing web page used by the Canadian Intellectual Property Office",
              "Develop internal tools for research and development",
            ],
          },
          descriptions: {
            fr: [
              `Apr??s des semaines ?? faire de la recherche, j'ai con??u, d??velopp?? et d??ploy?? une application de recherche d'images bas??e sur le contenu. 
                L'id??e est de trouver les images les plus similaires dans une base de plus de 500,000 images, ?? partir d'une image donn??e dans le cadre de recherche de la propri??t?? intellectuelle.
                Il s'agit d'une application ??crite en Python avec Flask. J'ai utilis?? un r??seau de neurones convolutifs ainsi que Facebook AI Similarity Search (FAISS) pour indexer les images.
                J'ai finalement d??ploy?? cette application sur une instance EC2 sur AWS dans un container docker servie par un serveur Nginx.`,
              `Afin de pouvoir visualiser les r??sultats des diff??rentes exp??riences r??alis??es durant la phase de recherche, j'ai aussi d??velopp?? une interface web 
                en Java (SpringBoot), Spring Data Jpa que j'ai d??ploy?? sur un serveur Tomcat.`,
              `J'ai con??u, d??velopp?? et d??ploy?? une application utilis??e en interne pour appliquer des changements aux donn??es. Le but ??tant d'identifier des images contenant
                du texte et qui peuvent avoir ??t?? mal cod??es, alors on aimerait pouvoir pr??senter l'image, la codification, et une proposition de correction.
                Il s'agit d'une interface web d??velopp??e en Java (SpringBoot) et Thymeleaf. J'ai utilis?? Spring Data Jpa pour la persistance dans une base de donn??e MySQL 
                ainsi que Spring Security pour l'authentification. J'ai d??ploy?? l'application sur un serveur Tomcat.`,
              `J'ai ajout?? des fonctionnalit??s ?? une page web existante utilis??e par l'Office de la propri??t?? intellectuelle. Les fonctionnalit??s ajout??es sont: 
                Ajouter une bo??te de recherche google avec la possibilit?? de lancer la recherche avec l?????tat d???internet ?? une date donn??e.
                Ajouter une boite de texte qui permet de filtrer les sources de d??finitions qui ne contiennent pas le mot recherch??.
                Pouvoir ajouter des annexes en format PDF. Il y a la possibilit?? de g??n??rer un rapport de distinctivit?? pour la marque, alors j'ai ajouter la possibilit?? de
                pouvoir rattacher les annexes ajout??s ?? la fin du rapport.`,
              `J'ai d??velopp?? une application utilis??e en interne pour la gestion des configurations pour un projet pr??cis. Cette application se voulait aussi ??tre un test 
                de nouvelles technologies qui pourraient potentiellement ??tre utilis??es dans le futur. Apr??s quelques recherches, on a choisi Vue.js avec Vite et Quasar comme UI Toolkit.`,
            ],
            en: [
              `After weeks of doing research, I designed, developed and deployed a Content-Based Image Search application.
                The idea is to find the most similar images in a database of more than 500,000 images, starting from an image given in the context of intellectual property research.
                It is an application written in Python with Flask. I used a Convolutional Neural Network along with Facebook AI Similarity Search (FAISS) to index the images.
                I finally deployed this application on an EC2 instance on AWS in a docker container served by an Nginx server.`,
              `In order to be able to visualize the results of the different experiments carried out during the research phase, I also developed a web interface
                in Java (SpringBoot), Spring Data Jpa which I deployed on a Tomcat server.`,
              `I designed, developed and deployed an application used internally to apply changes to data. The goal is to identify images containing
                of the text and which may have been badly coded, then we would like to be able to present the image, the coding, and a proposal for correction.
                It is a web interface developed in Java (SpringBoot) and Thymeleaf. I used Spring Data Jpa for persistence in a MySQL database
                as well as Spring Security for authentication. I deployed the application on a Tomcat server.`,
              `I added functionality to an existing webpage used by the Intellectual Property Office. The added features are:
                Add a google search box with the possibility of launching the search with the state of the internet on a given date.
                Add a text box that allows you to filter the sources of definitions that do not contain the searched word.
                Ability to add appendices in PDF format. There is the ability to generate a distinctiveness report for the brand, so I added the ability to
                be able to attach the appendices added at the end of the report.`,
              `I developed an application used internally for configuration management for a specific project. This application was also intended to be a test
                new technologies that could potentially be used in the future. After some research, we chose Vue.js with Vite and Quasar as the UI Toolkit.`,
            ],
          },
        },
        {
          title: { fr: "Auxiliare d'enseignement", en: "Teaching assistant" },
          company: "UQAM",
          period: { fr: "Sep 2021 - D??c 2022", en: "Sep 2021 - Dec 2022" },
          tasks: {
            fr: [
              "Enseigner les bases de la programmation en Python",
              "Aider les ??tudiants dans la r??solution des probl??mes",
              "Correction des travaux pratiques pour les cours 'outils et pratiques de d??veloppement logiciel' et 'Construction et maintenance de logiciels'",
            ],
            en: [
              "Teach the basics of programming in Python",
              "Help students with problem solving",
              "Correction of practical work for the courses 'tools and practices of software development' and 'Building and maintaining software'",
            ],
          },
          descriptions: {
            fr: [
              `J'ai donn?? les ateliers pour le cours INF1256 ?? l'UQAM: Informatique pour les sciences de la gestion. Il fallait pr??parer des exercices pour les ??tudiants 
            pour leur expliquer les bases de la programmation en Python.`,
              `J'ai aussi assur??e la correction des travaux pratiques pour les cours INF2050 outils et pratiques de d??veloppement logiciel et INF3135 Construction et maintenance de logiciels.
            Pour le premier cours, les travaux pratiques ??valuent Java, Maven, Junit & Mockito, Git. Pour le deuxi??me, c'est surtout le langage C, l'int??gration continue avec Gitlab-CI.`,
            ],
            en: [
              `I gave the workshops for the INF1256 course at UQAM: Computer science for management sciences. It was necessary to prepare exercises for the students
            to teach them the basics of programming in Python.`,
              `I also ensured the correction of practical work for the courses INF2050 software development tools and practices and INF3135 Software construction and maintenance.
            For the first course, the practical work assesses Java, Maven, Junit & Mockito, Git. For the second, it is mainly the C language, the continuous integration with Gitlab-CI.`,
            ],
          },
        },
        {
          title: { fr: "Ost??opathe", en: "Osteopath" },
          company: "SG Ost??o",
          period: { fr: "Jan 2017 - Mar 2020", en: "Jan 2017 - Mar 2020" },
          tasks: {
            fr: [
              "Effectuer un bilan ost??opathique",
              "??tablir un diagnostic et un plan de traitement",
              "Traiter les patients",
            ],
            en: [
              "Perform an osteopathic assessment",
              "Establish a diagnosis and a treatment plan",
              "Treat patients",
            ],
          },
          descriptions: {
            fr: [
              `J'??tais ost??opathe ?? mon compte. Je devais organiser mon emploi du temps et la gestion des clients en plus de faire mon travail d'ost??opathe.`,
              `J'??tais soucieux du bien ??tre de mes clients. Mon approche se basait principalement sur l'??coute et la participation du patient dans le processus de gu??rison.`,
              `J'effectuais les diff??rents bilans pour ??tablir un diagnostic ost??opathique et je fournissais le traitement ad??quat.`,
            ],
            en: [
              `I was a self-employed osteopath. I had to organize my schedule and manage clients in addition to doing my work as an osteopath.`,
              `I was concerned about the well-being of my clients. My approach was based mainly on listening to and involving the patient in the healing process.`,
              `I carried out the various assessments to establish an osteopathic diagnosis and I provided the appropriate treatment.`,
            ],
          },
        },
      ],
      search: "",
      selectedExperience: {},
      loading: true,
    };
  },
  mounted() {
    this.selectedExperience = this.experiences[0];
    this.loading = false;
  },
  methods: {
    clearSearch() {
      this.search = "";
      this.selectedExperience =
        this.experiences.length > 0
          ? this.experiences[0]
          : this.getEmptyExperience();
    },
    selectExperience(experience) {
      this.selectedExperience = experience;
    },
    getEmptyExperience() {
      return {
        title: { fr: "", en: "" },
        company: "",
        period: { fr: "", en: "" },
        tasks: {
          fr: ["", "", ""],
          en: ["", "", ""],
        },
        descriptions: { fr: [""], en: [""] },
      };
    },
    filterArray(arr, input) {
      input = input.toLowerCase();
      return arr.filter((obj) =>
        Object.values(obj).some((val) => {
          if (typeof val === "object") {
            return Object.values(val).some((subVal) => {
              if (Array.isArray(subVal)) {
                return subVal
                  .map((v) => v.toLowerCase())
                  .some((v) => v.includes(input));
              } else if (typeof subVal === "string") {
                return subVal.toLowerCase().includes(input);
              }
            });
          } else if (typeof val === "string") {
            return val.toLowerCase().includes(input);
          }
        })
      );
    },
    highlightText(input) {
      const element = document.querySelectorAll(
        ".experienceDescription, .experienceTask, .experienceCompany, .experienceTitle"
      );
      const instance = new Mark(element);
      instance.unmark({
        done: function () {
          instance.mark(input);
        },
      });
    },
  },
  computed: {
    filtered() {
      if (this.search === "") {
        this.selectedExperience =
          this.experiences.length > 0
            ? this.experiences[0]
            : this.getEmptyExperience();
        return this.experiences;
      }
      let arr = this.filterArray(this.experiences, this.search);
      this.selectedExperience =
        arr.length > 0 ? arr[0] : this.getEmptyExperience();
      if (arr.length > 0) this.highlightText(this.search);
      return arr;
    },
  },
  setup() {
    const $q = useQuasar();
    return {
      tab: ref("description"),
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
});
</script>
