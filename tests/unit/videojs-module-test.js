import { module, test } from 'qunit';
import videojs from 'videojs';

module('videojs as an ES6 module', function() {
  test('it works', function(assert) {
    assert.ok(videojs);
  });
});
