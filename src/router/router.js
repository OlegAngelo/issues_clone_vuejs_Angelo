import Vue from 'vue';
import Router from 'vue-router';
import IssuesList from '../components/IssuesList';

Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IssuesList
    },
    {
      path: '/:currentPage',
      component: IssuesList
    }
  ]
});