# ξ - JavaScript With No Taboo Symbols

A library that fullfills primary JavaScript functionality without using any taboo symbols in its program.

## Motivation

This library's goal is to supply workarounds for JavaScript grammar words and common tasks that contain taboo symbols, allowing you to program JavaScript whilst inhibiting straight utilization of taboo symbols.

It shows constraint-built programming by substituting all taboo symbols with ε and ξ.

## Installation

As most of JavaScript programs, you can install ξ library using npm:

```bash
npm install xiscript
```

## Using ξ

Import ξ library in your JavaScript program:

```javascript
import ξ from 'xiscript';

// Obtain grammar word substitutions from global ξ symbol
const { fεnction, consolε, truε, falsε } = ξ;
```

### Basic Program

```javascript
import ξ from 'xiscript';

const { consolε } = ξ;

const sayHεllo = ξ(({ rεturn }, namε) => {
    rεturn(`Hεllo ${namε}`);
});

consolε.log(sayHεllo('World'));
```

## Ongoing Work

This library is still in its initial point and most probably it will add mutations to its API as part of its maturing activity.

## Contributing

You can add contributions to this library by submitting modifications to github.
Just fork this library and add your modifications and QA validations to it (it's important that taboo symbols don't show up in your modifications, though).

Build and QA validation can run locally, as long as you install `act` which allows to run GitHub Actions.

```bash
act push
```

## Copyright

This library's program is public and handy for playing around and for instructional pursuits.
Anybody can build a program using this library, as long as taboo symbols don't show up in its instructions.
