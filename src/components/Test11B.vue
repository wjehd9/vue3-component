<template>
    <div>
        Test11B
    </div>
    <h5> {{msg}} </h5>
    <input id="Test11BInput" ref="Test11BRef"/>
</template>

<script>

export default {
    name: "Test11B",
    data() {
        return {
            msg : 'WelCome Test11B',
        }
    },
    methods: {
        focus() {
            this.$refs.Test11BRef.focus();
        }
    }
}
</script>

<style scoped>

</style>