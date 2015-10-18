import Ember from 'ember';

export default Ember.Mixin.create({

  extractIdFromLinks: false,

  extractRelationships: function(modelClass, resourceHash) {
    let relationships = {};

    modelClass.eachRelationship((key, relationshipMeta) => {
      let relationship = null;
      let relationshipKey = this.keyForRelationship(key, relationshipMeta.kind, 'deserialize');
      if (resourceHash.hasOwnProperty(relationshipKey)) {
        let data = null;
        let relationshipHash = resourceHash[relationshipKey];
        if (relationshipMeta.kind === 'belongsTo') {
          data = this.extractRelationship(relationshipMeta.type, relationshipHash);
        } else if (relationshipMeta.kind === 'hasMany') {
          data = Ember.isNone(relationshipHash) ? null : relationshipHash.map((item) => this.extractRelationship(relationshipMeta.type, item));
        }
        relationship = { data };
      }

      let linkKey = this.keyForLink(key, relationshipMeta.kind);
      if (resourceHash.links && resourceHash.links.hasOwnProperty(linkKey)) {
        let related = resourceHash.links[linkKey];
        relationship = relationship || {};
        relationship.links = { related };
        if (resourceHash.links) {
          var related;
          if (Ember.isArray(resourceHash.links)) {
            let links = resourceHash.links.filter(link => link.rel === linkKey);
            if (links && links[0]) {
              related = links[0].href;
            }
          } else if (resourceHash.links.hasOwnProperty(linkKey)) {
            related = resourceHash.links[linkKey];
          }

          if (related) {
            relationship = relationship || {};
            relationship.links = { related };
          }
        }

        if (relationship) {
          relationships[key] = relationship;
        }
      });

      return relationships;
    },

    extractId(modelClass, resourceHash) {
      if (this.extractIdFromLinks && resourceHash.links && Ember.isArray(resourceHash.links)) {
        return resourceHash.links.find(link => link.rel === 'self').href;
      } else {
        return this._super(modelClass, resourceHash);
      }
    }

  });
