<template>
  <li class="list-group-item media">
    <div class="media-body">
      <b>{{ issue.title }}</b>
      <span>
      {{ issue.labels.name }}
      </span>

      <br>

      #{{ issue.number }} opened {{ issue.created_at }} by {{ issue.user.login }} 
    </div>
  </li>
</template>

<script>
// import moment from 'moment';

export default {
  name: 'IssuesListItem',
  props: ['issue'],
  methods: {
    format_date() {
    }
  }
}
</script>

<style scoped>
</style>