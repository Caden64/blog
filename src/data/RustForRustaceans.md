---
title: Independent Reading project
author: Caden Rothzeid
description: the juicy blog post about a book on advanced Rust
preview: Memory mangament is a difficult thing for programs to get right whether they realize it or not.
date: 2022-12-10
slug: "irp"
---

# How to think about memory

Computer programs are complex is an underrated statement. There are two common ways to look at memory. Lets look at the first way. A variable is a name that has a value attached to it. lets looks at Python code to explain.

# Python memory example

```Python
var1 = 12
var2 = var1
var2 = var2 + 1
```

The example above may raise some questions because when var2 has one added to it does the var1 get 1 added to it, or maybe a stays the same but var2 now equals 13 and var1 stays the same. the latter is what happens which makes since the value of var1 is the value of var 2 at the start but var 2 is then mutated to have one added to the current value which started as the same value of var1.

The second model has a variable name that points to the value called a pointer which can be shared by other variables

# Rust memory example

```Rust
let  mut var1 = 12;
let var2 = &mut var1;
*var2 = var2.clone() + 1;
```
This example shows var1 being initalized as mutatable which is a feature in Rust with a value of 12 just like the Python example. When var2 is initalized it has a mutatable pointer to the value of var1 meaning a change to var2 changes var1 which is a substancial diffrence between the Python example and the Rust example.

# Memory Management

Memory management is a difficult thing for programs to get right whether they realize it or not.
Rust the prominently featured programing language of the book "Rust for Rustaceans" by Jon Gjengset is known for its complexity to its users. Other programing obstruct this complexity from its users such as Python.

# Why???

Why are these different solutions to a problem that has been documented since 1965. Lets go into some examples of bad Rust to see what Rust does differently!

# Bad Code

```Rust
fn main() {
    let purchase: f32 = 3.0;
    let sales_tax: f32 = 1.05;

    // purchase is not allowed to change without modifiers when created

    purchase = purchase * sales_tax;

    let purchase = purchase.to_string();

    // add_dollar_sign takes ownership of the variable purchase

    let dollar_sign_purchase = add_dollar_sign(purchase);

    println!("purchase: {} turning into {}", purchase, dollar_sign_purchase)
}

fn add_dollar_sign(s: String) -> String {
    format!("${}", s)
}

```
# Fixed Code

```Rust
fn main() {
    let mut purchase: f32 = 3.0;
    let sales_tax: f32 = 1.05;

    // purchase can now be mutated

    purchase = purchase * sales_tax;

    let purchase = purchase.to_string();

    // add_dollar_sign now borrows the variable purchase

    let dollar_sign_purchase = add_dollar_sign(purchase);

    println!("purchase: {} turning into {}", purchase, dollar_sign_purchase)
}

fn add_dollar_sign(s: &String) -> String {
    format!("${}", s)
}

```

