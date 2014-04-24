'use strict';

angular.module('pippTimelineDirectives', [])
.directive('pippTimelineJS', function () {
  return {
    template: '<div id="results-timeline"></div>',
    restrict: 'E',
    scope: {timelineData: '=sourceData'},
    link: function postLink(scope, iElement, iAttrs) {

      iElement.text('this is the pippTimelineJS directive');

      console.log("timelineData: ", scope.timelineData);
      console.log("scope: ", scope);
      console.log("iElement: ", iElement);
      console.log("iAttrs: ", iAttrs);


      scope.$watch('timelineData', function(newValue, oldValue) {
        console.log("oldValue: ", oldValue);
        console.log("newValue: ", newValue);
        if (newValue==='undefined') {
          return;
        } else {
          createStoryJS({
            type:       'timeline',
            width:      '800',
            height:     '600',
            source:     newValue,
            embed_id:   'results-timeline'
          });
        }
      });

    }
  };
});
