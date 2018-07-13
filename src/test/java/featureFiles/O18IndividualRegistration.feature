Feature: O18 Individual Registration
     As an O18 first time Fundraiser
     I need to be able to create a giving page
     So that I can start fundraising through my giving page
     
 Scenario: Create an O18 giving page starting from sportrelief.com without company affiliation
 	 Given I am on "/registration"
 	 And I close the cookie message
     When I fill test data in "email" on "#email" element
     And I click on "Let's Go" button on "#btnNext" element
     Then I should be in "Welcome" step
     
     When I select "YES" for over 18 question
     Then I should not see "Please fill in your parent or guardian's email address" 
     And I fill test data in "First name" on "#firstName" element 
     And I fill test data in "Last name" on "#lastName" element 
     And I fill test data in "Password" on "#password" element 
     When I click on "Create Account" button on "button#btnNext.btn" element
     Then I should be in "Now we know who you are, get your Giving Page up and running." step
     And I fill test data in "Giving page link" on "#userUrlGp" element
     And I fill test data amount in "Fundraising target" on "#userFrTarget" element
     And I click on "Create Giving Page" button on "div.form__field.form__nav.form_nav--next" element