#!/bin/bash

# Move to budgetBox
cd lib/budgetBox

# Install dependencies
npm install

# Compile contracts
./node_modules/truffle/build/cli.bundled.js compile

# Move built conracts
mv build ../../
