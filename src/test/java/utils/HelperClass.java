package utils;


import org.apache.commons.lang3.RandomStringUtils;

public class HelperClass extends Webconnector {
	
	public String getRandomEmail() {
		return RandomStringUtils.randomAlphanumeric(10) +"@comicrelieftest.com";
	}

	public String getRandomWord() {
		return RandomStringUtils.randomAlphabetic(10) + "-test";
	}
	
	public String getRandomNumber() {
		return RandomStringUtils.randomNumeric(3);
	}
	
	
}
