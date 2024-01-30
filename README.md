# Hopper

Embeddable JS engine supporting a sane JS subset while enabling go interoperability

## Features

- high performance
- uncomplicated embedding into go applications
- go interoperability (call go functions, access go structures)
- promote clean, correct and minimalist JS code
- minimal standard library (modeled after a mixture of the node.js and go standard library)
- understandable, documented and easily extensible code base

## Non-Features

- inheritance, object oriented programming
- JavaScript quirks:
    - type coercion (runtime errors instead of attempting to perform type casts)
    - comparison with `==` results in a parser error
    - scoping with `var` disallowed, will result in a parser error
- compatibility with ECMA-262

## Motivation

JavaScript is a commonly used and easily learned language. To benefit of its
large adoption this project seeks to encourage application developers to embed
a sane JavaScript subset into their applications, thus making them scriptable.

## Name origin

The hopper engine is named after the creator of the first ever compiler
implementing the COBOL language: Grace Hopper.
