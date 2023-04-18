---
title: What the Signal protocol is
description: My understanding of the Signal protocol
tags:
  - "NSA"
  - "Signal"
  - "NIST"
  - "ECDH"
---

# What is the Signal protocol

The Signal protocol is a way to generate cryptographically safe shared keys to encrypt and decrypt messages.
It does this by utilizing Elliptical Diffie-Hellman which is a 2 way shared key generation technique. 

## Curve drama

Specifically they specify the use of the X25519 and X448 curves.
NIST standardized curves with Dual_EC_DRBG which lead to these curves are the current de-facto after the backdoor in Dual_EC_DRBG was discovered seeming to confirm that the NSA specifically used it to gain an advantage when decrypting messages.

# Double Ratchet
Now that the shared keys are generated it now creates a "root chain" which is KDF typically HKDF which is then used as the cryptographic source for the diffie hellman chain and the symmetrical chain.
The symmetrical chain is further broken down into sending and receiving chains to account for out of order messages.
Now every couple of messages assuming alice and bob are the two parties can generate a new ECDH key pair and add it to the root chain to generate new sending and receiving this new public ECDH will then be added to the next message for it to be encrypted.
