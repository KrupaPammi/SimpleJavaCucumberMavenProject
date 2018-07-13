package utils;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.After;
import cucumber.api.java.Before;

public class OpenCloseBrowser extends Webconnector{ 
	
	
	@Before
	public void openBrowser() 
	{
		if(browserType.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "../SimpleJavaCucumberMavenProject/src/test/java/resources/chromedriver");
			driver = new ChromeDriver(); 
		} else if(browserType.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "../SimpleJavaCucumberMavenProject/src/test/java/resources/geckodriver");
			driver = new FirefoxDriver();
		} else {
			System.out.println("Please give browser type");
		}
		
		driver.manage().window().maximize();
	}
	
	@After
	public void closeBrowser() {
		driver.close();
	}

}
