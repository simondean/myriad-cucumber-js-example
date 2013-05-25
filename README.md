# myriad-cucumber-js-example

Example of how to use myriad-cucumber to execute cucumber-js tests in
parallel across multiple processes or machines.

## Usage

### Install

Install the codebase's dependencies with:

``` shell
$ npm install --dev
```

### Run

The tests are executed by running the following commands in three separate terminals:

``` shell
$ node_modules/.bin/myriad-server
```

``` shell
$ node example-api-under-test
```

``` shell
$ node_modules/.bin/myriad-cucumber --workers 4 --myriad-server http://localhost:7777
```
