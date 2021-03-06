import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('list-repos', {path: '/:user_id'});
  this.route('repo-details', { path: '/:user_id/:repo_id' });
  this.route('login');
});
