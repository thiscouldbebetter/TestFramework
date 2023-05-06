
class Assert
{
	static areEqual(valueExpected, valueActual)
	{
		if (valueActual != valueExpected)
		{
			throw new Error("Expected: " + valueExpected + ", but was: " + valueActual + ".");
		}
	}

	static areNotEqual(valueExpected, valueActual)
	{
		if (valueActual == valueExpected)
		{
			throw new Error("Expected: not equal, but was: equal.");
		}
	}

	static areStringsEqual(stringExpected, stringActual)
	{
		if (stringActual != stringExpected)
		{
			var i = 0;
			while (stringActual[i] == stringExpected[i])
			{
				i++;
			}
			throw new Error("Strings are not equal, starting at index: " + i + ".");
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
