-   in script tag either you can define src attribute or write code inside it both doesn't work
-   writing semicolon (;) end of statements is good practice
-   "use strict"
    -> prevent the use of undeclared variable
    -> make js more secure & optimized
    -> stop slient error

    use either beg. of file (apply to whole file) or inside function (only apply to function)

-   for hard coded const write variable name in CAPITAL LETTERS. (const PI_VALUE = 3.14)
-   BigInt is used to represent value greater than +-(2^53 - 1) (used in cryptography)
-   there is no function type function belongs to object type
-   8 basic data type (number, BigInt, String, boolean, null, undefined, Symbol, Object)

-   uniary + before any non-number convert it into number
    +"5" -> 5
-   if we use + with string & number it convert number to string
    "2" + 8 -> "28"
-   but if we use other arithmetic operator than it convert string into number
    "6" / "2" -> 3
-   comma operator evaluate multiple expression but return only last expression
-   help to execute multiple expression in one line
-   comparision operator (>, <, ==, >=, <=) convert other data type to number for comparision
-   strict equility -> equility without type conversion
-   bitwise operator (&, |, ~ not, ^ xor, >>, <<)
-   logical operator (&& and, || or, ! not, ?? nullish coalescing)
-   logical operator can work with any data type and return value of any data type
-   || (OR) -> find first truthy value, if all operand is false then return last operand
-   && (AND) -> find first falsy value, if all operand is truthy then return last operand
-   ?? -> return fist defined value (return first arg. if its not null/undefined otherwise second arg.)
-   If a same-named variable is declared inside the function then it shadows the outer one.
-   Functions are actions. So their name is usually a verb.
-   in js function is treated as value
-   Function Declaration is only visible inside the code block in which it resides.
-   Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
-   Function Expressions are created when the execution flow reaches them.
