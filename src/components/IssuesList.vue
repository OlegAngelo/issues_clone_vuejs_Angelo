<template>
  <div>
    <Pagination 
      :issues="issues"
      @page:update="updatePage"
      :currentPage="currentPage"
      :pageSize="pageSize"
    >
    </Pagination>

    <ul class="list-group">
      <IssuesListItem 
        v-for="issue in issues"
        :issue="issue"
        :currentPage="currentPage"
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
        currentPage: 0,
        pageSize: 3,
      };
    }, 
    beforeMount: function() {
      this.updateVisibleIssues();
    },
    created: function() {
      this.fetchAPI();
    },
    methods:{
      fetchAPI() {
        axios.get('https://api.github.com/repos/vuejs/vue/issues',{
          params: {
            filter: 'all',
          }
        }).then((response) => {
          this.issues = response.data;
        });
      },
      updatePage(pageNumber){
        this.currentPage = pageNumber;
        this.updateVisibleIssues();
      },
      updateVisibleIssues() {
        this.issues = this.issues.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

        if(this.issues.length == 0 & this.currentPage > 0) {
          this.updatePage(this.currentPage - 1);
        }
      },
    }
}
</script>

<style scoped>
</style>