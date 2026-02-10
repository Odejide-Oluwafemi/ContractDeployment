# Lisk Deployment
### Foundry
🛠️ Command:
```
forge script script/Owner.s.sol:OwnerScript --rpc-url https://rpc.sepolia-api.lisk.com --private-key $PRIVATE_KEY --broadcast
```

✅ Contract Address:
[0x55b7A2b167027A8662e03059aa204a433c30F5B6](https://sepolia-blockscout.lisk.com/address/0x55b7A2b167027A8662e03059aa204a433c30F5B6)


### Hardhat
🛠️ Command:
```
npx hardhat ignition deploy ignition/modules/Owner.ts --network lisk
```

✅ Contract Address:
[0x967075480b82597f708EbFfc08d8898B6Df5bB81](https://sepolia-blockscout.lisk.com/address/0x967075480b82597f708EbFfc08d8898B6Df5bB81)

---
---

# Arc Deployment
### Foundry
🛠️ Command:
```
forge script script/Owner.s.sol:OwnerScript --rpc-url https://arc-testnet.g.alchemy.com/v2/lEBB3O-bQnzdOLjXtCAVf --private-key $PRIVATE_KEY --broadcast
```

✅ Contract Address:
[0x967075480b82597f708EbFfc08d8898B6Df5bB81](https://testnet.arcscan.app/address/0x967075480b82597f708EbFfc08d8898B6Df5bB81)

---

### Hardhat
🛠️ Command:
```
npx hardhat ignition deploy ignition/modules/Owner.ts --network arc
```

✅ Contract Address:
[0x55b7A2b167027A8662e03059aa204a433c30F5B6](https://testnet.arcscan.app/address/0x55b7A2b167027A8662e03059aa204a433c30F5B6)