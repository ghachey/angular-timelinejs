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

      //////////////////////
      // Required options //
      //////////////////////
      var width = (scope.width === undefined) ? '960' : scope.width;
      var height = (scope.height === undefined) ? '540' : scope.height;
      var timeline_conf = {
        source: scope.source
      };

      //////////////////////
      // Optional options //
      //////////////////////

      // What are other types? not documented in TimelineJS
      // Not yet available for change to user
      if (scope.type) timeline_conf["type"] = scope.type;

      // is this used? First glance did not see effect of change
      // I don't think it is useful when passing id in object instantiation as below
      // Not yet available for change to user
      if (scope.embed_id) timeline_conf["embed_id"] = scope.embed_id;

      // First glance did not see the effect?
      // Not yet available for change to user
      if (scope.embed) timeline_conf["embed"] = scope.embed;

      if (scope.start_at_end==='true') timeline_conf["start_at_end"] = true;
      if (scope.start_zoom_adjust) timeline_conf["start_zoom_adjust"] = scope.start_zoom_adjust;
      if (scope.start_at_slide) timeline_conf["start_at_slide"] = scope.start_at_slide;

      // working, but how to integrate with Angular routing?! Something to ponder
      (scope.hash_bookmark==='true') ? timeline_conf["hash_bookmark"] = true :
                                       timeline_conf["hash_bookmark"] = false;

      if (scope.font) timeline_conf["font"] = scope.font;

      (scope.debug==='true') ? VMM.debug = true : VMM.debug = false;

      // Instantiate timeline object and manipulate DOM
      var timeline = new VMM.Timeline('pipp-timeline',width,height);

      timeline.init(timeline_conf);

    }
  };
});
