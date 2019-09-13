Feature: Registration page
@login
Scenario: To login page
Given user lanuch the url
When user click skip signin 
Then Registration page to be displayed

@EnterDetails
Scenario Outline: user enter the personal details
Given launch the url
When user enter the "<fname>" and "<lname>"
Then user click submit button


Examples:

|fname	|lname|
|ravi	|123CC|
|shankar|456  |
