$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/CreateAccount.feature");
formatter.feature({
  "name": "Create Account Step",
  "description": "\t\t In order to create a Giving Page with a valid account\n\t\t As a first time fundraiser\n\t\t I need to be able to complete the giving page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify create Account step",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"/registration\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_am_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the cookie message",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_close_the_cookie_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"email\" on \"#email\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Let\u0027s Go\" button on \"#btnNext\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see a \"Are you 18 or over\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_see_a_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Yes\" button on \"button#over.btn\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"First name\" on \"#firstName\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Last name\" on \"#lastName\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Password\" on \"#password\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Create Account\" button on \"button#btnNext.btn\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Now we know who you are, get your Giving Page up and running.\" text in \"p.intro-copy\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_see_text_in_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Choose your unique Giving Page link\" text in \"div.form__field.form__field--intro\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_see_text_in_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Giving page link\" on \"#userUrlGp\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Create Account\" button on \"button#btnNext.btn\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("featureFiles/EnterEmailStep.feature");
formatter.feature({
  "name": "Enter email address step",
  "description": "\t\tAs a Fundraiser\n\t\tI need an email enter step\n\t\tSo that I can start registration journey",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify field validation error messages in enter email step",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"/registration\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_am_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the cookie message",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_close_the_cookie_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Why we need this\" link on \"div.form__row.form__row--just-in-time-block \u003e div\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"We’ll use this email address to create and identify your account. This will help keep your Giving Page secure.\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Let\u0027s Go\" button on \"#btnNext\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Woops! Please enter a valid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"email\" on \"#email\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Let\u0027s Go\" button on \"#btnNext\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Welcome\" step",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_be_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Use a different email address\" link on \"span.intro-copy-extra\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Enter your email address to get started.\" step",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_be_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"email\" on \"#email\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Let\u0027s Go\" button on \"#btnNext\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Welcome\" step",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_be_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Before you set up your Giving Page, we just need a few details so we can create your account.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("featureFiles/O18IndividualRegistration.feature");
formatter.feature({
  "name": "O18 Individual Registration",
  "description": "     As an O18 first time Fundraiser\n     I need to be able to create a giving page\n     So that I can start fundraising through my giving page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create an O18 giving page starting from sportrelief.com without company affiliation",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"/registration\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_am_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the cookie message",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_close_the_cookie_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"email\" on \"#email\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Let\u0027s Go\" button on \"#btnNext\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Welcome\" step",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_be_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"YES\" for over 18 question",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_select_for_over_question(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see \"Please fill in your parent or guardian\u0027s email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_not_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"First name\" on \"#firstName\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Last name\" on \"#lastName\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Password\" on \"#password\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Create Account\" button on \"button#btnNext.btn\" element",
  "keyword": "When "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Now we know who you are, get your Giving Page up and running.\" step",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_should_be_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data in \"Giving page link\" on \"#userUrlGp\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill test data amount in \"Fundraising target\" on \"#userFrTarget\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_fill_test_data_amount_in_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Create Giving Page\" button on \"div.form__field.form__nav.form_nav--next\" element",
  "keyword": "And "
});
formatter.match({
  "location": "ReusableStepDefinitions.i_click_on_button_on_element(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});