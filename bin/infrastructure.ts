#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfrastructureStack } from "../lib/infrastructure-stack";

const lambethFoodbankAccountId = "471112736904"

const app = new cdk.App();
new InfrastructureStack(app, "InfrastructureStack", {
  env: { account: lambethFoodbankAccountId, region: "eu-west-2" },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
