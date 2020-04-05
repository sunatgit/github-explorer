import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import config from '../config/environment';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service session;
  config = config.torii.providers['facebook-oauth2'];

  @action
  logout() {
    this.session.invalidate();
  }
}