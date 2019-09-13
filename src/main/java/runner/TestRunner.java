package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(

		format={"pretty","html:report/html"},
		//tags={"@login"},
		//tags={"@login", "@EnterDetails"},
				tags={"@EnterDetails"},
		features ="src/main/java/featurefile",
		glue="stepdefinitions"

		)

public class TestRunner extends AbstractTestNGCucumberTests{




}
