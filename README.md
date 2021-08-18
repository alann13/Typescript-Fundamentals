# Typescript Fundamentals, v3 Courses

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/typescript-v3/

## Study Resources

- https://www.typescript-training.com/
- https://www.typescriptlang.org/docs/

<details>
  <summary>Setup</summary>
- See `tsconfig.json` for config.
- You can pass compiler options in the command line also. example: `tsc --outdir dist`.
- Typescript can do type inference. Meaning it might be able to guess the type of your variable without giving it a type.
</details>

<details>
  <summary>Type Categories</summary>

- Typescript is not a replacement for unit testing. Ts is good for type checking stuff but it doesn't test for behaviours.
- Optional properties will turn your variable into a `type | undefined`. The undefined type infers that the property might not have a value.
- Tuples are a fixed size collection with specific types at specific index of the collection. (good for array destructuring)
- Nominal type systems care about Naming.
- Structural type systems care about the shape.
- Union types >> OR | , Intersection types >> AND &
- Type aliases are friendlier names for your types.
- Interface is a way of defining object types.
- Interfaces can extends other interfaces.
- Protip: class should implements interfaces instead of types. If you add a union type to your type, its gonna break the class you are defining.
</details>

<details>
  <summary>Functions</summary>
- Function overload: you can define same name functions with different param types.
- Protip: always have a return type in your functions.
- Private: A private member cannot be accessed outside of its containing class. 
- Protected: A protected member cannot be accessed outside of its containing class.
- Security Protip: don't put sensitive info in private nor protected members.
- readonly keyword only prevent reassignation.
</details>

<details>
  <summary>Types & Values</summary>
- Unknown types cannot be used without first applying type guard. (check the type with if statements before using)
- Unknown types are great for values received at runtime by forcing consumers to do some light validations before using them.
- `never` type holds no possible value. Good for exaustive conditionals. (end of switch / if else statements)
- null means: there is a value but that value is nothing.
- undefined means the value isn't available (yet?). undefined is an indication that there might be something coming in the future.
- void should be exclusively used to describe a function that ignores a return value.
- `!.` non null assertion operator. Good for test suites.

</details>

<details>
  <summary>Generics</summary>

- Type parameters can be thought of as 'function arguments' but for types.
- See example in `src/genericExample.ts`.
</details>
