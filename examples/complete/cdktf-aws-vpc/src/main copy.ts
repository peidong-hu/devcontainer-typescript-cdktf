import { Construct } from "constructs";
import { VPC, VPCProps } from "./awsvpc";
import { App, TerraformStack } from "cdktf";


class MyStack extends TerraformStack {
    constructor(scope: Construct, stackname: string, vpcprops: VPCProps) {
      super(scope, stackname);

  
      // Create VPC with Typescript and CKDTF
    new VPC(stackname+"-vpc", scope, vpcprops);
  
    }
  }

const app = new App();
let vpcProps = new VPCProps();
new MyStack(app, "cdktf-typescript-aws-vpc-test", vpcProps);
app.synth();