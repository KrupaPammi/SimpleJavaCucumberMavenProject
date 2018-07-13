package stepDefinitions;


import java.util.Locale;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.github.javafaker.Faker;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.HelperClass;

public class ReusableStepDefinitions extends HelperClass { 
	
	Faker faker = new Faker(Locale.UK);
	
	@Given("^I am on \"([^\"]*)\"$")
	public void i_am_on(String pageUrl) throws Exception {
	    driver.get(baseUrl +pageUrl);
	    Thread.sleep(5000);
	}
	
	@When("^I fill test data in \"([^\"]*)\" on \"([^\"]*)\" element$")
	public void i_fill_test_data_in_on_element(String word, String locator) throws Exception {
		if(word.equals("email")) {
			word = getRandomEmail();
	    driver.findElement(By.cssSelector(locator)).sendKeys(word);
		}
		else{
			driver.findElement(By.cssSelector(locator)).sendKeys((getRandomWord()));
		}
		
	    Thread.sleep(2000);
	}

	@Then("^I click on \"([^\"]*)\" (?:button|link) on \"([^\"]*)\" element$")
	public void i_click_on_button_on_element(String buttonText, String locator) throws Exception {
		 driver.findElement(By.cssSelector(locator)).click();
			Thread.sleep(2000);
	}
	
	@Then("^I see a \"([^\"]*)\" message$")
	public void i_see_a_message(String text) throws Exception {
		String actualString = driver.findElement(By.cssSelector("h2.form__subtitle")).getText();
		Assert.assertTrue(actualString.contains("Are you 18 or over?"));
		Thread.sleep(3000);
	}
	
	@Then("^I close the cookie message$")
	public void i_close_the_cookie_message() throws Exception {
		driver.findElement(By.cssSelector("a.cc_button")).click(); 
	}
	
	@Then("^I should see \"([^\"]*)\" text in \"([^\"]*)\" element$")
	public void i_should_see_text_in_element(String expectedText, String locator) throws Exception {
	    String actualText = driver.findElement(By.cssSelector(locator)).getText();
	    Assert.assertEquals(actualText, expectedText);
	}
	
	@Then("^I see \"([^\"]*)\" text in \"([^\"]*)\" element$")
	public void i_see_text_in_element(String expected, String locator) throws Exception {
	    String actual = driver.findElement(By.cssSelector(locator)).getText();
	    Assert.assertEquals(actual, expected);
	}
	
	@Given("^I am an over (\\d+) fundraiser without an account$")
	public void i_am_an_over_fundraiser_without_an_account(int arg1) throws Exception {
	    String email = getRandomEmail();
	    driver.findElement(By.cssSelector("#email")).sendKeys(email);
	}

	@Given("^I wait for (\\d+)$")
	public void i_wait_for(int time) throws Exception {
	    Thread.sleep(time);
	}
	
	@Given("^I should see \"([^\"]*)\" text$")
	public void i_should_see_text(String locator) throws Exception {
		String actual = driver.findElement(By.cssSelector("#login-credential > div.form__group.form__group--jit_msg_block__email > div.form__row.form__row--just-in-time-block.centered > div > div > div > p")).getText();
		Assert.assertTrue(actual.contains("We’ll use this email address to create and identify your account. This will help keep your Giving Page secure."));
	}
	
	@Then("^I should be in \"([^\"]*)\" step$")
	public void i_should_be_in_step(String text) throws Exception {
		driver.getPageSource().contains(text);
	}
	
	@Then("^I should see \"([^\"]*)\"$")
	public void i_should_see(String text) throws Exception {
	    driver.getPageSource().contains(text);
	}

	@When("^I select \"([^\"]*)\" for over (\\d+) question$")
	public void i_select_for_over_question(String arg1, int arg2) throws Exception {
	    driver.findElement(By.cssSelector("#over")).click();
	}

	@Then("^I should not see \"([^\"]*)\"$")
	public void i_should_not_see(String text) throws Exception {
	    if(!driver.getPageSource().contains(text));
	}
	
	@Then("^I fill test data amount in \"([^\"]*)\" on \"([^\"]*)\" element$")
	public void i_fill_test_data_amount_in_on_element(String arg1, String locator) throws Exception {
		driver.findElement(By.cssSelector(locator)).sendKeys((getRandomNumber()));
	}

}




