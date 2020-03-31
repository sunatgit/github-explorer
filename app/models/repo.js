import Model, {attr, belongsTo, hasMany } from '@ember-data/model';

export default class RepoModel extends Model {
  @hasMany('user', {
    inverse: 'contributingRepos'
  }) contributors;
  @hasMany('user', {
    inverse: 'stargazingRepos'
  }) stargazers;
  @hasMany('repo', { inverse: 'parent' }) forks;
  @belongsTo('repo', { inverse: 'forks' }) parent;
  @attr('string') name;
  @attr('string') fullName;
  @attr('number') forksCount;
  @attr owner;
}
