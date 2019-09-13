$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Registration page",
  "description": "",
  "id": "registration-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "user enter the personal details",
  "description": "",
  "id": "registration-page;user-enter-the-personal-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@EnterDetails"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"\u003cfname\u003e\" and \"\u003clname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "registration-page;user-enter-the-personal-details;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname"
      ],
      "line": 17,
      "id": "registration-page;user-enter-the-personal-details;;1"
    },
    {
      "cells": [
        "ravi",
        "123CC"
      ],
      "line": 18,
      "id": "registration-page;user-enter-the-personal-details;;2"
    },
    {
      "cells": [
        "shankar",
        "456"
      ],
      "line": 19,
      "id": "registration-page;user-enter-the-personal-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "user enter the personal details",
  "description": "",
  "id": "registration-page;user-enter-the-personal-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@EnterDetails"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"ravi\" and \"123CC\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.registrationpage()"
});
formatter.result({
  "duration": 11001523475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi",
      "offset": 16
    },
    {
      "val": "123CC",
      "offset": 27
    }
  ],
  "location": "stepdefinitions.registationpage(String,String)"
});
formatter.result({
  "duration": 1162443853,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.submit()"
});
formatter.result({
  "duration": 2092177599,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user enter the personal details",
  "description": "",
  "id": "registration-page;user-enter-the-personal-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@EnterDetails"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"shankar\" and \"456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.registrationpage()"
});
formatter.result({
  "duration": 25770989677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shankar",
      "offset": 16
    },
    {
      "val": "456",
      "offset": 30
    }
  ],
  "location": "stepdefinitions.registationpage(String,String)"
});
formatter.result({
  "duration": 1070882600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.submit()"
});
formatter.result({
  "duration": 2085958267,
  "status": "passed"
});
});