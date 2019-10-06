<template>
  <div
    class="modal fade"
    id="achievementsModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="achievementsModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="achievementsModalTitle">Twoje osiągnięcia</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-for="(achievement, index) in achievements" v-bind:key="index">
            <span class="font-weight-bold h1">{{achievement.name}}</span>
            <img class="modal__image mt-5" :src="achievement.src" />
            <hr/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Anuluj</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal__image {
  width: 100%;
  height: auto;
}
</style>
<script>
export default {
  props: {
    achievements: Array,
  },
};
</script>
