angular-timelinejs
==================

Angular directive wrapping TimelineJS.

Installation
------------

To use the angular-timelinejs directive you can simply install it using Bower:

```
$ bower install angular-timelinejs
```

and make sure you inject it in your application:

```javascript
angular.module('myModule', ['pippTimelineJS']);
```

Requirements
------------

These requirements are to work *on* the directive (see Contributing below) and not the requirements to *use* the directive (see Installation above).

* NodeJS - Used to run test, deploy distributables, run development web server
* npm - Manage Javascript packages on the server (i.e. development machine)
* Grunt - Automated grunt work (testing, deploying, running web server...)
* Bower - Manage packages on the frontend
* Karma - Run tests

All those should be installed if you need to do work on the directive itself; it is not needed if you simply desire to use the directive as it is offered.

General Notes
-------------

The pipp prefix on directive names is the namespace portion as this was initially developed within a project at the Pacific Insitute of Public Policy (PiPP).

Support
-------

Only bugs and feature request should be included in Github's Issues.

Contributing
------------

Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Include at least basic tests for your work
4. Ensure all tests still passes
5. Add a example usage in the demo
6. Create a pull request (PR)

We won't guarranty that we will merge all PRs but we will evaluate them all.

Licence
-------

See LICENSE.
