<template>
    <div class="word_learning">
        <h1>This is world learning component </h1>
        Id = {{gameInfo.id}}
        Info = {{gameInfo.info}}
    </div>
</template>

<style scoped>

.word_learning {
    background-color: aliceblue;
}

</style>

<script>
export default {
  props: {
    gameInfo: Object,
  },
};
</script>
