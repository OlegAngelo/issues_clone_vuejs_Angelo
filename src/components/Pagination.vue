<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      hide-goto-end-buttons
      class="mt-4"
      align="center"
      :total-rows="rows"
    >
      <template #prev-text><span @click="fetchAPI()"> &lt; Prev</span></template>
      <template #next-text><span @click="fetchAPI()" @onBtnClick="pageUpdate()">Next &gt;</span></template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Pagination',
  data() {
    return {
      issues: [],
      rows: 500,
      currentPage: 1
    }
  },
  methods: {
    fetchAPI() {
      axios.get('https://api.github.com/repos/vuejs/vue/issues',{
        params: {
          per_page: 25,
          page: this.currentPage,
          filter: 'all',
        }
      }).then((response) => {
        this.issues = response.data;
      });

      this.currentIssues();
      this.pageUpdate();
    },
    currentIssues() {
      this.$emit('currentIssues', this.issues);
    },
    pageUpdate() {
      this.$router.push({ path: `/page=${this.currentPage}` });
    },
  }
}
</script>
