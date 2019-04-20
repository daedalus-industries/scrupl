#!/bin/bash

# Update submodule
git submodule update --init

# Remove build directory
rm -rf build

# Move to budgetBox
cd lib/budgetBox

# Install dependencies
npm install

# Compile contracts
./node_modules/truffle/build/cli.bundled.js compile

# Remove any existing built contracts
rm -R ../../build/

# Move built conracts
mv build ../../
