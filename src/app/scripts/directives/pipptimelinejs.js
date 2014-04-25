'use strict';

/**
 * Basic directive wrapping TimelineJS. At the moment, it only binds source
 * data into it's own isolate scope. Will soon take all configuration available
 * to TimelineJS.
 */
angular.module('pippTimelineDirectives', [])
.directive('pippTimelineJS', function () {
  return {
    template: '<div id="pipp-timeline"></div>',
    restrict: 'E',
    scope: {timelineData: '=sourceData'},
    link: function postLink(scope, iElement, iAttrs) {

      var timeline_conf = {
        type: 'timeline', // What are other types? not documented in TimelineJS
        embed_id: 'pipp-timeline', // is this used?
        width: '400px', // Ignored at the moment?
        height: '200px', // Ignored at the moment?
        source: scope.timelineData, // working
        embed: false, // Effect?
        start_zoom_adjust: '0', // working
        start_at_slide: '0', // working
        hash_bookmark: false, // working, how to integrate with Angular routing?!
        debug: false // seems to debug no matter what?
      };

      var timeline = new VMM.Timeline('pipp-timeline');
      timeline.init(timeline_conf);

    }
  };
});
