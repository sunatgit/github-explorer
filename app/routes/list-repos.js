import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReposRoute extends Route {
  @service store;
  async model(params) {
    let user = await this.store.findRecord('user', params.user_id);
    let repos = await user.get('ownedRepos');
    return {
      repos: repos,
      user: user
    };
  }
}
