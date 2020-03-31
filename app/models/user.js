import Model, {hasMany, attr} from '@ember-data/model';

export default class UserModel extends Model {
    @hasMany('repo') ownedRepos;
    @hasMany('repo') contributingRepos;
    @hasMany('repo') stargazingRepos;
    @attr('string') login;
    @attr('string') company;
    @attr('string') bio;
    @attr('string') name;
    @attr('string') email;
    @attr('number') publicRepos;
    @attr('number') publicGists;
}
