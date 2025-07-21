#Swap the First and Last Element in an Array
✅ Method 1: Basic Swap using Temporary Variable
In this method, you manually exchange the first and last values of the array by storing one of them in a temporary variable.

🔍 Step-by-step:
First, identify the first element using index 0.

Then get the last element using index array.length - 1.

Store the first value in a temporary variable.

Assign the last value to the first index.

Assign the temporary value (original first) to the last index.

This method is easy to understand and is ideal for beginners.

✅ Method 2: Swap Using Destructuring Assignment
This is a short and clean way of swapping two values using array destructuring, available in modern JavaScript.

🔍 How it works:
It swaps values without using a temporary variable.

You directly write both values in one line.

Best for clean code and when you're comfortable with JavaScript syntax.
