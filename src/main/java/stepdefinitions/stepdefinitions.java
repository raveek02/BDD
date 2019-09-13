package stepdefinitions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.aventstack.extentreports.ExtentReports;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class stepdefinitions {
	WebDriver driver;
	
	
	@Given ("^user lanuch the url$")
	public void loginpage()
	{

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HEMANTH RK\\Desktop\\automationsoftware\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.get("http://demo.automationtesting.in");
		

	}


	@When ("^user click skip signin$")
	public void skipsignin()
	{

		driver.findElement(By.xpath("//button[(text()='Skip Sign In')]")).click();

	}


	@Then ("^Registration page to be displayed$")
	public void regpage()
	{
		System.out.println("the page title is" + driver.getCurrentUrl());
		driver.close();
		
	}

	@Given ("^launch the url$")
	public void registrationpage()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HEMANTH RK\\Desktop\\automationsoftware\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.get("http://demo.automationtesting.in/Register.html");
	}
	
	

	@When("^user enter the \"(.*)\" and \"(.*)\"$")
	public void registationpage(String fname, String lname) throws IOException
	{
		driver.findElement(By.xpath("//input[@type='text' and @placeholder='First Name']")).sendKeys(fname);
		this.screenshot("firstname.png");
		driver.findElement(By.xpath("//input[@type='text' and @placeholder='Last Name']")).sendKeys(lname);
		this.screenshot("lastname.png");
	}
	
	
	@Then ("^user click submit button$")
	public void submit()
	{
		driver.close();
		
	}
	
	
	
	public void screenshot (String fileWithPath) throws IOException
	{
		TakesScreenshot scrShot = ((TakesScreenshot)driver);
		
		// call get screen shot as method to create image file
		
		File Srcfile = scrShot.getScreenshotAs(OutputType.FILE);
		
		//Move image file to new destination
		
		File DestFile = new File ("C:\\Users\\HEMANTH RK\\Desktop\\Screenshotimages\\" +fileWithPath);
		
		// copy file at destination
		
		FileUtils.copyFile(Srcfile,DestFile);
		
	}



}
