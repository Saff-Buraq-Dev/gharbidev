<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import pdfjs from "pdfjs-dist";

export default {
  props: {
    file: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    pdfjs.getDocument(this.file).promise.then((pdf) => {
      pdf.getPage(this.page).then((page) => {
        const viewport = page.getViewport({ scale: this.scale });
        const canvas = this.$refs.canvas;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page
          .render({
            canvasContext: context,
            viewport: viewport,
          })
          .promise.then(() => {
            this.$emit("page-rendered", this.page);
          });
      });
    });
  },
};
</script>
