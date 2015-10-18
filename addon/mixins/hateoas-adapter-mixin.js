import Ember from 'ember';

export default Ember.Mixin.create({

  useIdAsLink: false,

  urlForUpdateRecord(id, modelName, snapshot) {
    return this.useIdAsLink ? id : this._super(id, modelName, snapshot);
  },

  urlForDeleteRecord: function (id, modelName, snapshot) {
    return this.useIdAsLink ? id : this._super(id, modelName, snapshot);
  },

  urlForFindRecord(id, modelName, snapshot) {
    return this.useIdAsLink ? id : this._super(id, modelName, snapshot);
  }

});
