<template>
    <div class="home">

    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('userProfile', ['getUserData']),
  },
  mounted() {
    this.getUserData();
  },
};
</script>
