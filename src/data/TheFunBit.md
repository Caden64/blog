---
title: The fun bit... For me
author: What counts as a real name
description: The middle of Rust for Rustaceans
preview: Rust has a lot of fun features
date: 11/14/2022
slug: "irp2"
---

***Python is used as an example of high level programing in comparison to the low level system programing Rust is designed for***

## How to actually use Rust

### What to cover

1. Errors
2. Project Structure
3. Testing
4. Macros
5. Asynchronous
6. Unsafe Rust

### Errors also know as Rule 1 in r/TalesFromTechSupport

#### Users lie

The best way to return an error is to have an error type you use everywhere

```Rust
#[derive(Debug, Clone)]
struct Error;

impl fmt::Display for DoubleError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "invalid first item to double")
    }
}
```

The rest is up to the implementation of the individual with the use of the Option and Result types.

Now Python has a system which uses exceptions

```Python
class Error(Exception):
    """Base class for other exceptions"""
    pass


class ValueTooSmallError(Error):
    """Raised when the input value is too small"""
    pass


class ValueTooLargeError(Error):
    """Raised when the input value is too large"""
    pass


def main():
    number = 10

    while True:
    try:
        i_num = int(input("Enter a number: "))
        if i_num < number:
            raise ValueTooSmallError
        elif i_num > number:
            raise ValueTooLargeError
        break
    except ValueTooSmallError:
        print("This value is too small, try again!")
        print()
    except ValueTooLargeError:
        print("This value is too large, try again!")
        print()    
    
```

These two system have similar concepts however very different implementations with Python relying on the user to give an error and Rust tRusting the user to use the given error.

### The corporate way

#### Project Structure

##### Features

Once a project becomes big enough having multiple modules is not enough to many features may be added when the user only needs basic functionality thats where features come in.

##### Cargo

These are defined in Rusts package manager called Cargo configuration file labeled Cargo.toml

```toml
[package]
name = "class"

[features]
derive = ["syn", "quote", "proc-macro2"]

[dependencies]
syn = { version = "1.0", optional = true }
quote = { version = "1.0", optional = true }
proc-macro2 = { version = "1.0", optional = true }
```

##### Workspaces

The larger a project the longer it take to compile or make the code run.

these settings are only in the Cargo.toml file in the root of the project

```toml
[workspace]
members = [
    "class",
    "class-derive",
]
```

These features are not in Python due to Python being a interpreted language and Rust being a compiled language.

### Testing

Rust has a flag *#[(test)]* which allows the user to test the code in the test module using the default test runner however the user may use their own test runner.

```Rust
#[test]
fn insert_just_one() {
    let mut map = HashMap::new();
    m.insert(42, ());
    let full = m.table.buckets.iter().filter(Bucket::is_full).count();
    assert_eq!(full, 1);
}
```

Python relies on external community made test runners such as unittest, pytest, and more.

```Python
import unittest


class TestSum(unittest.TestCase):

    def test_sum(self):
        self.assertEqual(sum([1, 2, 3]), 6, "Should be 6")

    def test_sum_tuple(self):
        self.assertEqual(sum((1, 2, 2)), 6, "Should be 6")

if __name__ == '__main__':
    unittest.main()
```
