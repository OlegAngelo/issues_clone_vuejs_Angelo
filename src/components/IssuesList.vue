<template>
    <div>
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
import IssuesListItem from './IssuesListItem'

export default {
    name: 'IssuesList',
    components: {
        IssuesListItem,
    },
    data() {
        return {
            issues: [],
        };
    },
    created: function() {
        axios.get('https://api.github.com/repos/vuejs/vue/issues').then((response) => {
            this.issues = response.data;
        });
    }
}
</script>

<style scoped>
</style>