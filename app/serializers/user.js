import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  normalize(model, hash, prop) {
    hash.links = {
      ownedRepos: `/users/${hash.login}/repos`
    };
    return super.normalize(...arguments);
  }
}
