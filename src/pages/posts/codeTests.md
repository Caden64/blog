---
layout: ../../layouts/BlogLayout.astro
title: Testing Code blocks
author: Caden
description: Code block testing
preview: A place to test what code blocks look like to make sure the css is correct
---

```go
package main

import "fmt"

const Test ="Test"

func main() {
    test := "ok"
    fmt.Println(test)
    fmt.Println(Test)
}

func (p *pencil) Write() {
    for i := range p.Char {
        p.Set(i)
    }

    var names []rune    

    name = append(names, "test", 't')
}
```


```rust
#[tokio::main]
fn main() {
    println!("{} {}", "Test".as_String(), true)
}

struct point {
    x: int
    y: int
}

impl point {
    new() -> point{
        point{
            x: 0,
            y: 0
        }
    }
}

// test
```