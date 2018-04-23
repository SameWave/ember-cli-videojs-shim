import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/video-test';

import videojs from 'videojs';

export default Component.extend({
  layout,
  tagName: 'video',
  classNames: ['video-js'],
  attributeBindings:['data-setup'],

  'data-setup': computed(function() {
    return '{"controls": true, "autoplay": false, "preload": "auto"}';
  }),

  didInsertElement() {
    this._super(...arguments);
    videojs(this.elementId);
  }
});

