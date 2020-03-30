import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class RepoDetailsController extends Controller {
    queryParams = ['limit'];
    @tracked limit = 0;
}
