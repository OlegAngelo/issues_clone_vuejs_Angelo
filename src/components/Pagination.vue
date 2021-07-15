<template>
    <div v-if="totalPages() > 0" class="pagination-wrapper text-center">
      <button v-if="showPreviousLink()" @click="updatePage(currentPage - 1)">  &lt; Prev </button>
        {{ currentPage + 1 }} of {{ totalPages() }}
      <button v-if="showNextLink()" @click="updatePage(currentPage + 1)"> Next &gt; </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['issues', 'currentPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {
      return Math.ceil(this.issues.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  }
}
</script>
