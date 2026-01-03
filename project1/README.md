# Part 1 – Invalid Number Detection

## Problem Description

Given a list of numeric ranges, expand each range into individual numbers,
identify which numbers are invalid, and return the sum of all invalid numbers.

A number is invalid if it is composed entirely of a digit sequence repeated
consecutively at least twice.

## Solution Approach

The solution iterates through each number in the given ranges and determines
whether it can be reconstructed by repeating a smaller digit pattern.
Only full consecutive repetitions are considered invalid.

function isInvalidNumber(num) {
  ...
}


## Notes

- Partial or non-consecutive repetitions are ignored
- The logic works for any numeric range provided at runtime
