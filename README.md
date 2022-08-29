# CryptoEggs Frontend

## Installing Web Server
Installation: `yarn` or `yarn install` (they are the same). This will generate `yarn.lock` and establish this project using `yarn` and install all dependencies

It is recommended that you put both the contract directory and frontend directory side by side. In doing so, you should have your `/artifacts` linked. This `/artifacts` directory is generated when you compile your contract. For example, to link compiled `/artifacts` to current directory, run the following code in this current top-level directory.

```
ln -s /home/koke_cacao/Documents/Koke_Cacao/Solidity/Workspace/CryptoEggs_hardhat/artifacts ./artifacts
```

or preferably

```
ln -s ../CryptoEggs_hardhat/artifacts ./artifacts
```

Also, make sure you change your contract address in `app.js`.

## Running WebServer

To launch the server
- `yarn start`
- `yarn start --hostname 0.0.0.0` (to run on server)

Check list before launching the server:
- your contract is updated to blockchain
- your contract is compiled to `/artifacts`
- `/artifacts` is linked to front-end
- contract address is updated in front-end
