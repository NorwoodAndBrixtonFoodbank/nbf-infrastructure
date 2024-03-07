import { aws_iam as iam, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs';

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const applicationLoggerGroup = new iam.Group(this, 'ApplicationLoggerGroup', {
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchLogsFullAccess')
      ]
    })

    const websiteServerLogger = new iam.User(this, 'WebsiteServerLogger')

    applicationLoggerGroup.addUser(websiteServerLogger)
  }
}
