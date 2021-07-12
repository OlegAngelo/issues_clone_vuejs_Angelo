<template>
  <li class="list-group-item media">
    <div class="media-body">
      <b>{{ issue.title }}</b>
      <span>
      {{ issue.labels.name }}
      </span>

      <br>

      #{{ issue.number }} opened {{ format_date() }} by {{ issue.user.login }} 
    </div>
  </li>
</template>

<script>
import moment from 'moment';

export default {
  name: 'IssuesListItem',
  props: ['issue'],
  methods: {
    format_date() {
      // get issue date created 
      var timestamp = moment(this.issue.created_at); 

      // get N of days
      var days_created = timestamp.fromNow(); // N days ago 
      var current_day = moment().format('D');

      // get minutes 
      var github_minute = timestamp.format('mm'); 

      // get current month & created month
      var current_month = moment().format('M'); 
      var github_month = timestamp.format('M'); 

      if (github_month != current_month) {
        return 'on ' + (timestamp.format("MMM D")); // display by month
      }
      else if (github_month == current_month) {
        return (days_created); // display by days
      }
      else if((github_month == current_month) && (days_created == current_day)) {
        return (moment().startOf(timestamp).fromNow()) + 'hours ago'; // display by hours
      }
      else if ((github_month == current_month) && (days_created == current_day) && (github_minute <= 60 && github_minute >= 1)) {
        return (moment().startOf(timestamp).fromNow()) + 'minutes ago'; // display by minutes
      }
    }
  }
}
</script>

<style scoped>
</style>