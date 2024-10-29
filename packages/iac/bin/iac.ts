#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IacStack } from '../lib/iac-stack';
import { getParameter } from './parameter';

const app = new cdk.App();
const environment = app.node.tryGetContext('environment');

const appParameter = getParameter(environment);
const projectName = `${appParameter.projectName}-${appParameter.envName}`;

new IacStack(app, projectName, {
  env: {
    account: appParameter.env.account,
    region: appParameter.env.region,
  },
});
