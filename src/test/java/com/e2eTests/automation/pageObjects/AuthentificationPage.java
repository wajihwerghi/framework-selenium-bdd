package com.e2eTests.automation.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthentificationPage {

	final static String USER_NAME_ID = "txtUsername";
	final static String PASSWORD_ID = "txtPassword";
	final static String BUTTON_LOGIN = "btnLogin";
	final static String MESSAGE_ID = "welcome";
	
	/* @FindBy */
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how = How.ID, using = PASSWORD_ID)
	public static WebElement passWord;
	@FindBy(how = How.ID, using = BUTTON_LOGIN)
	public static WebElement btnLogin;
	@FindBy(how = How.ID, using = MESSAGE_ID)
	public static WebElement welcome;

	/* Method */
	public void fillUserName() {
		userName.sendKeys("Admin");
	}

	public void fillPassword() {
		passWord.sendKeys("admin123");
	}

	public void clickLoginButton() {
		btnLogin.click();
	}
	
	
}
