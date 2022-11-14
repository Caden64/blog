---
title: The start of Rust for Rustaceans
author: What counts as a real name
description: The start of Rust for Rustaceans
preview: Rust has a lot of amazing features
date: 11/7/2022
slug: "irp1"
---

## What makes Rust different

Rust is a programing language that typically is in 10% of the speed of C and C++ programing languages used extensively by the Linux Foundation and Microsoft while being as memory safe with little opportunity to shoot yourself in the foot.

### What does Rust do exactly?

1. Memory Safety
2. Lifetimes
3. Traits

### Memory Safety

#### The Borrow Checker

The borrow checker in Rust works because every variable in Rust has to have an *owner* however every variable can be *borrowed* out

##### Example

Here is working Python code that returns the sum of two numbers

```python
# x and y defined here
x = 12
y = 12 

def add(x: int, y: int):
    return x + y
# z having the false of the function add with parameters x and y
z = add(x, y)
print(f'x: {x}, y: {y}, z: {z}')
```

Here is the same code in rust

```rust
fn main() {
// x and y defined here

    let x = 12;
    let y = 12;

//  z having the false of the function add with parameters x and y
    
    z = add(x, y);
    println!("x: {}, y:{}, z:{}", x, y, z)
}


fn add(x: i32, y: i32) -> i32 {
    x + y
}
```

The rust code does not compile because the variable x and y have been *moved* / are now in the ownership of the function add and are *unallocated* when it returns

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

This code now works because x and y are now being borrowed with the added syntax of *&* instead of being owned by the add function

## Lifetimes

Lifetimes for the uninitiated are how long a variable "exists" inside a program. The following example is taken from [rust by example](https://doc.rust-lang.org/rust-by-example/scope/lifetime.html).

```rust
fn main() {
    let i = 3; // Lifetime for `i` starts.
    {                                                    
        let borrow1 = &i; // `borrow1` lifetime starts. 
                        
        println!("borrow1: {}", borrow1); 
    } // `borrow1 ends. 
                                                         
                                          
    {                                                    
        let borrow2 = &i; // `borrow2` lifetime starts. 
                                                       
        println!("borrow2: {}", borrow2);               
    } // `borrow2` ends. 
                                         
}   // Lifetime for main ends. 

```

### Explicit Annotation

Explicit annotation is a way to put in lifetimes manually rather than letting Rust handle it for us. Lifetimes must outlive the scope they are in. The following example is taken from [rust by example](https://doc.rust-lang.org/rust-by-example/scope/lifetime/explicit.html).

```rust

```rust
fn display_references<'a,'b>(x: &'a i32, y: &'b i32) {
    println!("x equals {}, Y equals {}", x, y)
}

fn main() {
    let (five, two): (i32, i32) = (4, 2);

    display_references(&five, &two);

    println!("five equals {}, two equals {}", five, two);
}

```

#### Lastly, lifetimes can only become shorter

### Traits

Traits allow for many thing in rust to have a common interface.

## [Run example](https://play.rust-lang.org/?version=stable&mode=release&edition=2021&gist=df896c921d5ec37e9fab9a8a86bc81d9)

```rust
struct Dog { napping: bool, name: &'static str }

struct Rabbit { speed: i32, name: &'static str }

// not all dogs or rabbits are animals, but all animals are dogs or rabbits
trait Animal {
    fn new(name: &'static str) -> Self;

    fn name(&self) -> &'static str;
    fn noise(&self) -> &'static str;

    fn talk(&self) {
        println!("{} says {}", self.name(), self.noise())
    }
}
// specific things that only dogs do in this example
impl Dog {
    fn bark(&self) {
        println!("{} barks", self.name)
    }

    fn sleep(&self) {
        println!("{} sleeps", self.name)
    }
}

// all dogs are animals
impl Animal for Dog {
    fn new(name: &'static str) -> Dog {
        Dog { napping: false, name: name }
    }

    fn name(&self) -> &'static str {
        self.name
    }

    fn noise(&self) -> &'static str {
        if self.napping { "Zzz" } else { "Woof!" }
    }

    fn talk(&self) {
        self.bark()
    }
}
// all rabbits are animals
impl Animal for Rabbit {
    fn new(name: &'static str) -> Rabbit {
        Rabbit { speed: 10, name: name }
    }

    fn name(&self) -> &'static str {
        self.name
    }

    fn noise(&self) -> &'static str {
        "Squeak!"
    }

    fn talk(&self) {
        println!("{} pauses briefly... {}", self.name, self.noise())
    }
}

fn main() {
    let dog = Dog::new("Mac");

    let rabbit = Rabbit::new("Bugs-Bunny");

    // the dog has bark as well as talk while rabbit only has talk
    dog.bark();
    dog.talk();

    rabbit.talk();

}

```
