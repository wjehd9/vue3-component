<template>
    <div>
        <!-- <input type="text"/> -->
        <h5>Test11A</h5>
        <test-11-b ref="postListRef"></test-11-b>
        <button v-on:click="onClick">클릭</button>
    </div>
</template>

<script>
import Test11B from './Test11B.vue';

export default {
    name: "Test11A",
    components: {
        Test11B,
    },
    // mounted() {
    //     console.log(this.$refs.postListRef);
    //     this.$refs.postListRef.focus();
    // },
    methods: {
        onClick() {
            const el = this.$refs.postListRef.$el;
            this.$refs.postListRef.focus();
            console.log('Parent', el);
        }
    },
}
</script>

<style scoped>

</style>