TestFramework
=============

An automated test framework in JavaScript.

<img src="Screenshot.png" />


Suggested Usage
---------------

One way in which the framework might be used is described below.

1. Add it as a submodule of an existing Git repository, perhaps by running
the command "git submodule add https://github.com/thiscouldbebetter/TestFramework".
This command is expected to be run from within a top-level subdirectory
of the parent Git repository named "Source".

2. Copy the Tests.html from the Stub directory and paste a copy outside
the root TestFramework directory but inside the parent repository.  The
file is intended to be pasted into a top-level subdirectory named Tests
of the parent Git repository.  If not, some of the script elements for
the framework's classes will need to have their src attributes adjusted
accordingly.

3. Open Tests.html in a text editor.

4. Add "script" elements corresponding to the classes of the system under test.

5. Still in the .html, in the call to the TestSuite constructor, replace
the example test fixtures and tests with custom tests.

6. Open the .html file in a web browser that runs JavaScript.

7. Verify that all tests pass.
