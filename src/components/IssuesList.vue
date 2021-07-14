<template>
  <div>
    <Pagination></Pagination>
    <ul class="list-group">
      <IssuesListItem 
        v-for="issue in issues"
        :issue="issue"
        :key="issue.id"
      >
      </IssuesListItem>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import IssuesListItem from './IssuesListItem';
import Pagination from './Pagination.vue';

export default {
  name: 'IssuesList',
    components: {
      IssuesListItem,
      Pagination
    },
    data() {
      return {
        issues: [],
      };
    },
    created: function() {
      axios.get('https://api.github.com/repos/vuejs/vue/issues',{
        params: {
          per_page: 25,
          page: 1,
          filter: 'all'
        }
      }).then((response) => {
        this.issues = response.data;
      });
    }
}
</script>

<style scoped>
</style>