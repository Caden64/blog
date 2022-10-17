---
title: The start of Rust for Rustaceans
author: What counts as a real name
description: THe start of rust for Rustaceans
preview: Memory mangament is a difficult thing for programs to get right whether they realize it or not.
date: 2022-15-10
slug: "irp1"
---
# Disclaimer part 1 of the greatest thing since sliced bread.

# Learning Rust is hard.

So I've been reading a book called "Rust for Rustaceans" by Jon Gjengst

# What made my head EXPLODE!!!

Memory management is something I've never really thought of before coming from Python, JavaScript, and Go all programing languages with a Garbage Collector.
For the uninitiated a Garbage Collector frees unused resources from the program insted of the programmer manually telling the program what to free. Rust handles things differently because it has a borrow checker meaning every resource must have one owner and no more.

## What if another part of your program wants that resource?

The resource can be borrowed once or many times depending on how its borrows

#### What does that mean bro??????

A resource if allowed to be changed while being borrowed can only be borrowed once before it has to be returned before being borrowed again. Otherwise it can be borrowed as many times as designated.

# So what I'm a C dev and don't care

