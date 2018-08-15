#!/usr/bin/env bash
ADDR="0x7655107fE6fD3347E220fB2445a7f00747333b84"
FROM="0xc840493fb3835a26de50c10D65d6556F2177b934"

OPTS="-n custom -p web3/http -u http://127.0.0.1:7545 -k a48e81f7413ebaee990234a0d5ca0d1907b125fb7fbcb395ffd87ece4eb2ad65"
SERVICE="services/donation"

dapp-cli $OPTS $SERVICE donate $ADDR 100 text $FROM
dapp-cli $OPTS $SERVICE balance $ADDR
