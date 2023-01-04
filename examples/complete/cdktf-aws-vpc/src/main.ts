import { Construct } from "constructs";
import { App } from "cdktf"
import { AwsProvider } from "../.gen/providers/aws/provider";
import { Vpc } from '../.gen/modules/vpc';
import {
    TFModuleStack,
    TFModuleVariable,
    TFModuleOutput,
    ProviderRequirement,
  } from "cdktf-tf-module-stack";
class MyVpcModule extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new ProviderRequirement(this, "null", "~> 2.0");

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });
    const var1 = new TFModuleVariable(this, "vpcName", {
      type: "string",
      description: "A variable",
      default: "default",
    });

    const resource = new Vpc(this, 'MyVpc', {
      name: var1.stringValue,
      cidr: '10.0.0.0/16',
      azs: ['us-east-1a', 'us-east-1b'],
      privateSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
      publicSubnets: ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
      enableNatGateway: true
    });
    new TFModuleOutput(this, "vpcId", {
        value: resource.vpcIdOutput,
      });
  }
}

const app = new App();
new MyVpcModule(app, "hello-terraform");
app.synth();

