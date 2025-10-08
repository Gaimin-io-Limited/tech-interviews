# GAIMIN Technical Exercise: Interview Environment

Welcome to the interview environment! This repository contains a series of programming challenges focused on prime number algorithms, designed to assess problem-solving skills and algorithmic thinking.

## Environment Structure

This environment is organized into 10 progressive problems, ranging from fundamental concepts to advanced algorithms.

### Fundamentals (Problems 1-4)
- **[problem-01/](./problem-01/)** - Basic Primality Testing
- **[problem-02/](./problem-02/)** - Generating Prime Sequences
- **[problem-03/](./problem-03/)** - Sieve of Eratosthenes
- **[problem-04/](./problem-04/)** - Sieve of Sundaram

### Intermediate (Problems 5-7)
- **[problem-05/](./problem-05/)** - Prime Factorization
- **[problem-06/](./problem-06/)** - Twin Primes and Prime Gaps
- **[problem-07/](./problem-07/)** - Segmented Sieve

### Advanced (Problems 8-10)
- **[problem-08/](./problem-08/)** - Finding the nth Prime Number
- **[problem-09/](./problem-09/)** - Prime Counting Function π(x)
- **[problem-10/](./problem-10/)** - Miller-Rabin Primality Test

Each folder contains a `README.md` with the problem description, requirements, test cases, and guiding questions.

## Equity & Inclusion

To ensure the fairness of the problems, we implemented each of these algorithms to ensure the test cases are correct for compatible implementations. We also ensured that the problems we present are accessible to all users, regardless of their background or experience level.

## AI Use

In today's world it is impossible to avoid the use of AI in solving problems. Internally, we use LLMs for a variety of tasks, including generating test cases and providing initial feedback on solutions. However, we are firm believers in "human-in-the-loop" AI - where AI models are used to assist humans in solving problems but do not replace human solutions or judgment.

**This repository includes AI assistant guidelines** (`AI_INSTRUCTIONS.md`) that instruct language models to act as teachers rather than solution providers. The AI will:
- Guide you toward understanding without solving problems directly
- Help debug your code and explain concepts
- Point you to relevant tests and requirements
- Ask probing questions using the Socratic method

The AI will **not** write complete implementations for you. This ensures you learn and grow through the process of solving these problems yourself.

## Getting Started

1. Work through the problems in order - they build on each other conceptually
2. Implement your solutions in any programming language you're comfortable with
3. TypeScript signatures are provided as examples, but feel free to use your preferred language
4. Focus on correctness first, then optimize for efficiency

## Development Container

This environment includes a `.devcontainer` configuration for consistent development across platforms. If you're using VS Code with the Dev Containers extension, you can open this folder in a container for a pre-configured development environment.

### Available Languages & Tools

The dev container comes pre-configured with multiple programming languages and their toolchains:

#### **JavaScript/TypeScript**
- Node.js 20.x
- npm, yarn, pnpm
- TypeScript compiler (`tsc`)
- ts-node for running TypeScript directly

#### **Python**
- Python 3.x
- pip3 and venv for package management

#### **Go**
- Go 1.22.0
- Full Go toolchain (`go build`, `go test`, `go run`)

#### **Rust**
- Rust stable toolchain
- Cargo build system
- rustc compiler

#### **C/C++**
- GCC and G++ compilers
- Clang compiler suite
- GDB debugger
- CMake and Make build tools
- clang-format and clang-tidy

#### **Java**
- OpenJDK 17
- Maven and Gradle build tools

#### **C#/.NET**
- .NET SDK 8.0
- dotnet CLI

#### **VS Code Extensions**
Pre-installed extensions for each language provide IntelliSense, debugging, and formatting support.

### Quick Start with Dev Container

1. Open this folder in VS Code
2. When prompted, click "Reopen in Container" (or run `Dev Containers: Reopen in Container` from the command palette)
3. Wait for the container to build (first time only)
4. Start coding in your preferred language!

## Running Tests

This repository contains **two separate implementations** of all 10 problems:
- **TypeScript** (`problem-*/ts/`) - Managed by npm workspaces
- **Rust** (`problem-*/rust/`) - Managed by Cargo workspace

These are completely independent - you can work with either or both.

---

## TypeScript Tests (npm workspace)

The TypeScript implementations use **npm workspaces** to manage all 10 problems.

### Run All TypeScript Tests (Detailed)
```bash
npm test
```
Runs all test suites across all 10 TypeScript problems with detailed output.

### Run All TypeScript Tests (Summary)
```bash
npm run test:summary
# or
./scripts/npm-test-summary.sh
```
Shows a clean summary of test results for each problem:
```
Problem 01: 11 passed, 7 failed (total: 18)
Problem 02: 4 passed, 13 failed (total: 17)
...
Total Tests Passed: 62
Total Tests Failed: 170
```

### Run Tests for a Single TypeScript Problem
```bash
cd problem-01/ts
npm test
```

### Build All TypeScript Projects
```bash
npm run build
```

### Other npm Commands
- `npm install` - Install dependencies for all TypeScript workspaces
- `npm run clean` - Clean all TypeScript build artifacts and node_modules

---

## Rust Tests (Cargo workspace)

The Rust implementations use a **Cargo workspace** to manage all 10 problems.

### Run All Rust Tests (Recommended)
```bash
./scripts/cargo-test-summary.sh
```
Uses `cargo-nextest` for better test output with a summary at the end. Auto-installs cargo-nextest if not present.

### Run All Rust Tests (Standard)
```bash
cargo test --no-fail-fast --lib
```
Uses standard cargo test. The `--no-fail-fast` flag continues testing all packages even when some fail.

### Run Tests for a Single Rust Problem
```bash
cargo test -p problem-01-primality-testing
```

### Build All Rust Projects
```bash
cargo build
```

### Other Cargo Commands
- `cargo check` - Check code without building
- `cargo clean` - Remove build artifacts
- `cargo nextest run --no-fail-fast --lib` - Run tests with nextest directly

---

## Approach

Each problem includes:
- **Task description** - What you need to implement
- **Function signature** - Expected interface (TypeScript example)
- **Requirements** - Specific criteria your solution should meet
- **Questions to consider** - Prompts to deepen your understanding
- **Test cases** - Examples to verify your implementation

Take your time to think through the algorithmic challenges and optimizations. Good luck!
