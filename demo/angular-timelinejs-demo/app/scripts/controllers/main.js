'use strict';

angular.module('angularTimelinejsDemoApp')
.controller('MainCtrl', function ($scope, $interval) {

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var data1 = {
    "timeline":
    {
      "headline":"Vanuatu Budget Timeline",
      "type":"default",
      "text":"<p>The budget-making process goes on year-round, with numerous important activities coming together to build this important document...</p>",
      "date": [
        {
          "startDate":"2014,04,15",
          "endDate":"2014,04,26",
          "headline":"Budget Policy Statement",
          "text":"<p>Budget Policy Statement is submitted to Minister and Director General of Finance and then published." +
          " <em>The release of this document should give an insight into the government’s key priorities for the coming year.</em></p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,04,29",
          "endDate":"2014,04,29",
          "headline":"Donor Consultations",
          "text":"<p>Government officials meet with donors to confer on policy priorities, providing an opportunity to align and better coordinate their work." +
          " A dialogue between the government and donors should begin to align priorities. In practice this process does not take place.</p>",
          "tag":"Donors"
        },
        {
          "startDate":"2014,05,13",
          "endDate":"2014,05,17",
          "headline":"Ministry Ceilings Established",
          "text":"<p>2014 Ministry budget ceilings are approved by the Ministerial Budget Committee and then the Council Of Ministers." +
          " In practice Vanuatu sees little movement in budget ceilings.</p>" +
          "<p>Using the established budget ceilings individual ministries submit their preliminary budget submissions to the ministry of finance " +
          "They also consider whether they wish to bid for <a href='/#/budget/vu/npps/2014'>New Policy Proposals</a>" +
          " - new pots of money to fund ministerial programs and initiatives.</p>",
          "tag":"Council of Ministers"
        },
        {
          "startDate":"2014,6,28",
          "endDate":"2014,6,28",
          "headline":"Ministry Budget Submissions",
          "text":"<p>Ministers and directors general submit 2014 budget submissions to department of finance." +
          " <em>This is the deadline for submission of full ministerial budgets and suggestions for New Policy Proposals.</em></p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,6,28",
          "endDate":"2014,6,28",
          "headline":"Expenditure Report Regulation 2.1",
          "text":"<p>It is a regulatory requirement that the Vanuatu government makes an assessment of budget performance and that " +
          "ministries and constitutional agencies are adhering to financial regulations." +
          "The director general of the ministry of finance and economic management submits this report to the public service commission.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,07,31",
          "endDate":"2014,07,31",
          "headline":"HALF YEAR ECONOMIC AND FISCAL UPDATE",
          "text":"<p>The department of finance publishes its updated budget position, adjusting the current year's budget as necessary in order to " +
          " reflect progress during the first six months of the year." +
          " This is an assessment of the economy and budget is performing over the first half of the year. " +
          "Essentially, this is a way of making sure things are on track for the current budget.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,08,19",
          "endDate":"2014,08,23",
          "headline":"Donor Consultations",
          "text":"<p>Government and donors meet again to finalise their spending plans for the coming year." +
          "Donors respond to the government with projects they are willing to fund which match the government’s policy priorities. " +
          "Again this process often does not take place as planned.</p>",
          "tag":"Donors"
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Ministerial Budget Committee Hearings",
          "text": "<p>Ministerial Budget Committee (or MBC) hearings are when each individual constitutional agency and ministry have the opportunity " +
          "to present their budgets for the following year to MBC members and make their cases for extra funding. " +
          "Following the presentation MBC members question them.</p>" +
          "<p>The Ministerial Budget Committee then meets to consider the final draft of the budget estimates for 2015.</p>" +
          " <p>While aiming for a fiscally prudent budget (often for a balanced one in Vanuatu's case), " +
          " the MBC begins discussions of those <a href='/#/budget/vu/npps/2014'>New Policy Proposals</a> to be undertaken in next year’s budget.</p>",
          "tag":"Council of Ministers"
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Submission to Council of Ministers",
          "text":"<p>The finalised 2015 budget is submitted to the Council of Ministers</p>" +
          " The chairman of the Ministerial Budget Committee asks the rest of the Council of Ministers to approve proposed budget.</p>",
          "tag":"Council of Ministers"
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Appropriation Bill Drafted",
          "text":"<p>The budget is passed to the State Law Office in order that the 2015 Appropriation Bill can be prepared.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,09,2",
          "endDate":"2014,09,2",
          "headline":"Bill passed to MPs",
          "text":"<p>The finished 2015 Appropriation Bill is circulated to members of parliament. " +
          " Ministers and members of parliament are given a month to scrutinise the numbers.</p>",
          "tag":"Parliament"
        },
        {
          "startDate":"2014,09,23",
          "endDate":"2014,10,2",
          "headline":"Budget Books Prepared",
          "text":"<p>The budget books, which explain in detail the financial plans of the government, are prepared in both French and English. " +
          " The three volumes include the <a href='/#/budget/vu/2014/at-a-glance'>fiscal strategy report</a>, " +
          " a detailed list of <a href='/#/budget/vu/2014/'>budget appropriations/estimates</a>, and the budget narrative.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,10,14",
          "endDate":"2014,10,18",
          "headline":"Budget Books Distributed",
          "text":"<p>The printed budget books are circulated to members of parliament." +
          " This provides ample time for members to scrutinise the documents before the next parliamentary session begins.</p>",
          "tag":"Parliament"
        },
        {
          "startDate":"2014,12,2",
          "endDate":"2014,12,15",
          "headline":"Parliament Sits",
          "text":"<p>Parliamentary debate and scrutiny over the budget takes place before the appropriation bills are voted into law.",
          "tag":"Parliament"
        }
      ],
      "era": [
        {
          "startDate":"2014,1,1",
          "endDate":"2014,12,31",
          "headline":"Vanuatu's financial year is the same as the calendar year",
          "tag":"FINANCIAL YEAR"
        }
      ]
    }
  };

  var data2 = {
    "timeline":
    {
      "headline":"Vanuatu Budget Timeline",
      "type":"default",
      "text":"<p>The budget-making process goes on year-round, with numerous important activities coming together to build this important document...</p>",
      "date": [
        {
          "startDate":"2014,04,15",
          "endDate":"2014,04,26",
          "headline":"Budget Policy Statement",
          "text":"<p>Budget Policy Statement is submitted to Minister and Director General of Finance and then published." +
          " <em>The release of this document should give an insight into the government’s key priorities for the coming year.</em></p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,6,28",
          "endDate":"2014,6,28",
          "headline":"Expenditure Report Regulation 2.1",
          "text":"<p>It is a regulatory requirement that the Vanuatu government makes an assessment of budget performance and that " +
          "ministries and constitutional agencies are adhering to financial regulations." +
          "The director general of the ministry of finance and economic management submits this report to the public service commission.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,07,31",
          "endDate":"2014,07,31",
          "headline":"HALF YEAR ECONOMIC AND FISCAL UPDATE",
          "text":"<p>The department of finance publishes its updated budget position, adjusting the current year's budget as necessary in order to " +
          " reflect progress during the first six months of the year." +
          " This is an assessment of the economy and budget is performing over the first half of the year. " +
          "Essentially, this is a way of making sure things are on track for the current budget.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Ministerial Budget Committee Hearings",
          "text": "<p>Ministerial Budget Committee (or MBC) hearings are when each individual constitutional agency and ministry have the opportunity " +
          "to present their budgets for the following year to MBC members and make their cases for extra funding. " +
          "Following the presentation MBC members question them.</p>" +
          "<p>The Ministerial Budget Committee then meets to consider the final draft of the budget estimates for 2015.</p>" +
          " <p>While aiming for a fiscally prudent budget (often for a balanced one in Vanuatu's case), " +
          " the MBC begins discussions of those <a href='/#/budget/vu/npps/2014'>New Policy Proposals</a> to be undertaken in next year’s budget.</p>",
          "tag":"Council of Ministers"
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Submission to Council of Ministers",
          "text":"<p>The finalised 2015 budget is submitted to the Council of Ministers</p>" +
          " The chairman of the Ministerial Budget Committee asks the rest of the Council of Ministers to approve proposed budget.</p>",
          "tag":"Council of Ministers"
        },
        {
          "startDate":"2014,08,26",
          "endDate":"2014,08,30",
          "headline":"Appropriation Bill Drafted",
          "text":"<p>The budget is passed to the State Law Office in order that the 2015 Appropriation Bill can be prepared.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,09,2",
          "endDate":"2014,09,2",
          "headline":"Bill passed to MPs",
          "text":"<p>The finished 2015 Appropriation Bill is circulated to members of parliament. " +
          " Ministers and members of parliament are given a month to scrutinise the numbers.</p>",
          "tag":"Parliament"
        },
        {
          "startDate":"2014,09,23",
          "endDate":"2014,10,2",
          "headline":"Budget Books Prepared",
          "text":"<p>The budget books, which explain in detail the financial plans of the government, are prepared in both French and English. " +
          " The three volumes include the <a href='/#/budget/vu/2014/at-a-glance'>fiscal strategy report</a>, " +
          " a detailed list of <a href='/#/budget/vu/2014/'>budget appropriations/estimates</a>, and the budget narrative.</p>",
          "tag":"Finance Dept."
        },
        {
          "startDate":"2014,10,14",
          "endDate":"2014,10,18",
          "headline":"Budget Books Distributed",
          "text":"<p>The printed budget books are circulated to members of parliament." +
          " This provides ample time for members to scrutinise the documents before the next parliamentary session begins.</p>",
          "tag":"Parliament"
        },
        {
          "startDate":"2014,12,2",
          "endDate":"2014,12,15",
          "headline":"Parliament Sits",
          "text":"<p>Parliamentary debate and scrutiny over the budget takes place before the appropriation bills are voted into law.",
          "tag":"Parliament"
        }
      ],
      "era": [
        {
          "startDate":"2014,1,1",
          "endDate":"2014,12,31",
          "headline":"Vanuatu's financial year is the same as the calendar year",
          "tag":"FINANCIAL YEAR"
        }
      ]
    }
  };

  $scope.timelineValues = {index: 0};

  // Static model source data
  $scope.data = data1;

  // ---------- or -------------- //

  // Dynamic source data
//   $scope.data = null;
//   var choice = data1;
//   var updateModel = function() {
//     if (choice==data1) {
//       $scope.data = data2;
//       choice = data2;
//     } else {
//       $scope.data = data1;
//       choice = data1;
//     }
//     console.log("data: ", $scope.data);
//   };

//   var stopUpdating = $interval(updateModel, 10000);

//   $scope.$on('$destroy', function() {
//     // Make sure that the interval is destroyed too
//     $interval.cancel(stopUpdating);
//   });

//   /**
//    * Simple function to show timelineValues.index has dual binding with timeline
//    * directive state tracking
//    */
//   function show () {
//     console.log("Index from controller: ", $scope.timelineValues.index);
//   }

//   var stopShowing = $interval(show, 5000);

//   $scope.$on('$destroy', function() {
//     // Make sure that the interval is destroyed too
//     $interval.cancel(stopShowing);
//   });

//   /**
//    * Simple function to force a slide change from the controller
//    */
//   function changeSlide () {
//     var random = Math.floor(Math.random() * ($scope.data.timeline['date'].length)) + 1;
//     console.log("Changing slide: ", random);
//     $scope.timelineValues['index'] = random;
//   }

//   var stopChanging = $interval(changeSlide, 10000);

//   $scope.$on('$destroy', function() {
//     // Make sure that the interval is destroyed too
//     $interval.cancel(stopChanging);
//   });

});
