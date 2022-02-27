<template>
    <div v-once>
        <h4> {{msg}} </h4>
        <p> {{line}} </p>
        <p> {{receive}} </p>
    </div>
</template>

<script>
export default {
    name: "Test12",
    props: [
        'receive',
    ],
    data() {
        return {
            msg: 'Test12!!',
            line: 'Test',
        }
    },
    mounted() {
        console.log('Test12!!, v-once');
    }
}
</script>

<style scoped>

</style>