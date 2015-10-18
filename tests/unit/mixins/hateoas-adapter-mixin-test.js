import Ember from 'ember';
import HateoasAdapterMixinMixin from '../../../mixins/hateoas-adapter-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | hateoas adapter mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var HateoasAdapterMixinObject = Ember.Object.extend(HateoasAdapterMixinMixin);
  var subject = HateoasAdapterMixinObject.create();
  assert.ok(subject);
});
