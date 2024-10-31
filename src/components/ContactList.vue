<script>
export default {
    props: {
        contacts: { type: Array, default: () => [] }, // Use function to return default array
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
};
</script>

<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(contact, index) in contacts"
            :key="contact._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ contact.name }}
        </li>
    </ul>
</template>

<!-- <style scoped>
/* Add styling for active class if needed */
.list-group-item.active {
    background-color: #007bff;
    color: white;
}
</style> -->
