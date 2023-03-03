---
title: IRP part 3
author: Caden Rothzeid
description: The middle of Rust for Rustaceans
date: 11/8/2022
tags:
  - "rust"
isDraft: false
---

Not all code is written in Rust. Many systems work on ["Fortran"](https://en.wikipedia.org/wiki/Fortran) still such as banking systems Jon goes on to explain foreign function interfaces (FFI).
Foreign function interfaces allow other programing languages such as C or Python to run compiled Rust code. This works by exporting symbols which is the name the compiler with give your code for compiler use only.
This does not work when trying to call the code from those other programing languages which is why Rust has the extern keyword to tell the compiler to keep the name. Jon goes over another major pitfall in this quote "With FFI, type layout is crucial, if one language lays out the memory for
some shared data one way but the language on the other side of the FFI
boundary expects it to be laid out differently, then the two sides will interpret the data inconsistently."(p.200) Jon goes over best practices and why C may require a string type to be converted for bytes to the ["utf-8"](https://en.wikipedia.org/wiki/UTF-8) encoded type Rust is used to dealing with
FFI types may also be less optimized because of external interaction with the program. Building a large program for a large external library with all of the different types and mappings involved can be a massive undertaking luckily the Rust ecosystem has the solution... bindgen which will generate Rust code for C headers which also allows the programmer to fine tune the bindings and can also be invoked in a custom build script.


Rust is designed as systems programing language, which means it could be used on a supercomputer or a smart home appliance or an ordinary consumer grade computer. The standard library typically referred to as "std" contains functionality that most programs require however small devices such as smart home devices only need core parts of the language and may not have enough memory for dynamic memory allocation. Rust allows developers to opt out of those features with the ["#![no_std]"](https://docs.rust-embedded.org/book/intro/no-std.html) attribute. Jon states " Specifically, Rust does have some special code that runs before your
main function and in response to certain special conditions in your code,
which really is a form of bare-bones runtime." (p.15) This is a common distinction that most developers don’t need to worry about however Rust has put a lot of effort into especially the [Asahi Linux](https://asahilinux.org/2022/11/tales-of-the-m1-gpu/) project


The Rust ecosystem is extremely large with many projects on the scale of old Python 3 library are getting started every day almost more than how many JavaScript frameworks there are. Jon states "cargo-llvm-lines
Analyzes the mapping from Rust code to the intermediate representation (IR) that’s passed to the part of the Rust compiler that actually
generates machine code (LLVM), and tells you which bits of Rust code
produce the largest IR. This is useful because a larger IR means longer
compile times, so identifying what Rust code generates a bigger IR (due
The Rust Ecosystem   225
to, for example, monomorphization) can highlight opportunities for
reducing compile times."
which is part of some of the tools he uses often when doing Rust for fun or Amazon. He also advocates for always enabling a Rust tool called Clippy which tells the programmer what data types a variable is and methods they can use in a given scenario
