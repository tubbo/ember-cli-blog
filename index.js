/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-blog',

  static: {
    resources: [{
      name: 'articles',
      idRecipe: ['date', 'title']
    }, {
      name: 'pages',
      idRecipe: ['title']
    }]
  }
};
