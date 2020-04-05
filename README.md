# github-explorer
[Ember JS](https://emberjs.com/) is a mature framework that comes with batteries included. It has [rich ecosystem](https://emberobserver.com/), [helpful community](https://discuss.emberjs.com/) and [good documentation](https://guides.emberjs.com/release/). One of the main hurdles for someone learning ember is the steep learning curve. This tutorial would help anyone to develop their Ember application by trying out a reasonably good project covering the key aspects of Ember JS. In this tutorial, we will build a [Github](https://github.com/) explorer of sorts. Given a Github user, we will build an explorer that will list the repos of that user, their contributors and their stargazers. We will dynamically load some content. We will build custom adapter and serializers and close with a OAuth integration for our project. Anyone going through these steps one will be well on their way to kick start their project and to learn deeper aspects of Ember JS. So lets get started!

Continue for the full tutorial at [Yet Another EmberJS Tutorial
](https://ssvmcljjmjodcc7ta.westus2.cloudapp.azure.com:9443/yet-another-emberjs-tutorial/)

ember-cli
---------

Ember JS comes with best in class [ember-cli](https://cli.emberjs.com/release/basic-use/) to start a new app or to add more functionality to existing apps. In fact, ember was one the first JS frameworks to have CLI functionality and many other frameworks have included CLIs in their offering on seeing its value. To use the cli, first install the dependancies [nodejs and npm](https://nodejs.org/en/) following the instruction on their pages. Now install ember-cli,

    npm install -g ember-cli

Architecture
============

![ember-building-blocks](https://tellspk.files.wordpress.com/2020/03/ember-building-blocks.png) An Ember app consists of few key building blocks.

1.  Router is the central piece of an Ember app. Here one can define the navigation scheme for the app. These routes are defined in app/router.js. When a user selects a link, the route module corresponding to that URL is invoked.
2.  The main function of a route is to load the model(s) corresponding to the page. These may involve asynchronous calls to a backend server. So a route may return promises instead of real data.
3.  The model from a route is sent to controller. The controller can embellish the model before sending the data back to the template. A key thing to note here is that controllers are singleton objects. If you navigate between the same route, the controllers won't be reinitialized each time, unless you explicitly do so. More about that later.
4.  Ember uses [handlebars](https://handlebarsjs.com/) representation for its view templates. Reusable pieces of the template could be modularized into components.

Now that we have an overview of the architecture, lets start working on our explorer.

Building the explorer
=====================

Our Github explorer will have three pages. The landing page would be under list-repos route from where users can click on repos to find out more details about the repo. In turn repos will have forks, which are again repos. Following gives a quick look of how our new app navigation would look like. ![explorer](https://tellspk.files.wordpress.com/2020/03/explorer.png)

New project
-----------

Lets use ember-cli to start our app. Running for following command would create our project structure.

    ember new github-explorer

All the app specific files would be present in the `github-explorer/app` folder. Now browse through the app folder and you can see all the blocks that we discussed in the architecture section present. Most of those folders would be empty. Don't worry, we will create them as we build our app. _**Note:**_ One would benefit from applying OS specific optimizations as it would save time in the long run.  Now you can run the app by running this command from github-explorer folder. By default ember serves the app at port 4200. You can open your favorite browser and visit http://localhost:4200 see your app in action. You will see a successful setup page.

    ember serve

_**Note:**_ Ember supports live-refresh. So you could keep your serve running, change your app and see your changes take effect. This would be super useful to iterate quickly on changes. ![setup-success](https://tellspk.files.wordpress.com/2020/03/setup-success.png) The rest of the tutorial is organized as below.

*   [Introduction](https://ssvmcljjmjodcc7ta.westus2.cloudapp.azure.com:9443/yet-another-emberjs-tutorial/)
*   [Templates and Routes]
*   [Router Parameters and Links]
*   [Adapters and Serializers]
*   [Dynamic loading]
*   [Facebook OAuth]
*   [Thank You]


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd github-explorer`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
