import BaseAdapter from './base';

export default class RepoAdapter extends BaseAdapter {

  buildURL (modelName, id, snapshot, requestType, query)  {
    if (query && query.filter && query.filter.user_id && query.filter.repo_id) {
      let composedUrl = `${this.host}/${this.pathForType(modelName)}/${query.filter.user_id}/${query.filter.repo_id}`;

      // Delete the query parameters so they are not sent to the server
      delete query.filter.user_id;
      delete query.filter.repo_id;
      
      return composedUrl;
    }
    else {
      this._super(...arguments);
    }
  }
}
