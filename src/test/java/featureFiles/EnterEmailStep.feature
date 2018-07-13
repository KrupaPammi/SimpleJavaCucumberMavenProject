Feature: Enter email address step
		As a Fundraiser
		I need an email enter step
		So that I can start registration journey
		
 Scenario: Verify field validation error messages in enter email step
   Given I am on "/registration"
   And I close the cookie message
   When I click on "Why we need this" link on "div.form__row.form__row--just-in-time-block > div" element
   Then I should see "We’ll use this email address to create and identify your account. This will help keep your Giving Page secure." text
   When I click on "Let's Go" button on "#btnNext" element
   Then I should see "Woops! Please enter a valid email address."
   When I fill test data in "email" on "#email" element
   Then I click on "Let's Go" button on "#btnNext" element
   Then I should be in "Welcome" step
   When I click on "Use a different email address" link on "span.intro-copy-extra" element
   Then I should be in "Enter your email address to get started." step
   And I fill test data in "email" on "#email" element
   Then I click on "Let's Go" button on "#btnNext" element
   Then I should be in "Welcome" step
   And I should see "Before you set up your Giving Page, we just need a few details so we can create your account."