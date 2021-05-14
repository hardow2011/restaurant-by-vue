<template>
    <div>
        <div class="title has-text-left notification is-primary">
        {{ dishCategory.id }}
        </div>
                <div class="columns is-multiline">
        <DishCard class="dish-card column is-one-quarter" v-for="(dish, index) in dishCategory.dishes" :key="index" :dish="dish" />
        </div>
    </div>
</template>

<script>
import DishCard from "@/components/DishCard.vue";

export default {
    props: {
        dishCategory: {
            type: Object,
            required: true
        }
    },
    components: {
        DishCard
    },
    mounted() {
    },
}
</script>