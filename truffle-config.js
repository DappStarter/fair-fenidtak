require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food green rescue pitch model gesture flower army genius'; 
let testAccounts = [
"0x8d074cf1f7c605ecfd162213c052328c933d7a601f9d193315d57733ccc812cd",
"0x89bc03d5dc27809791e618f569880d911e4f6f42f9f164378a83fc7100ee3d64",
"0xdbec1e483622ab4d0a65fbbd14d3ab6072a4d4968e7bf072a1a778d4a98d54e5",
"0x9f093aa28737a539b0986aecbbba4915d7e206978346eac6c12580c4bdcfb41c",
"0xefec488ab9e723f14da63493993c5bec68ba811ad69e5575e4cf9b5680b2159e",
"0x35e7a6c8b00b548c21ef193e7b6f2cf8598f9cc7bb46dde72dd4bb8cae56d074",
"0x079f5a98f5b4762433b3642a18748eaf2720eabd6a2821614c5bf4e168019ac3",
"0x0d4ac9f8526e79cf40411717c7a23ed61616e690cfac7c2bbb6f20d4d1393e07",
"0x1ad1c2e0a802f6894b2cacc51d63e71f7335f9bf5a97d168c1b14c9296fb0ada",
"0x2c49523c2659118bfe2cdb50d8d3bdb7a4571b2394e22597ebe8c7ddb5351a53"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
