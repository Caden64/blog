---
title: Rust For Rustaceans Book Report
author: Caden Rothzeid
description: the juicy blog post about a book on advanced rust
preview: Rust For Rustaceans Book Report
date: 2022-10-10
slug: "rust"
---

# Memory Terminology

Think of a stack of papers that you can only add and remove from the top sheet it would be very annoying if you needed 
to put a set of papers 50 papers in thats what scope helps with scope is the ability to have sub-stacks of papers
connected by conspiracy yarn.
Now think of a organized heap of papers there's a specific papers you know is in the heap you can grab it, but it will
take some time to use
as you don't have immediate access to it.

```rust
    // this is an example of high level model of memory usage
    
    
    // this is a defined variable with no value
    let mut x;
    
    
    this code if un-comented would fail when run because there is no value to the variable x
    // assert_eq!(x, 42);
    
    x = 42;
    // now x has an value attached to it
     
    let y = &x;
    // y now is a pointer to x
    
    // a techniqe called shadowing is common practice in rust this means we use the same name for a different variable
    
    let x = 96;
    
     assert_eq!(x, 96);
     assert_eq!(*y, 42);
    // this code works because y points to the value of orginal x 42 while x has been redefined to 96
```