---
title: IRP part 2
author: What counts as a real name
description: The middle of Rust for Rustaceans
preview: Rust has a lot of fun features
date: 12/8/2022
slug: "irps1_I_love_my_website_lol"
---

Asynchronous programing is a key part of the modern computer. As Jon
states "Computers are fast. Really fast. So fast, in fact, that they
spend most of their time waiting for things to happen." (p.118).
Asynchronous is a nonblocking interfaces which means that data requested
may not yield a result when requested in Rust this is done through the
"[Poll](https://doc.Rust-lang.org/stable/std/task/enum.Poll.html)" Enum
to keep from different library's having different poll methods Rust has
the "[Future](https://doc.Rust-lang.org/std/future/trait.Future.html)"
Trait. In Rust version 1.39 the keywords async await came in which
allows for waiting on the Future trait. The Pin and Unpin makes sure
that the memory for the variable will always be in the same place and
unpin will allow those variables to be moved in memory.


Unsafe code allows Rust to be as flexible as C while allowing for memory
safety. The reason the unsafe keyword exists in Rust a "Memory Safe"
programming language is best summarized by Jon. As the text states
"Crucially, unsafe code is not a way to skirt the various rules of Rust,
like borrow checking, but rather a way to enforce those rules using
reasoning that is beyond the compiler." (p.142). The borrow checker is
an amazing tool however some code such as drivers may need to draw data
in from external sources that have a know place in memory which the
compiler cannot be 100% sure of as such Rust as the unsafe keyword. Raw
pointers allow for programs to be significantly faster if used correctly
however it is up to the programmer to know what part of memory is safe.
A common meme in the C/C++ programing scene is how easy it is to "[blow
off your foot and or
leg](https://www.azquotes.com/picture-quotes/quote-c-makes-it-easy-to-shoot-yourself-in-the-foot-c-makes-it-harder-but-when-you-do-it-blows-bjarne-stroustrup-54-50-27.jpg)"
as Jon explains invalid types why they can lead to performance benefits.
" While we could have declared buf as \[0; 4096\] instead, that would
require the function to first write out all those zeros to the stack
before executing, even if it's going to overwrite them all again shortly
thereafter. Normally that wouldn't have a noticeable impact on
performance, but if this was in a sufficiently hot loop, it might!"
(p.158). Jon goes on to warn about dropping the memory as the programmer
can only drop the valid parts but if the programmer did not there may be
a memory leak however if unsafe code blocks are used correctly, it will
be easy to track down or may not happen in the first place. To help with
this Rust has the "[Drop
Check](https://doc.Rust-lang.org/nomicon/dropck.html)" which hates one
specific use of unsafe code; Jon states "The logic we've just walked
through is the drop check. Normally it doesn't affect unsafe code too
much as its default behavior matches user expectations, with one major
exception: dangling generic parameters." (p.161). The Rust ecosystem has
a temporary solution in place called the "[may
dangle](https://github.com/Rust-lang/Rust/issues/34761)" attribute which
has been around since 2016. Jon goes on to reason why having unsafe code
still allows Rust to be a memory safe language because of the limited
memory checks a given developer may have to think about over Rust
handling it.


Jon goes over true parallelism on multicore concurrency which can be a
performance boost or bottle neck based on operating systems scheduling
when a thread can be used. Rust represents types as safe for use on one
thread or safe for use on more than one thread. Rust requires a special
runtime to use more than one thread such as
"[tokio](https://tokio.rs/)". The primary difficulty in concurrent
programs is coordinating access especially write access which can form
"[data
races](https://www.mathworks.com/products/polyspace/static-analysis-notes/what-data-races-how-avoid-during-software-development.html#:~:text=Data%20races%20are%20a%20common,to%20undefined%20or%20unpredictable%20behavior.)"
which are part of a specific group of errors that happen primarily in a
concurrent settings called "[race
conditions](https://en.wikipedia.org/wiki/Race_condition)" Jon goes on
to explain one of the many solutions to this problem as he states "When
only a single concurrent task is allowed to execute a particular piece
of code at any one time, we say that execution of that segment of code
is mutually exclusive" (p.170). This is also called a mutex which can
slow down a program if one is used often enough. Worker pools are an
important concept to multithreading because it alleviates some problems
with distributing workload from a shared queue but threads can also
preform thread stealing to speed up a given concurrent program.

# [Next](https://caden32.com/post/irps1_why_are_you_looking_at_this/)