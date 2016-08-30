
# Ardentic Flair - ESLint Shareable Config

An ESLint Shareable Config for Ardentic's JavaScript Coding Standard.

## Install

```
npm install @ardentic/eslint-config-flair
```

## Usage

To use the basic rules, extend the basic ruleset from your `.eslintrc` config.

```json
{
  "extends": [
    "@ardentic/flair"
  ]
}
```

Available extensions to use:

* `@ardentic/flair` - basic linting rules
* `@ardentic/flair/es6` - es6 linting rules
* `@ardentic/flair/node` - node linting rules
* `@ardentic/flair/browser` - browser linting rules

The rules can be mixed and matched depending on what kind of environment you are about to lint.

**NodeJS linting rules**

```json
{
  "extends": [
    "@ardentic/flair"
    "@ardentic/flair/node"
  ]
}
```

**NodeJS ES6 linting rules**

```json
{
  "extends": [
    "@ardentic/flair"
    "@ardentic/flair/es6"
    "@ardentic/flair/node"
  ]
}
```

**Browser ES6 linting rules**

```json
{
  "extends": [
    "@ardentic/flair"
    "@ardentic/flair/es6"
    "@ardentic/flair/browser"
  ]
}
```
