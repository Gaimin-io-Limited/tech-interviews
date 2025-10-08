#!/bin/bash

# Get the directory where the script is located and go to parent (repo root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Check if cargo-nextest is installed
if ! command -v cargo-nextest &> /dev/null; then
    echo "cargo-nextest is not installed. Installing..."
    cargo install cargo-nextest --locked
    echo ""
fi

# Run cargo-nextest
cargo nextest run --no-fail-fast --lib
