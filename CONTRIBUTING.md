# Getting started

You need npm, grunt and all the JS toolkit. Then, install grunt with modules in
the local directory:

    npm install grunt
    npm install grunt-contrib-{concat,jshint,uglify,coffee,watch,qunit}

# Building jquery.autocomplete-light.js

    grunt build

# Testing

    grunt qunit

# Contributing

Before sending a pull request remember to follow [jQuery Core Style Guide](http://contribute.jquery.org/style-guide/js/).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

#### Have you created a plugin from our boilerplate?

[Let us
know!](https://github.com/yourlabs/jquery-autocomplete-light/wiki/Sites) It’s
interesting to see what features others have come up with.
