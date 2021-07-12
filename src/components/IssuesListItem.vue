<template>
  <li class="list-group-item media">
    <div class="media-body">
      <b>{{ issue.title }}</b>
      <span>
      {{ issue.labels.name }}
      </span>

      <br>

      #{{ issue.number }} opened {{ date_info }} by {{ issue.user.login }} 
    </div>
  </li>
</template>

<script>
import moment from 'moment';

export default {
  name: 'IssuesListItem',
  props: ['issue'],
  computed: {
    date_info() {
      var timestamp = moment(this.issue.created_at);
      var current_month = moment().format("M");
      var github_month = timestamp.format("M");

      if (current_month === github_month) {
        return timestamp.fromNow();
      }
        
      return `on ${timestamp.format("MMM D")}`;
    }
  }
}
</script>

<style scoped>
</style>