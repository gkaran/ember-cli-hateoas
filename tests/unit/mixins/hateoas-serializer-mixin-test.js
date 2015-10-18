import Ember from 'ember';
import HateoasSerializerMixinMixin from '../../../mixins/hateoas-serializer-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | hateoas serializer mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var HateoasSerializerMixinObject = Ember.Object.extend(HateoasSerializerMixinMixin);
  var subject = HateoasSerializerMixinObject.create();
  assert.ok(subject);
});
