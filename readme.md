# parse-columns-cli [![Build Status](https://travis-ci.org/sindresorhus/parse-columns-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/parse-columns-cli)

> Parse text columns, like the output of unix commands. Returns JSON that you can manipulate with tools like [jq](https://github.com/stedolan/jq) or [underscore-cli](https://github.com/ddopson/underscore-cli).


## Install

```
$ npm install --global parse-columns-cli
```


## Usage

```
$ parse-columns --help

  Usage
    $ parse-columns <string>
    $ echo <string> | parse-columns

  Example
    $ lsof -i | parse-columns | underscore --outfmt=text pluck NAME
    *:*
    *:62886
    *:*
    localhost:9050 (LISTEN)
```


## Related

- [parse-columns](https://github.com/sindresorhus/parse-columns) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
