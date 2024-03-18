import {
  aws_iam as iam,
  aws_logs as logs,
  RemovalPolicy,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const applicationLoggerGroup = new iam.Group(
      this,
      "ApplicationLoggerGroup",
      {
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "CloudWatchLogsFullAccess",
          ),
        ],
      },
    );

    // The credentials for this IAM user were generated on the AWS console
    // so we don't need to store them in AWS Secrets Manager which is a paid service.
    const websiteServerLogger = new iam.User(this, "WebsiteServerLogger");

    applicationLoggerGroup.addUser(websiteServerLogger);

    const websiteServerLogGroup = new logs.LogGroup(
      this,
      "WebsiteServerLogGroup",
      {
        retention: RetentionDays.TWO_WEEKS,
        removalPolicy: RemovalPolicy.DESTROY,
      },
    );

    const localWebsiteServerLogStream = new logs.LogStream(
      this,
      "LocalWebsiteServerLogStream",
      {
        logGroup: websiteServerLogGroup,
        removalPolicy: RemovalPolicy.DESTROY,
      },
    );

    const pipelineWebsiteServerLogStream = new logs.LogStream(
      this,
      "PipelineWebsiteServerLogStream",
      {
        logGroup: websiteServerLogGroup,
        removalPolicy: RemovalPolicy.DESTROY,
      },
    );

    const devWebsiteServerLogStream = new logs.LogStream(
      this,
      "DevWebsiteServerLogStream",
      {
        logGroup: websiteServerLogGroup,
        removalPolicy: RemovalPolicy.DESTROY,
      },
    );

    const prodWebsiteServerLogStream = new logs.LogStream(
      this,
      "ProdWebsiteServerLogStream",
      {
        logGroup: websiteServerLogGroup,
        removalPolicy: RemovalPolicy.DESTROY,
      },
    );
  }
}
