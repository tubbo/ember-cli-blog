var titleize = require('titleize'),
    moment = require('moment');

module.exports = {
  description: 'Generate an article',

  availableOptions: [
    { name: 'category', type: String },
    { name: 'tags', type: Array }
  ],

  locals: function(options) {
    return {
      title: titleize(options.entity.name),
      name: options.entity.name,
      year: moment.formatDate('YYYY'),
      month: moment.formatDate('MM'),
      day: moment.formatDate('DD'),
      category: (options.category || 'gbs'),
      tags: options.tags
    }
  }
};
