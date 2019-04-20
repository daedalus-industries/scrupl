#!/bin/bash

# Update submodules
git submodule update --init

# Move to budgetBox
cd lib/budgetBox

# Install dependencies
npm install
