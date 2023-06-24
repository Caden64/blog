---
title: The Raft Consensus Algorithm 
description: My understanding of the Raft Consensus Algorithm
tags:
  - "Consensus"
  - "Algorithm"
  - "Raft"
---

# What is a Consensus Algorithm

A consensus algorithm is a way for multiple nodes on a network to agree on the current state of each node.

## Coordination without a central authority

That is the problem consensus algorithms solve. 
Distributed systems such as IPFS (Inter-Planetary File System) and Blockchains to give consensus on changes being made.

# The Raft Algorithm

The Raft algorithm is meant to be as understandable as possible my making the fewest but most clear rules possible for implementations.
Many implementations do not strictly follow the [Raft White Paper](https://raft.github.io/raft.pdf) by adding things not mentioned in the White Paper.

## States a Node can be in

1. Follower
2. Candidate
3. Leader

A node defaults to a Follower state

### How Nodes can switch state

#### Follower

Heartbeat timer runs out; allows for Follower to become Candidate

#### Candidate

Gets majority in election; allows for Candidate to become Leader
Does not get majority in election; allows for Candidate to become Follower

#### Leader

Does not get majority in election; allows for Leader to become Follower
Finds a more up to date node; allows for Leader to become Leader after appointing new Leader

## How Elections work

If a node does not receive a heartbeat AppendEntries request before their heartbeat timer runs out. 
Make and send VoteRequest after increasing term number by one and changing state to Candidate
Other nodes will then respond yes if the Candidates log seems up to date
If majority vote yes become Leader
Else try again

# Differences in how to Implement Raft

I am writing this blog post to reinforce my understanding of Raft and how I want to implement it.
There is a decent [Raft implementation](https://github.com/eliben/raft) written in Go by eliben on GitHub.
It is clear that the api has not been kept up to current Go standards and does not strictly follow the Raft White Paper.

1. Cares about how nodes communicate
2. Created an extra state a node can exist in
3. Does not use generics

In contrast I want to have the following features.

1. Independent Communication
2. Closely follows Raft White Paper
3. Use modern Go features like generics to reduce application code where possible