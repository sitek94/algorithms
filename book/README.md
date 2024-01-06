# Notes

- `Set.add()` and `Set.has()` are O(1) operations, because it uses hash-based data structure under the hood.

## Arrays and Strings

- In JavaScript it's not necessary to implement StringBuilder, because both `String.concat()` and `string += string2`
  are already optimized using rope data structure, which makes time complexity O(log n) in most cases.
- When optimizing algorithms that replace some values in a matrix, you can use the matrix itself for data storage, see
  (1.8)
