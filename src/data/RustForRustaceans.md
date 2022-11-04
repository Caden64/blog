---
title: The start of Rust for Rustaceans
author: What counts as a real name
description: The start of Rust for Rustaceans
preview: Memory management is a difficult thing for programs to get right whether they realize it or not.
date: 2022-15-10
slug: "irp1"
---
## Disclaimer part 1 of the greatest thing since sliced bread

### Don't know Rust?

[Get the basics here first](https://learnxinyminutes.com/docs/Rust/)

### What makes Rust different

Rust is a programing language that typically is in 10% of the speed of C and C++ programing languages used extensively by the Linux Foundation and Microsoft while being as memory safe as possible.

### What does Rust do exactly?

1. Memory safety
2. Traits (inheritance)
3. Concurrency

### Memory Safety 

#### The Borrow Checker!!!

The borrow checker in Rust works because every variable in Rust has to have an *owner* however every variable can be *borrowed* out

##### Example
Here is working Python code that returns the sum of two numbers
```python
x = 12
y = 12 

def add(x: int, y: int):
    return x + y

z = add(x, y)
print(f'x: {x}, y: {y}, z: {z}')
```

Here is the same code in rust
```rust
fn main() {
    let x = 12;
    let y = 12;
    
    z = add(x, y);
    println!("x: {}, y:{}, z:{}", x, y, z)
}


fn add(x: i32, y: i32) -> i32 {
    x + y
}
```

The rust code does not run because the variable x and y have been *moved* / are now in the ownership of the function add and are *deallocated* when it returns

```rust
fn main() {
    let x = 12;
    let y = 12;
    
    z = add(&x, &y);
    
    println!("x: {}, y:{}, z:{}", x, y, z)
}


fn add(x: &i32, y: &i32) -> i32 {
    x + y
}
```

This code now works because x and y are now being borrowed with the added syntax of *&* insted of being owned by the add function

