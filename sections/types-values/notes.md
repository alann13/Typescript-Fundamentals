# Types & Values

- Types describe sets of allowed values.
- Unknown types cannot be used without first applying type guard. (check the type with if statements before using)
- Unknown types are great for values received at runtime by forcing consumers to do some light validations before using them.
- `never` type holds no possible value. Good for exaustive conditionals. (end of switch / if else statements)
- null means: there is a value but that value is nothing.
- undefined means the value isn't available (yet?). undefined is an indication that there might be something coming in the future.
- void should be exclusively used to describe a function that ignores a return value.
- `!.` non null assertion operator. Good for test suites.
