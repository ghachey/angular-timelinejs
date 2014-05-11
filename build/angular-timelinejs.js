'use strict';

/**
 * Basic directive wrapping TimelineJS. At the moment, it supports JSON sources
 * and can take most of the TimelineJS configuration. It can also provide a two-way
 * binding state to track the current slide in the controller. This can be useful
 * in operations such as CRUD on slides. See README.md for usage more
 * instructions.
 */
angular.module('pippTimelineDirectives', [])
.directive('pippTimelineJS', function ($rootScope, $timeout) {
  return {
    template: '<div id="pipp-timeline"></div>',
    restrict: 'E',
    scope: {
      source: '=',
      width: '@',
      height: '@',
      startZoomAdjust: '@',
      startAtEnd: '@',
      startAtSlide: '@',
      hashBookmark: '@',
      font: '@',
      lang: '@',
      thumbnailUrl: '@',
      state: '=',
      debug: '@'
    },
    link: function postLink(scope, iElement, iAttrs) {

      var timeline;

      //////////////////////
      // Required config  //
      //////////////////////

      var width = (scope.width === undefined) ? '960' : scope.width;
      var height = (scope.height === undefined) ? '540' : scope.height;
      var timeline_conf = {
        source: scope.source
      };

      //////////////////////
      // Optional config  //
      //////////////////////

      // What are other types? not documented in TimelineJS
      // Not yet available for change to user
      if (scope.type) timeline_conf["type"] = scope.type;

      // is this used? First glance did not see effect of change
      // I don't think it is useful when passing id in object instantiation as below
      // Not yet available for change to user
      if (scope.embedId) timeline_conf["embed_id"] = scope.embedId;

      // First glance did not see the effect?
      // Not yet available for change to user
      if (scope.embed) timeline_conf["embed"] = scope.embed;

      if (scope.startAtEnd==='true')
        timeline_conf["start_at_end"] = true;
        timeline_conf["start_at_end"] = false;

      if (scope.startZoomAdjust) timeline_conf["start_zoom_adjust"] = scope.startZoomAdjust;

      // Still need to observe how slide and startAtSlide with behave together
      // in practice. For now, put the burden on the programmer to use both correctly
      // startAtSlide should only be used to instantiate and slide
      // should only be used to reload.

      if (scope.startAtSlide) timeline_conf["start_at_slide"] = scope.startAtSlide;

      // working, but how to integrate with Angular routing?! Something to ponder
      (scope.hashBookmark==='true') ? timeline_conf["hash_bookmark"] = true :
                                       timeline_conf["hash_bookmark"] = false;

      if (scope.font) timeline_conf["font"] = scope.font;
      if (scope.thumbnailUrl) timeline_conf["thumbnail_url"] = scope.thumbnailUrl;

      (scope.debug==='true') ? VMM.debug = true : VMM.debug = false;
      console.log("Timeline Configuration: ", timeline_conf);

      /////////////////////////////
      // Custom Timeline Config  //
      /////////////////////////////

      scope.$watch('state.modal_open', function (newVal) {
        // When timeline is loaded check if a CRUD modal is open for editing
        if (timeline) {
          console.log("Modal open for editing: ", newVal);
          timeline.set_config_item("modal_open", newVal);
        }
      });

      /////////////////////////
      // Rendering Timeline  //
      /////////////////////////

      var render = function (s) {
        // Source arrived but not yet init'ed VMM.Timelines
        if (s && !timeline) {
          console.log("Initializing timeline with: ", timeline_conf);
          timeline_conf["source"] = s;
          timeline = new VMM.Timeline('pipp-timeline', width, height);
          timeline.init(timeline_conf);
          console.log("VMM.Timeline object: ", timeline);
        } else if (s && timeline) { // VMM.Timeline init'ed; ready to only reload
          console.log("Reloading timeline");
          // I think it may be much easier to force a slide on reload
          // Essentially, now the required directive config would contain to bindings
          // <pipp-timeline-j-s source="data" slide="index"></pipp-timeline-j-s>
          // this if/else is effectively DEPRECATED and will eventually be removed
          if (scope.state.index) {
            timeline.reload(s, scope.state.index);
          } else {
            timeline.reload(s);
          }
        }
      };

      // Async cases (when source data coming from services or other async call)
      scope.$watch('source', function (newSource, oldSource) {
        // Source not ready (maybe waiting on service or other async call)
        if (!newSource) {
          console.log("Waiting for source data");
          return;
        }
        render(newSource);
      });

      // Non-async cases (when source data is already on scope)
      render(scope.source);

      // When changing the current slide *from the controller* without changing the
      // source data.
      scope.$watch('state.index', function (newState, oldState) {
        console.log("Detected state change");
        if (!newState == 'undefined') {
          return;
        }
        if (timeline) {
          timeline.get_config().current_slide = newState;
        }
      });

      /////////////////////////
      // Events of Interest  //
      /////////////////////////

      console.log("Listening to events");

      var updateState = function(e, callback) {
        console.log("Timeline navigation event: ", e);
        // For some reason I have not investigated when using
        // 'keydown' events the current_slide is not yet
        // updated in the TimelineJS config. This is why
        // I delay the scope.state.index binding through
        // a simple $timeout callback with 0 delay.
        // Funny enough this does not manifest itself
        // with 'click' events.
        return $timeout(function(){
          scope.state.index = timeline.get_config().current_slide;
          console.log("Index updated: ", scope.state.index);
        });
      };

      iElement.on("click", ".nav-next", function(e) {
        updateState(e);
      });

      iElement.on("click", ".nav-previous", function(e) {
        updateState(e);
      });

      iElement.on("click", ".marker", function(e) {
        updateState(e);
      });

      var bodyElement = angular.element(document.body);
      bodyElement.on("keydown", function(e) {
        // On what keys to update current slide state
        // Might be missing some, touch keys?!?
        // Using object mapping for clarity
        var keys = {33 : "PgUp",
                    34 : "PgDn",
                    37 : "Left",
                    39 : "Right",
                    36 : "Home",
                    35 : "End"};
        var keysProps = Object.getOwnPropertyNames(keys);
        if (keysProps.indexOf(e.keyCode+'') != -1) {
          updateState(e);
        }
      });

    }
  };
});
