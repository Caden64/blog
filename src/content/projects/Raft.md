---
title: The Raft Consensus Algorithm 
description: My understanding of the Raft Consensus Algorithm
tags:
  - "Consensus"
  - "White Paper"
  - "Learning"
  - "Orchestration"
---

# What is a Consensus Algorithm

At it's core a consensus algorithm is an algorithm that allows multiple instances of a program to agree on the current state of the program.

## What are the Common Consensus Algorithms

1. Paxos is notorious for being difficult to implement and understand in addition to being impractical for real world uses.
2. Raft is designed to be easier to understand, implement, and easier to test than Paxos allowing for practical real world uses.

## Uses of these Consensus Algorithms