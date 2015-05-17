import DS from 'ember-data';
import Ember from 'ember';
import Page from 'ember-cli-static/models/page';
import moment from 'moment';

export default Page.extend({
  date: DS.attr('date'),
  category: DS.attr('string'),
  tags: DS.attr('array'),

  splitID: Ember.computed('id', function() {
    return this.get('id').split('-');
  }),

  dateFromID: Ember.computed('splitID', function() {
    var splitID = this.get('splitID');
    return [splitID[0], splitID[1], splitID[2]].join('-');
  }),

  year: Ember.computed('dateFromID', function() {
    return moment(this.get('dateFromID')).format('YYYY');
  }),

  month: Ember.computed('dateFromID', function() {
    return moment(this.get('dateFromID')).format('MM');
  }),

  day: Ember.computed('dateFromID', function() {
    return moment(this.get('dateFromID')).format('DD');
  }),

  formattedDate: function() {
    return moment(this.get('date')).fromNow();
  }.property('date'),

  name: Ember.computed('id,dateFromID', function() {
    return this
    return this.get('id').split(this.get('dateFromID')+'-').join('');
  })
});
