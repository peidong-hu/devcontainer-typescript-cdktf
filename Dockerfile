ARG VARIANT=16
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

ARG VERSION_TERRAFORM=1.3.6

# Nodejs
#RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
#&& apt-get install -y nodejs

# Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ARG AWS_CLI_VERSION=2.2.18
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-$AWS_CLI_VERSION.zip" -o "awscliv2.zip"
#RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip -q awscliv2.zip
RUN ./aws/install
RUN aws --version

# Terraform
RUN wget -q https://releases.hashicorp.com/terraform/${VERSION_TERRAFORM}/terraform_${VERSION_TERRAFORM}_linux_amd64.zip
RUN unzip terraform_${VERSION_TERRAFORM}_linux_amd64.zip
RUN install terraform /usr/local/bin
RUN terraform -v

# Terraform cdk
RUN npm install --global cdktf-cli@0.14.3
