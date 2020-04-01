import RESTAdapter from '@ember-data/adapter/rest';

export default class BaseAdapter extends RESTAdapter {
    host = 'https://api.github.com';
}
