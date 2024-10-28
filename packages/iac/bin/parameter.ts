import { Environment } from "aws-cdk-lib";

export interface AppParameter {
  projectName: string;
  envName: "dev" | "stg" | "prd";
  env: Environment;
}

const commonParameter = {
  projectName: "my-project",
};

export const devParameter: AppParameter = {
  ...commonParameter,
  envName: "dev",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
};

export const stgParameter: AppParameter = {
  ...commonParameter,
  envName: "stg",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
};

export const prdParameter: AppParameter = {
  ...commonParameter,
  envName: "prd",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
};

export const getParameter = (
  envName: AppParameter["envName"]
): AppParameter => {
  switch (envName) {
    case "dev":
      return devParameter;
    case "stg":
      return stgParameter;
    case "prd":
      return prdParameter;
    default:
      throw new Error("Invalid envName");
  }
};
