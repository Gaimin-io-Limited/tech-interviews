FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive \
    GO_VERSION=1.22.0 \
    RUST_VERSION=stable \
    NODE_VERSION=20.x \
    DOTNET_VERSION=8.0 \
    JAVA_VERSION=21

# Setup non-root user early
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Add external repositories first (Node.js and .NET)
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | bash - \
    && wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb

# Install all apt packages in a single layer
RUN apt-get update && apt-get install -y \
    # Common dependencies
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
    # Python
    python3 \
    python3-pip \
    python3-venv \
    # C/C++ tools
    gcc \
    g++ \
    gdb \
    cmake \
    make \
    clang \
    clang-format \
    clang-tidy \
    # Java (LTS)
    openjdk-${JAVA_VERSION}-jdk \
    maven \
    gradle \
    # Node.js
    nodejs \
    # .NET SDK
    dotnet-sdk-${DOTNET_VERSION} \
    # Sudo for user setup
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install npm global packages
RUN npm install -g typescript ts-node yarn pnpm

# Create user if it doesn't exist
RUN if ! id -u ${USERNAME} > /dev/null 2>&1; then \
        groupadd --gid $USER_GID $USERNAME \
        && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
        && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
        && chmod 0440 /etc/sudoers.d/$USERNAME; \
    fi

# Install Go
RUN wget https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz \
    && rm go${GO_VERSION}.linux-amd64.tar.gz

# Switch to non-root user for Rust installation and setup
USER ${USERNAME}

# Install Rust (only once, for the user)
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain ${RUST_VERSION}

# Create Go workspace
RUN mkdir -p /home/${USERNAME}/go/{bin,src,pkg}

# Set environment variables for user
ENV PATH="/home/${USERNAME}/.cargo/bin:/usr/local/go/bin:${PATH}" \
    GOPATH="/home/${USERNAME}/go" \
    JAVA_HOME="/usr/lib/jvm/java-${JAVA_VERSION}-openjdk-amd64"

ENV PATH="${PATH}:${GOPATH}/bin:${JAVA_HOME}/bin"

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

WORKDIR /workspace
