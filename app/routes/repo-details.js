import Route from '@ember/routing/route';

export default class RepoDetailsRoute extends Route {
    model(params) {
        return {
            owner: params.user_id,
            repo: params.repo_id
        };
    }
}
