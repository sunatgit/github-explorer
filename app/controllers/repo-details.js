import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class RepoDetailsController extends Controller {
    queryParams = ['limit'];
    @tracked limit = 0;

    @tracked showForks = false;
    @tracked forks = null;
  
    reset(element, args) {
      args[1].showForks = false;
      args[1].forks = null;
    }

    @action
    async getForks() {
      if (!this.showForks) {
        if (!this.forks) {
          this.model.repo.get('forks').then( (data) => {
            this.forks = data;
          });
        }
      }
  
      this.showForks = !this.showForks;
    }
}
