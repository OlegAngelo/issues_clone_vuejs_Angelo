<template>
  <div class="overflow-auto">
    <b-pagination
      :total-rows="rows"
      :per-page="per_page"
      prev-text="< Prev"
      label-page
      next-text="Next >"
      hide-goto-end-buttons
      align="center"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      per_page: 10,
      issues: []
    }
  },
  computed: {
    rows() {
      return this.issues.length;
    }
  }
}
</script>
