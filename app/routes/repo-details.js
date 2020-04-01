import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReposDetailsRoute extends Route {
  @service store;

  async model(params) {
      let repo = await this.get('store').queryRecord(
        'repo', {
          filter: {
            user_id: params.user_id,
            repo_id: params.repo_id
          }});
      let contributors = await repo.get('contributors');
      let stargazers = await repo.get('stargazers');
      return {
        repo: repo,
        contributors: contributors,
        stargazers: stargazers
      };
  }
}
