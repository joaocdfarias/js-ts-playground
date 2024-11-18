type NonEmtpyArray<T> = [T, T, ...T[]];

/**
 * @param numbers - It should have at least two numbers or will throw type error
 * The type `type NonEmtpyArray<T> = [T, T, ...T[]];` is a tuple type with a generic type `<T>`, 
 * two required elements of the type `[T, T]` and a rest
 * parameter allowing zero or more additional elements `...T[]`.
*/
function sum(numbers: NonEmtpyArray<number>) {
  if (!numbers || numbers.length <= 1) {
    throw new Error("You need to add at least two numbers");
  }

  return numbers.reduce((acc, cur) => acc + cur);
}

const twoNumbers = sum([1, 2]);
