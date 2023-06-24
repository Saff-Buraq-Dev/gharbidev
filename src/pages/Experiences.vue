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
            @click="selectExperience(experience)" :class="experience.company == selectedExperience.company ? 'selected' : ''
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
            fr: "Stagiaire administration plateformes infonuagiques AWS",
            en: "AWS cloud platform administration intern",
          },
          company: "Hydro - Québec",
          period: { fr: "Mai 2023 - Aou 2023", en: "Mai 2023 - Aug 2023" },
          tasks: {
            fr: [
              "Automatiser des mécanismes de cyber sécurité",
              "Développer des systèmes de gestion dans AWS",
              "Créer des infrastructures infonuagiques en utilisant l'approche Infrastructure as Code",
            ],
            en: [
              "Automate cyber security mechanisms",
              "Develop management systems in AWS",
              "Build cloud infrastructures using the Infrastructure as Code approach",
            ],
          },
          descriptions: {
            fr: [
              `J'ai développé une fonction Lambda qui fait le tour de tous les comptes AWS de l'organization et liste
              toutes les ressources avec une adresse ip publique. La fonction est exécutée à toutes les heures grâce à une règle EventBridge et dépose les résultats sous forme de JSON dans un bucket S3.`,
              `J'ai développé un système automatisé de validation des contacts techniques des différents comptes. Une fonction Lambda récupère les informations et les place dans une table DynamoDB. Ensuite une autre Lambda envoie des emails en utilisant l'api de Sengrid. Dans l'email il y a deux boutons qui pointent vers un Application Load Balancer qui transmet le traffic à un API Gateway. Un Web Application Firewall est attaché à l'API Gateway. La réponse du contact déclenche une autre fonction Lambda qui va enregistrer la réponse dans la base de données.`,
              `J'ai participé à l'élaboration de la documentation pour nos clients pour consommer des ressources dans AWS et notamment le Backup des instances EC2 et des buckets S3.`,
              `J'ai déployé toutes les ressources citées avec CDK (Cloud Development Kit) en Typescript.`
            ],
            en: [
              `I developed a Lambda function that goes around all AWS accounts in the organization and lists
              all resources with a public ip address. The function is executed every hour thanks to an EventBridge rule and deposits the results in the form of JSON in an S3 bucket.`,
              `I developed an automated system for validating the technical contacts of the different accounts. A Lambda function retrieves information and places it in a DynamoDB table. Then another Lambda sends emails using the Sengrid API. In the email there are two buttons that point to an Application Load Balancer that forwards traffic to an API Gateway. A Web Application Firewall is attached to the API Gateway. The contact's response triggers another Lambda function that will save the response to the database.`,
              `I participated in the development of documentation for our customers to consume resources in AWS and in particular the Backup of EC2 instances and S3 buckets.`,
              `I deployed all the cited resources with CDK (Cloud Development Kit) in Typescript.`
            ],
          },
        },
        {
          title: {
            fr: "Stagiaire développeur FullStack",
            en: "FullStack developer intern",
          },
          company: "Groupe Onscope",
          period: { fr: "Mai 2022 - Déc 2022", en: "Mai 2022 - Dec 2022" },
          tasks: {
            fr: [
              "Développer une application de recherche d'images basée sur le contenu",
              "Intégrer des fonctionnalités à une page web existante utilisée par l'Office de la Propriété Intellectuelle du Canada",
              "Développer des outils internes pour la recherche et développement",
            ],
            en: [
              "Develop a Content-Based Image Retrieval application",
              "Integrate functionality into an existing web page used by the Canadian Intellectual Property Office",
              "Develop internal tools for research and development",
            ],
          },
          descriptions: {
            fr: [
              `Après des semaines à faire de la recherche, j'ai conçu, développé et déployé une application de recherche d'images basée sur le contenu. 
                L'idée est de trouver les images les plus similaires dans une base de plus de 500,000 images, à partir d'une image donnée dans le cadre de recherche de la propriété intellectuelle.
                Il s'agit d'une application écrite en Python avec Flask. J'ai utilisé un réseau de neurones convolutifs ainsi que Facebook AI Similarity Search (FAISS) pour indexer les images.
                J'ai finalement déployé cette application sur une instance EC2 sur AWS dans un container docker servie par un serveur Nginx.`,
              `Afin de pouvoir visualiser les résultats des différentes expériences réalisées durant la phase de recherche, j'ai aussi développé une interface web 
                en Java (SpringBoot), Spring Data Jpa que j'ai déployé sur un serveur Tomcat.`,
              `J'ai conçu, développé et déployé une application utilisée en interne pour appliquer des changements aux données. Le but étant d'identifier des images contenant
                du texte et qui peuvent avoir été mal codées, alors on aimerait pouvoir présenter l'image, la codification, et une proposition de correction.
                Il s'agit d'une interface web développée en Java (SpringBoot) et Thymeleaf. J'ai utilisé Spring Data Jpa pour la persistance dans une base de donnée MySQL 
                ainsi que Spring Security pour l'authentification. J'ai déployé l'application sur un serveur Tomcat.`,
              `J'ai ajouté des fonctionnalités à une page web existante utilisée par l'Office de la propriété intellectuelle. Les fonctionnalités ajoutées sont: 
                Ajouter une boîte de recherche google avec la possibilité de lancer la recherche avec l’état d’internet à une date donnée.
                Ajouter une boite de texte qui permet de filtrer les sources de définitions qui ne contiennent pas le mot recherché.
                Pouvoir ajouter des annexes en format PDF. Il y a la possibilité de générer un rapport de distinctivité pour la marque, alors j'ai ajouter la possibilité de
                pouvoir rattacher les annexes ajoutés à la fin du rapport.`,
              `J'ai développé une application utilisée en interne pour la gestion des configurations pour un projet précis. Cette application se voulait aussi être un test 
                de nouvelles technologies qui pourraient potentiellement être utilisées dans le futur. Après quelques recherches, on a choisi Vue.js avec Vite et Quasar comme UI Toolkit.`,
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
          period: { fr: "Sep 2021 - Déc 2022", en: "Sep 2021 - Dec 2022" },
          tasks: {
            fr: [
              "Enseigner les bases de la programmation en Python",
              "Aider les étudiants dans la résolution des problèmes",
              "Correction des travaux pratiques pour les cours 'outils et pratiques de développement logiciel' et 'Construction et maintenance de logiciels'",
            ],
            en: [
              "Teach the basics of programming in Python",
              "Help students with problem solving",
              "Correction of practical work for the courses 'tools and practices of software development' and 'Building and maintaining software'",
            ],
          },
          descriptions: {
            fr: [
              `J'ai donné les ateliers pour le cours INF1256 à l'UQAM: Informatique pour les sciences de la gestion. Il fallait préparer des exercices pour les étudiants 
            pour leur expliquer les bases de la programmation en Python.`,
              `J'ai aussi assurée la correction des travaux pratiques pour les cours INF2050 outils et pratiques de développement logiciel et INF3135 Construction et maintenance de logiciels.
            Pour le premier cours, les travaux pratiques évaluent Java, Maven, Junit & Mockito, Git. Pour le deuxième, c'est surtout le langage C, l'intégration continue avec Gitlab-CI.`,
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
          title: { fr: "Ostéopathe", en: "Osteopath" },
          company: "SG Ostéo",
          period: { fr: "Jan 2017 - Mar 2020", en: "Jan 2017 - Mar 2020" },
          tasks: {
            fr: [
              "Effectuer un bilan ostéopathique",
              "Établir un diagnostic et un plan de traitement",
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
              `J'étais ostéopathe à mon compte. Je devais organiser mon emploi du temps et la gestion des clients en plus de faire mon travail d'ostéopathe.`,
              `J'étais soucieux du bien être de mes clients. Mon approche se basait principalement sur l'écoute et la participation du patient dans le processus de guérison.`,
              `J'effectuais les différents bilans pour établir un diagnostic ostéopathique et je fournissais le traitement adéquat.`,
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
