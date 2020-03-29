import Route from '@ember/routing/route';

export default class ListReposRoute extends Route {
    model(){
        return [
            {
                name: 'EmberJs',
                owner: 'EmberDevs'
            },
            {
                name: 'NodeJs',
                owner: 'NodeFoundation'
            },
            {
                name: 'Angular Js',
                owner: 'AngularDevs'
            },
        ]
    }
}
