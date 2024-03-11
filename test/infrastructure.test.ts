import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as Infrastructure from "../lib/infrastructure-stack";

describe("InfrastructureStack", () => {
  const app = new cdk.App();
  const stack = new Infrastructure.InfrastructureStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  describe("website server log group", () => {
    test("has retention period of two weeks", () => {
      template.hasResourceProperties("AWS::Logs::LogGroup", {
        RetentionInDays: 14,
      });
    });
  });
});
