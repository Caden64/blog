---
title: IRP part 1
author: What counts as a real name
description: The start of Rust for Rustaceans
preview: Rust has a lot of amazing features
date: 12/8/2022
slug: "irps1_Rust_is_Great"
---

The book "Rust for Rustaceans" by Jon Gjengset is a programmers guide to
Rust for an experienced programmer published December 21, 2021. Rust for
Rustaceans goes over the Rust programing language in extreme detail
acting as a sequel to "The Rust Programing language" by Steve Klabnik,
and Carol Nichols.

The main character Jon Gjengset documents everything he has learned
after completing his PHD at MIT with a paper on distributed systems and
currently works at Amazon for internal Rust tooling.

His journey starts with going over the basic implementation details of
core elements of Rust like the borrow-checker. These details are largely
about memory and memory management systems such as lifetimes of
variables. He then goes on about types, traits, and trait bounds.
Generic types are well defined in the book however 11 months after the
release of the book Rust update 1.65.0 came out adding a feature called
Generic associated types (GAT's) which allows for more intuitive syntax
with lifetimes as shown in the [official Rust
announcement](https://blog.Rust-lang.org/2022/11/03/Rust-1.65.0.html).
Jon also shares some tips to help the "Rustc" compiler optimize the
reader's code. One of the most used traits used in Rust is "derive"
however Jon goes in depth on why this may be the wrong choice for many
users defined data structured and what pitfalls are involved. The next
step Jon walks the reader through designing an application programing
interface (API) for other developers and gives resources such as the
official [Rust API
checklist](https://Rust-lang.github.io/api-guidelines/) for developers
to follow.

Error handling was the next step Jon wanted to describe best practices
as error handling it is vital for making reliable systems that affect
the real world. Jon specifically states that error handling is a topic
of discussion in the Rust ecosystem with some solutions such as the
experimental "[do
yeet](https://doc.Rust-lang.org/beta/unstable-book/language-features/yeet-expr.html)"
syntax being proposed. The current common way of handling errors
involves the user defining a type that implements the "Display" and
"Debug" traits however if one type is being used for all errors in each
API. Jon states" This error type should implement Send, Debug, Display,
and Error (including the source method where appropriate), but beyond
that, the caller doesn't need to know anything more." (p.59). Jon also
warns against using the unit type (represented as ()) when using error
handling enumerations (Enums) in Rust such as the Result and Option
Enums.

Project structure is more complex than one may think due to internal
Rust tooling such as the package manager "[Cargo](https://crates.io/)".
Crate features allow for an un-needed features to not be included in the
final program. Cargo workspaces allow for several crates to be combined
into one crate. Build configurations allows for significant control over
how a program is built. Jon stated that "*Cargo.toml* can also give you
control over how Cargo builds your crate. The most obvious tool for this
is the build parameter, which allows you to write a completely custom
build program for your crate." (p.73). Build tools like
"[CMake](https://cmake.org/)" for the C family of programing languages
have added complexity to building a program while Rust allows for those
existing tools to build Rust while also allowing a specific source of a
crate such as a "[git](https://git-scm.com/)" repository or local file.
Conditional Compilation allows Rust to be more flexible with its
"[LLVM](https://llvm.org/)" based compiler.

Testing is a core part of assuring the quality of software built with
Rust. Rust allows for a custom testing harness to be used such as
"[criterion](https://docs.rs/criterion/latest/criterion/)". Mocking code
the that the code being tested uses is necessary for ensuring the test
is testing what the programmer wants to be tested. As Jon says ". For
example, if you are testing a network client, you probably do not want
to run your unit tests over a real network but instead want to directly
control what bytes are emitted by the "network" and when" (p.88).
Doctests are also important because they represent something that the
user may use as a test in the documentation for a specific crate.
Performance testing can be used to understand what changes affect run
speed of a given program the crate
"[criterion](https://docs.rs/criterion/latest/criterion/)" in most known
for performance testing.

Macros are a core part of the Rust ecosystem and are best described by
Jon. As he states "Macros are, in essence, a tool for making the
compiler write code for you. You give the compiler a formula for
generating code given some input parameters" (p.101). The example given
by Jon shows how powerful declarative macros are by reducing the
repeated code with small changes with one macro which can be used across
many tests. Jon goes on to describe how macros work which is akin to
compilers with the user defining how to
[parse](https://en.wikipedia.org/wiki/Lexical_analysis) inputs which
produces an [abstract syntax tree
(AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The two
types of macros in Rust are declarative macros and procedural macros.
The latter works a little bit differently than the declarative macros
because they allow the programmer to write a parser for that macro which
can be function like, attribute or derive macros. Procedural macros use
the
"[TokenStream](https://doc.Rust-lang.org/proc_macro/struct.TokenStream.html)"
type as part of the parsing process before handing the data to the AST.
