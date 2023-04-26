
class Assert
{
	static areEqual(value0, value1)
	{
		if (value0 != value1)
		{
			throw new Error("Expected: equal, but was: not equal.");
		}
	}

	static areNotEqual(value0, value1)
	{
		if (value0 == value1)
		{
			throw new Error("Expected: not equal, but was: equal.");
		}
	}

	static isFalse(booleanToCheck)
	{
		if (booleanToCheck != false)
		{
			throw new Error("Expected: false, but was: " + booleanToCheck + ".");
		}
	}

	static isNotNull(valueToCheck)
	{
		if (valueToCheck != null)
		{
			throw new Error("Expected: not null, but was: null.");
		}
	}

	static isNull(valueToCheck)
	{
		if (valueToCheck != null)
		{
			throw new Error("Expected: null, but was: " + valueToCheck);
		}
	}

	static isTrue(booleanToCheck)
	{
		if (booleanToCheck != true)
		{
			throw new Error("Expected: true, but was: " + booleanToCheck + ".");
		}
	}
}
