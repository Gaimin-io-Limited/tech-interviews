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

## Approach

Each problem includes:
- **Task description** - What you need to implement
- **Function signature** - Expected interface (TypeScript example)
- **Requirements** - Specific criteria your solution should meet
- **Questions to consider** - Prompts to deepen your understanding
- **Test cases** - Examples to verify your implementation

Take your time to think through the algorithmic challenges and optimizations. Good luck!
