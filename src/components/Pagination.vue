<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    >
    </b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['issue'],
  data() {
    return {
      perPage: 25,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.issue;
    }
  }
}
</script>