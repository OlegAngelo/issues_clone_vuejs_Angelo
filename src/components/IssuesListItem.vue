<template>
  <li class="list-group-item media parent">
    <div class="text-center mx-2">
      <img 
        v-if="issue.state === 'open'"
        src="../assets/static/images/open.jpeg"
      >
      <img 
        v-else
        src="../assets/static/images/closed.jpeg" 
      >
    </div>

    <div class="media-body">
      <b>{{ issue.title }}</b>
      <span 
        v-for="label in issue.labels"
        :key="label.id"
        :style="{ backgroundColor: label.color }"
      >
        {{ label.name }}
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
.parent {
    display: flex;
}

img {
  width: 15px;
  margin-right: 10px;
}
</style>