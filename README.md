# ember-inert-polyfill

_An Ember addon that enables use of the HTML `inert` attribute by importing
the [inert polyfill](https://github.com/GoogleChrome/inert-polyfill)._

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]

The `inert` attribute is current a [draft feature](https://html.spec.whatwg.org/multipage/interaction.html#inert-subtrees) of HTML5,
but the Google Chrome team created a small [polyfill](https://github.com/GoogleChrome/inert-polyfill) for it in the meantime which
prevents tab-focusing, using the `accessKey` to access an element, the `click` event and
any other approach to focus.

The official HTML spec provides a good description of its use:

> A node (in particular elements and text nodes) can be marked as inert. When a node is inert, then the user agent must act as if the node was absent for the purposes of targeting user interaction events, may ignore the node for the purposes of text search user interfaces (commonly known as "find in page"), and may prevent the user from selecting text in that node.

A primary example of where this might be extremely usefull is a collapsable side-navigation panel.
When the panel is off-screen, adding the `inert` attribute to it can
prevent links in the panel from becoming tabbable, thus preventing the jarring user
experience of browser focus vanishing into thin air. (Of course, you should then
remove the attribute when panel is animated on-screen.)

## Usage

```bash
ember install ember-inert-polyfill
```

No setup or special configuration is needed: you can now use the `inert` attribute on any HTML element.

## Contributing
This project will intend to stay up to date with offering the [latest version of the polyfill](https://github.com/GoogleChrome/inert-polyfill/blob/master/package.json). If you [notice a discrepency](https://github.com/BrianSipple/ember-inert-polyfill/blob/master/blueprints/ember-inert-polyfill/index.js), please feel free to [open up an issue](https://github.com/BrianSipple/ember-inert-polyfill/issues).
  
### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).



[npm-badge]: https://img.shields.io/npm/v/ember-inert-polyfill.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-inert-polyfill
[travis-badge]: https://img.shields.io/travis/BrianSipple/ember-inert-polyfill/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/BrianSipple/ember-inert-polyfill
[ember-observer-badge]: http://emberobserver.com/badges/ember-inert-polyfill.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-inert-polyfill
[license-badge]: https://img.shields.io/npm/l/ember-inert-polyfill.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/BrianSipple/ember-inert-polyfill.svg
[dependencies-badge-url]: https://david-dm.org/BrianSipple/ember-inert-polyfill
[devDependencies-badge]: https://img.shields.io/david/dev/BrianSipple/ember-inert-polyfill.svg
[devDependencies-badge-url]: https://david-dm.org/BrianSipple/ember-inert-polyfill#info=devDependencies
