---
title: Post-Quantum Advanced Cryptography
description: Converting the Double Ratchet to use Kyber. 
tags:
  - "Golang"
  - "Crypto"
  - "Kyber"
  - "NIST"
  - "Quantum"
---

# What is post-quantum cryptography

Post-quantum cryptography are algorithms that have resistance to how quantum computers could break current public key algorithms like RSA and Diffie-Hellman.
Algorithms that could do this need significantly more "qubits" the quantum equivalent to regular bits.
Currently, the most advanced quantum computer as far as I am aware is the 127 qubits computer from IBM which is a significant difference between the estimated 20 million to "break" 2048-bit RSA.

# Signal is Special why?

The Signal protocol contains a specification called the "Double Ratchet" which is two functions that provide forward secrecy.
Essentially if an adversary gets a hold of your or the person your communicating with private keys they are only good for a handful of messages.
KDF (Key derivation function) functions are what allow this to happen as once each key has been put through it turns it into a new key.
When the protocol uses both it requires both to be at the right "step" of the ratchet in order for the encrypted message to be readable.

# Replacing the Diffie Hellman with Kyber

I wanted to see if I could come up with a KDF for Kyber768 using golang and Cloudflare Circl library.
The Kyber768 ratchet starts with key encapsulation like RSA but instead with 1000 dimensional vectors.
Using the shared secret from the key encapsulation  and concatenating the values together along with generating a random salt allows us to use HMAC based KDF or HKDF to generate random values from her on out.
With this setup I crated a for loop that went for 20 cycles creating new keys for shared values and concatenating then with the prevous values and using it with the HKDF function for a new random value generator.