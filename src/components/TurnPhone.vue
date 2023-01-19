<template>
    <div>
        <q-card class="my-card">
            <q-img src="turn-phone.png">
                <div class="absolute-bottom text-subtitle2 text-center">
                    {{ $t("turnPhone") }}
                </div>
            </q-img>
        </q-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "TurnPhone",
    props: {
        lang: {
            type: String,
            default: "fr",
        },
    },
});
</script>