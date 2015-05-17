import DS from 'ember-data';
import Page from 'ember-cli-static/models/page';

export default DS.Model.extend(Page, {
  date: DS.attr('date'),
  category: DS.attr('string'),
  tags: DS.attr('array')
});
