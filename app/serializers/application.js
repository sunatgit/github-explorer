import { underscore } from '@ember/string';
import JSONSerializer from '@ember-data/serializer/json';
import ENV from 'github-explorer/config/environment';

export default class RepoSerializer extends JSONSerializer {
  githubEndpoint = 'https://api.github.com';
  
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalize(model, hash, prop) {
    if (!hash.links)
    {
      hash.links = {};
    }
    
    // Remove endpoint prefix from relationship links
    for (const property in hash) {
      if ((typeof hash[property] === 'string' || hash[property] instanceof String) &&
        hash[property].startsWith(this.githubEndpoint) &&
        property.endsWith('_url')) {
        hash.links[property.substring(0, property.length - 4)] = hash[property].substring(this.githubEndpoint.length, hash[property].length);
      }
    }

    return super.normalize(...arguments);
  }
}
