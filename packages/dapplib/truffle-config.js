require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note ranch public grace brave equal gate'; 
let testAccounts = [
"0xd26f1134e479eb129aefcec3ede35dfc4421be734fb88c6a1e4648ea5e1026f7",
"0x5ec49d030b94cd76c641a237be592afa56a760fbdd6375cefea0d236525d150b",
"0xb43758e7420c47b2dcdc38c0f53cab009f8b9d7c9ee4dffa860332b16809d99b",
"0x804857c884e81abbac713e0a058dc3329a6a5e8d1822b2bdfb0ce1afad493444",
"0x2082ee5c8bdafa5a6e6cb01b45dbcda2f56f2dee30300f5f811d54f43208a548",
"0xbe96fea95c7bb70467cf9899a49f4755efdc0081ca61435319c18e413b9970a0",
"0xe9ce93a705f4394e9c24cd9b9cc7432b8da2bb69a77ecabd868f809740a85506",
"0x7c3963b7542d2090d644692d63807857b6665e95264e4e8edccb233e3b939126",
"0x880fe7956c657ee813f4e39f317dbc694c045fd6c53f3f3b96e85b03bb519de9",
"0xf25910b1ddac5d41494f88431160ef1caf6413d23b0b6734ba571852a8e9c075"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

