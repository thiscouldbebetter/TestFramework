
class TestSuite
{
	constructor(name, fixtures)
	{
		this.name = name;
		this.fixtures = fixtures;
	}

	run()
	{
		var message =
			"About to run test suite '" + this.name
			+ "', containing " + this.fixtures.length + " fixtures...";
		this.write(message);

		this.fixtures.forEach(x => x.run() );

		var message =
			"...done running test suite '" + this.name + ".";
		this.write(message);

	}

	write(message)
	{
		document.write(message + "<br />");
	}
}
