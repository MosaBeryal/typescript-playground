// Unions
function sum(a: number | string, b: number | string): void {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Arguments must be numbers or strings");
  }
}
sum("1", "444");

// Type Annotation and Assignment
let num: number;
num = 1;
console.log(num);

// Type Aliases
type Combinable = (a: number, b: number) => number | (a: string, b: string) => string;
const combinator: Combinable = (a, b) => a + b;

const resultString: string = combinator("1", "2") as string;
console.log(resultString);

const resultNumber: number = combinator(1, 2) as number;
console.log(resultNumber);

// Objects
const student: {
  name: string;
  age: number;
  city: string;
} = {
  name: "John Doe",
  age: 2,
  city: "New York",
};
console.log(student.name);

// Arrays
const names: string[] = ["John", "Jane", "Bob"];
const numbers: number[] = [1, 2, 3];
const arr: any[] = [1, "2", true];

// Tuples
const person: [string, number, boolean] = ["John", 2, true];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

// Functions
function add(a: number, b: number): number {
  return a + b;
}
const summation = add(1, 2);
console.log(summation);

// Classes
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const john = new Person("John Doe", 30);
john.greet();

// Interfaces
interface PersonInterface {
  name: string;
  age: number;
  greet(): void;
}

// Union Type
let id: string | number;
id = 123;
id = "123";

// Literals
let literalId: "123" | "456";
literalId = "123";
literalId = "456";

// Type Guards
function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Type Assertion
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Optional and Default Parameters
function greetPerson(name: string, greeting?: string): void {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
greetPerson("John");
greetPerson("Jane", "Good morning");

// Rest Parameters
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
const total = sumNumbers(1, 2, 3, 4, 5);
console.log(total);

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 10, y: 20 };

// Classes with Access Modifiers
class Car {
  private speed: number;

  constructor() {
    this.speed = 0;
  }

  accelerate(amount: number): void {
    this.speed += amount;
  }
}
const car = new Car();

// Interface Inheritance
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}
const circle: Circle = { color: "red", radius: 10 };

// Intersection Types
type Worker = {
  name: string;
  work(): void;
};

type Singer = {
  sing(): void;
};

type Performer = Worker & Singer;
const performer: Performer = {
  name: "Alice",
  work() {
    console.log("Working...");
  },
  sing() {
    console.log("Singing...");
  },
};

// Generics
function identity<T>(arg: T): T {
  return arg;
}
const result = identity("Hello, TypeScript!"); // result is of type string

// Nullable Types
let nullableNumber: number | null = null;
nullableNumber = 42;

// Non-null Assertion Operator
let nonNullString: string | null = "Hello";
const length: number = nonNullString!.length;

// keyof Operator
type Point3D = { x: number; y: number; z: number };
type PointKey = keyof Point3D; // "x" | "y" | "z"

// Mapped Types
type Optional<T> = { [P in keyof T]?: T[P] };
type OptionalPoint3D = Optional<Point3D>;
const optionalPoint: OptionalPoint3D = { x: 1, y: 2 };

// Enums with String Values
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
const upDirection: Direction = Direction.Up;

// Type Predicates
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(value: any): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}

// Conditional Types
type Check<T> = T extends string ? true : false;
type IsString = Check<string>; // true
type IsNumber = Check<number>; // false

// Tuple Types with Spread
type Trio = [string, number, boolean, ...number[]];
const myTrio: Trio = ["John", 25, true, 1, 2, 3];

// Declaration Merging
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}
const myPet: Animal = {
  name: "Buddy",
  age: 3,
};
