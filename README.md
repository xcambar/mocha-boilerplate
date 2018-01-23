# Mocha Boilerplate

Setup a testing environment with [Mocha][], [chai][] and [sinon-chai][] that works in the browser and in Node.js right from the start.

## Installation

> It is recommended to download the latest version of this repository instead of cloning it as you WILL modify its contents at leadt to add tests!

1. [Download][] the latest version of this repository.
2. Copy it to the `test/` (or `tests/` or `specs/`, as you please) directory of your project.
3. Go into that directory: `cd %PROJECT_ROOT%/test`.
4. run `npm install`.

## Directory structure

* `specs/` : Contains all your test files
* `suites/`: Defines sets of specs to run. Useful if you have some tests that can not run on every platform, or if you want to separate your tests in specific concerns.
* `web/`: The necessary files to run your tests in the browser.
* `config.js`: Configures [chai][] and [sinon-chai][]

## Run the tests

###Node.js

Run `mocha suites/` from your `test` directory to run all your tests.

### Browser

1. Edit `web/index.html`.
2. Change the value of the variable `suites` to specify which suites you want to run.
    For example, `var suites = ['all'];` will run the tests of the suite defined in `%MOCHA_BOILERPLATE_ROOT%/suites/all.js`.
3. Open index.html in a browser. `testing-boilerplate` has been made to run your tests both with and without a server.

[Mocha]: http://mochajs.org/
[chai]: http://chaijs.com/
[sinon-chai]: https://github.com/domenic/sinon-chai
[Download]: https://github.com/xcambar/mocha-boilerplate/archive/master.zip

