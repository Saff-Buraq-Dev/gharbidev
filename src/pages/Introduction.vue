<template>
  <div class="chat-wrapper q-pa-lg">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 600px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated>
        <q-bar>
          <q-icon name="fab fa-facebook-messenger"></q-icon>
          <div>Messenger</div>

          <q-space></q-space>

          <q-btn dense flat icon="minimize"></q-btn>
          <q-btn dense flat icon="crop_square"></q-btn>
          <q-btn dense flat icon="close"></q-btn>
        </q-bar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <q-chat-message
            v-for="message in messages"
            :key="message.stamp[lang]"
            :name="message.name[lang]"
            :avatar="message.avatar"
            :text="message.text[lang]"
            :stamp="message.stamp[lang]"
            :sent="message.sent"
            :bg-color="message.bgColor"
            :text-color="message.textColor"
          ></q-chat-message>
          <q-chat-message
            name="Jane Doe"
            avatar="avatars/jane-avatar.png"
            bg-color="primary"
            text-color="white"
          >
            <q-spinner-dots size="2rem"></q-spinner-dots>
          </q-chat-message>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<style scoped>
.chat-wrapper {
  width: 80%;
  margin: auto;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Introduction",
  props: {
    lang: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      messages: [
        {
          name: { fr: "Jane Doe", en: "Jane Doe" },
          avatar: "avatars/jane-avatar.png",
          text: {
            fr: ["Parle moi un peu de toi!"],
            en: ["Tell me a bit about yourself!"],
          },
          stamp: { fr: "il y a 15 minutes", en: "15 minutes ago" },
          bgColor: "primary",
          textColor: "white",
          sent: false,
        },
        {
          name: { fr: "moi", en: "me" },
          avatar: "avatars/my-avatar.png",
          text: {
            fr: [
              "Je suis étudiant à l'UQAM en Baccalauréat en Informatique et Génie Logiciel. Avec la covid, j'ai eu le courage de changer de carrière pour enfin faire quelque chose qui me stimule. Avant j'étais physiothérapeute ostéopathe!",
            ],
            en: [
              "I am a student at UQAM in Bachelor of Computer Science and Software Engineering. With the covid, I had the courage to change career to finally do something that stimulates me. I used to be a physiotherapist and osteopath!",
            ],
          },
          stamp: { fr: "il y a 13 minutes", en: "13 minutes ago" },
          bgColor: "#c3cddb",
          textColor: "black",
          sent: true,
        },
        {
          name: { fr: "Jane Doe", en: "Jane Doe" },
          avatar: "avatars/jane-avatar.png",
          text: {
            fr: ["Et pourquoi l'informatique?"],
            en: ["And why Computer Science?"],
          },
          stamp: { fr: "il y a 10 minutes", en: "10 minutes ago" },
          bgColor: "primary",
          textColor: "white",
          sent: false,
        },
        {
          name: { fr: "moi", en: "me" },
          avatar: "avatars/my-avatar.png",
          text: {
            fr: [
              "J'aime être stimulé mentalement et trouver des solutions aux problèmes. Une fois j'ai eu une discussion avec un inconnu, où il m'a demandé ce que je faisais dans la vie et si j'aimais cela. J'ai répondu que j'aimerai éventuellement changer de carrière. Il m'a demandé ce que je voulais faire. J'ai dit Informatique. Et comme par hasard, le monsieur était développeur. Alors il m'a conseillé d'aller voir des tutoriels sur YOUTUBE voir si j'aime réellement ça. Et c'était le coup de foudre. Aujourd'hui la programmation est vraiment une passion pour moi!",
            ],
            en: [
              "I like to be mentally stimulated and find solutions to problems. Once I had a discussion with a stranger, where he asked me what I did for a living and if I liked it. I replied that I would eventually like to change my career. He asked me what I wanted to do. I said IT. And as if by chance, the man was a developer. So he advised me to go see tutorials on YOUTUBE to see if I really like it. And it was love at first sight. Today programming is really a passion for me!",
            ],
          },
          stamp: { fr: "il y a 8 minutes", en: "8 minutes ago" },
          bgColor: "#c3cddb",
          textColor: "black",
          sent: true,
        },
        {
          name: { fr: "Jane Doe", en: "Jane Doe" },
          avatar: "avatars/jane-avatar.png",
          text: {
            fr: [
              "Et comment était le retour au banc d'école?",
              "Avais-tu trouvé des difficulté à lâcher ta vie professionnelle pour retourner aux études?",
            ],
            en: [
              "And how was the return to the school bench?",
              "Did you find it difficult to let go of your professional life to go back to school?",
            ],
          },
          stamp: { fr: "il y a 6 minutes", en: "6 minutes ago" },
          bgColor: "primary",
          textColor: "white",
          sent: false,
        },
        {
          name: { fr: "moi", en: "me" },
          avatar: "avatars/my-avatar.png",
          text: {
            fr: [
              "Le retour s'est très bien passé! Je pense qu'avec le sérieux, et l'expérience de vie que j'ai acquis m'ont permis de bien performer aux études. Je suis à la moitié de mon bac et je maintiens un gpa de 4.04/4.3 ce qui m'a valu 3 bourses d'excellence.",
            ],
            en: [
              "The return went very well! I think that with the seriousness, and the life experience that I acquired allowed me to perform well in studies. I am halfway through my bachelor's degree and maintain a gpa of 4.04/4.3 which has earned me 3 merit scholarships.",
            ],
          },
          stamp: { fr: "il y a 5 minutes", en: "5 minutes ago" },
          bgColor: "#c3cddb",
          textColor: "black",
          sent: true,
        },
      ],
    };
  },
});
</script>
