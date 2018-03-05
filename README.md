
# Flair - ESLint Shareable Config

An Shareable ESLint Config for JavaScript.

## Install

```
npm install eslint-config-flair
```

## Usage

To use the basic rules, extend the basic ruleset from your `.eslintrc` config.

```json
{
  "extends": [
    "flair"
  ]
}
```

Available extensions to use:

* `flair` - basic linting rules
* `flair/es6` - es6 linting rules
* `flair/node` - node linting rules
* `flair/react` - react linting rules
* `flair/browser` - browser linting rules

The rules can be mixed and matched depending on what kind of environment you are about to lint.

**NodeJS linting rules**

```json
{
  "extends": [
    "flair",
    "flair/node"
  ]
}
```

**NodeJS ES6 linting rules**

```json
{
  "extends": [
    "flair",
    "flair/es6",
    "flair/node"
  ]
}
```

**Browser ES6 linting rules**

```json
{
  "extends": [
    "flair",
    "flair/es6",
    "flair/browser"
  ]
}
```

**React ES6 linting rules**

```json
{
  "extends": [
    "flair",
    "flair/es6",
    "flair/react"
  ]
}
```
