'use strict';

/**
 * Basic directive wrapping TimelineJS. At the moment, it only binds source
 * data into it's own isolate scope. Will soon take all configuration available
 * to TimelineJS in addition.
 */
angular.module('pippTimelineDirectives', [])
.directive('pippTimelineJS', function ($rootScope) {
  return {
    template: '<div id="pipp-timeline"></div>',
    restrict: 'E',
    scope: {
      source: '=',
      width: '@',
      height: '@',
      start_zoom_adjust: '@',
      start_at_end: '@',
      start_at_slide: '@',
      hash_bookmark: '@',
      font: '@',
      lang: '@',
      debug: '@'
    },
    link: function postLink(scope, iElement, iAttrs) {

      // Required options
      var timeline_conf = {
        source: scope.source,

        // Ignored at the moment, why?
        width: (scope.width === undefined) ? '100%' : scope.width,

        // Ignored at the moment, why?
        height: (scope.height === undefined) ? '400' : scope.height,
      };

      // Optional options

      // What are other types? not documented in TimelineJS
      // Not yet available for change to user
      if (scope.type) timeline_conf[type] = scope.type;

      // is this used? First glance did not see effect of change
      // Not yet available for change to user
      if (scope.embed_id) timeline_conf[embed_id] = scope.embed_id;

      // First glance did not see the effect?
      // Not yet available for change to user
      if (scope.embed) timeline_conf[embed] = scope.embed;

      if (scope.start_at_zoom) timeline_conf[start_at_zoom] = scope.start_at_zoom;
      if (scope.start_at_slide) timeline_conf[start_at_slide] = scope.start_at_slide;

      // working, but how to integrate with Angular routing?! Something to ponder
      if (scope.hash_bookmark) timeline_conf[hash_bookmark] = scope.hash_bookmark;

      if (scope.font) timeline_conf[font] = scope.font;

      // seems to debug no matter what?
      if (scope.debug) timeline_conf[debug] = scope.debug;

      console.log("CONFIG: ", JSON.stringify(timeline_conf));

      // Instantiate timeline object and manipulate DOM
      var timeline = new VMM.Timeline('pipp-timeline');
      timeline.init(timeline_conf);

    }
  };
});
