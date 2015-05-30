# jQuery Autocomplete Light [![Build Status](https://secure.travis-ci.org/yourlabs/jquery-autocomplete-light.svg?branch=master)](https://travis-ci.org/yourlabs/jquery-autocomplete-light) ![Bower Version](https://badge.fury.io/bo/jquery-autocomplete-light.svg)

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.autocomplete-light.min.js"></script>
	```

3. Call the plugin:

	```javascript
    $('#navigation_autocomplete').yourlabsAutocomplete({
        url: '/autocomplete/',
        choiceSelector: 'a',
    }).input.bind('selectChoice', function(e, choice, autocomplete) {
        document.location.href = choice.attr('href');
    });
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.autocomplete-light.js
│   └── jquery.autocomplete-light.min.js
├── src/
│   ├── jquery.autocomplete-light.coffee
│   └── jquery.autocomplete-light.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── autocomplete-light.jquery.json
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [autocomplete-light.jquery.json](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/autocomplete-light.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/yourlabs/jquery-autocomplete-light/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Guides

#### How did we get here?

I wanted a really simple autocomplete plugin, here's why this script is simpler
than the others:

- server-side rendering, use your favorite server-side framework, tell
  autocomplete what elements are choices by passing a choiceSelector on
  instanciation,
- autocomplete and widget are loosely coupled, allowing to use only the
  autocomplete script for anything and implement your own logic by binding
  selectChoice,

I love this script because it never really gets in my way thanks to its
simplicity which is an initial requirement.

## Contributing

Check [CONTRIBUTING.md](https://github.com/yourlabs/jquery-autocomplete-light/blob/master/CONTRIBUTING.md) for more information.

## License

BSD
