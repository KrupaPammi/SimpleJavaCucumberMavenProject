Feature: Create Account Step
		 In order to create a Giving Page with a valid account
		 As a first time fundraiser
		 I need to be able to complete the giving page
	     
	
  Scenario: Verify create Account step
    Given I am on "/registration"
    And I close the cookie message
    And I fill test data in "email" on "#email" element
    When I click on "Let's Go" button on "#btnNext" element
    Then I see a "Are you 18 or over" message
    When I click on "Yes" button on "button#over.btn" element
    And I fill test data in "First name" on "#firstName" element 
    And I fill test data in "Last name" on "#lastName" element 
    And I fill test data in "Password" on "#password" element 
    When I click on "Create Account" button on "button#btnNext.btn" element
    Then I should see "Now we know who you are, get your Giving Page up and running." text in "p.intro-copy" element 
    And I see "Choose your unique Giving Page link" text in "div.form__field.form__field--intro" element
    
    And I fill test data in "Giving page link" on "#userUrlGp" element
    When I click on "Create Account" button on "button#btnNext.btn" element
    
  
    