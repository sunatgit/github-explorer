import ApplicationSerializer from './application';

export default class RepoSerializer extends ApplicationSerializer {
  normalize(model, hash, prop) {
    if (hash.owner) {
      // rename 'type' as it is a special name in model.
      hash.owner.userType = hash.owner.type;
      hash.owner.type = 'user'; 
    }

    if (hash.parent) {
      hash.parent_url = hash.parent.url;
      delete hash.parent;
    }
    
    delete hash.forks;
    return super.normalize(...arguments);
  }
}
