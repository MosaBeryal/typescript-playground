
# TypeScript

TypeScript is a superset of JavaScript, enhancing it with additional features. It is a statically typed language, requiring the explicit declaration of variable types, resulting in less error-prone and more maintainable code.

## Installation

1. **Install Node.js and npm:**
   - Download and install from [Node.js official website](https://nodejs.org/).

2. **Install TypeScript globally:**
   ```bash
   npm install -g typescript
   ```

3. **Create a new TypeScript project:**
   - Create a directory for your project and initialize it.
   ```bash
   mkdir mytypescriptproject
   cd mytypescriptproject
   npm init -y
   ```

4. **Install TypeScript locally:**
   ```bash
   npm install typescript --save-dev
   ```

5. **Generate `tsconfig.json`:**
   ```bash
   npx tsc --init
   ```

## Type Safety

TypeScript brings type safety to avoid unexpected behavior in your code.

### Type Checking

- **Static Typing:**
  - Requires explicit type declarations for variables.
  - Example:
    ```typescript
    let myNumber: number = 10;
    let myString: string = "Hello";
    let myBoolean: boolean = true;
    ```

- **Type Inference:**
  - TypeScript infers types based on the assigned values.
  - Example:
    ```typescript
    let myNumber = 10; // TypeScript infers 'myNumber' as number
    ```

### Interfaces and Generics

- **Interfaces:**
  - Define the structure of an object.
  - Example:
    ```typescript
    interface Person {
      name: string;
      age: number;
    }
    ```

- **Generics:**
  - Write flexible and reusable functions and classes.
  - Example:
    ```typescript
    function identity<T>(arg: T): T {
      return arg;
    }
    ```

## Compiling and Running

1. **Compile TypeScript code:**
   ```bash
   npx tsc
   ```

2. **Run the application:**
   ```bash
   node dist/app.js
   ```

## Advanced Features

- **Module System:**
  - Organize code into modules using `import` and `export`.

- **Decorators:**
  - Add metadata and modify classes or class members.

- **Enums:**
  - Define a set of named constants.

- **Async/Await:**
  - Simplify asynchronous code using `async` and `await`.

---

Feel free to customize and expand on this markdown file based on your specific needs and project requirements. Save this as a `README.md` in your GitHub repository for easy reference.


 - Object Types which is used to describe the properties and methods of an object.

 - Object Types
   -
   -
   -
   -
   -
   -
