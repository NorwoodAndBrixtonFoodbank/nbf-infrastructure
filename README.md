# Infrastructure

## Prerequisite
- Node.js

## Get AWS credentials
Go to [Softwire AWS Start page](https://softwire.awsapps.com/start#/) and select VFB and the appropriate role to assume. 
Click on `Command line or programmatic access`, and copy the commands to inject your credentials in the terminal.

## Useful commands
* `npm run build` to compile typescript to js
* `npm run watch` to watch for changes and compile
* `npm run test` to perform the jest unit tests
* `npx cdk deploy` to deploy this stack to your default AWS account/region
* `npx cdk diff` to compare deployed stack with current state
* `npx cdk synth` to emit the synthesized CloudFormation template
* `npm run style` to run prettier on the code
