# Logical Operators
Evaluate an expression to either true or false

## ! (not)
Turns the datatype of the primitive to boolean and invert it.

## !! (not not)
Can be used to find if the primitive is truthy or falsy.
It's basicaly the same as Boolean()

## && (and)
```
true && true
<< true

true && false
<< false
```

## || (or)
```
true || false
<< true

false || false
<< false
```


## Lazy Evaluation
- The `and` operator will stop evaluating when it finds the first `false` value.
- The `or` operator will stop evaluating when it finds the first `true` value.

# Bitwise Operators

## ~ (not) CHECK THIS
Converts number to a 32bit binary and changes 0s to 1s and vice-versa.
```
example
```

## & (and)
Converts numbers to binary and keeps `1`s only where there are `1`s in both.
```
12 & 10 // 1100 & 1010
<< 8 // 1000
```

## | (or)
```
12 | 10 // 1100 | 1010
<< 14 // 1110
```

## ^ (xor)
Converts to a binary number that has `1` in positions where there were a `1` and a `0`.
```
12 ^ 10 // 1100 ^ 1010
<< 6 // 0110
```
