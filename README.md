# Understanding Typescript

This is a basic project to study typescript.

## Starting project

To start the playground project please run below command.

1. Install project requirements.

```bash
npm install
```

2. Start project on localhost:3000

```bash
npm start
```

## Installing typescript to your local

To install the typescript please run below command. It will install typescript globally to your machine.

```bash
npm install -g typescript
```

If you don't have node js on your local machine first install node js from below link.

```bash
https://nodejs.org/de/download/
```

## Compiling Typescript

To compile your typescript files please run with below command.

```typescript
tsc filename.js
```

## Output of the typescript

As you can see we have 2 folders in the project which are src and dist.

**src** folder contains our ts file and **dist** folder contains our output js files.

## Core datatypes

![core-types](assests/core-types.png)

### Union type, Literal type and Aliases

See examples in the union-alias-literal.ts

### Functions

See examples in the functions.ts

### Unknown type and never type

See examples in the unknown-never.ts

## Typescript Compile

### Recompile automatically with watch command

Run your typescript command with `--watch` or `-w` keyword to compile every changes in your ts file.

Instead of

```bash
tsc app.ts
```

run

```bash
tsc app.ts -w
```

### Recompile automatically whole project

Create tsconfig.json file with below command.

```bash
tsc --init
```

After creation of tsconfig file you can run below command to compile all ts files in your project even with `watch` feature.

```bash
tsc -w
```
