import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = [
      params.year,
      params.month,
      params.day,
      params.title
    ].join('-');
    return this.store.find('article', id)
  });
});
