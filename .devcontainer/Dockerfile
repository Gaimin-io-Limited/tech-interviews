FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV GO_VERSION=1.22.0
ENV RUST_VERSION=stable
ENV NODE_VERSION=20.x
ENV DOTNET_VERSION=8.0

# Install common dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    wget \
    git \
    vim \
    nano \
    ca-certificates \
    gnupg \
    lsb-release \
    software-properties-common \
    apt-transport-https \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm (for JavaScript/TypeScript)
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | bash - \
    && apt-get install -y nodejs \
    && npm install -g typescript ts-node yarn pnpm \
    && rm -rf /var/lib/apt/lists/*

# Install Python 3 and pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Install Go
RUN wget https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz \
    && rm go${GO_VERSION}.linux-amd64.tar.gz
ENV PATH="${PATH}:/usr/local/go/bin"
ENV GOPATH="/home/vscode/go"
ENV PATH="${PATH}:${GOPATH}/bin"

# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain ${RUST_VERSION}
ENV PATH="/root/.cargo/bin:${PATH}"

# Install C/C++ tools
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    gdb \
    cmake \
    make \
    clang \
    clang-format \
    clang-tidy \
    && rm -rf /var/lib/apt/lists/*

# Install Java (OpenJDK)
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    maven \
    gradle \
    && rm -rf /var/lib/apt/lists/*
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH="${PATH}:${JAVA_HOME}/bin"

# Install .NET SDK (for C#)
RUN wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y dotnet-sdk-${DOTNET_VERSION} \
    && rm -rf /var/lib/apt/lists/*

# Setup non-root user
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user if it doesn't exist
RUN if ! id -u ${USERNAME} > /dev/null 2>&1; then \
        groupadd --gid $USER_GID $USERNAME \
        && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
        && apt-get update \
        && apt-get install -y sudo \
        && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
        && chmod 0440 /etc/sudoers.d/$USERNAME \
        && rm -rf /var/lib/apt/lists/*; \
    fi

# Install Rust for the vscode user
USER ${USERNAME}
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain ${RUST_VERSION}
ENV PATH="/home/${USERNAME}/.cargo/bin:${PATH}"

# Create Go workspace
RUN mkdir -p /home/${USERNAME}/go/{bin,src,pkg}

USER root

# Verify installations
RUN echo "Verifying installations..." \
    && node --version \
    && npm --version \
    && tsc --version \
    && python3 --version \
    && pip3 --version \
    && go version \
    && rustc --version \
    && cargo --version \
    && gcc --version \
    && g++ --version \
    && java -version \
    && javac -version \
    && dotnet --version

# Set the default user
USER ${USERNAME}
WORKDIR /workspace
