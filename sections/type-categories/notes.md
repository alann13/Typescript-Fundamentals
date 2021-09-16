# Type Categories

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
