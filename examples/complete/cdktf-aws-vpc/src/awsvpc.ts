import { Construct } from "constructs";
import { Vpc } from "../.gen/modules/vpc";

export class VPCProps {
  readonly vpcname: string;
  readonly cidr: string;
  readonly privateSubnets: string[];
  readonly publicSubnets: string[];
  readonly azs: string[];
  readonly region?: string;
  readonly enableNATGateway?: boolean;
  readonly enableVPNGateway?: boolean;
  readonly enableDNSHostnames?: boolean;
  readonly enableDNSSupport?: boolean;
  // TODO: enableFlowLog
  constructor()     {
    this.vpcname = "terraform-cdk-aws-vpc-test2";
    this.cidr = "172.64.0.0/16";
    this.privateSubnets = [];
    this.publicSubnets = [];
    this.azs = ["us-east-1a", "us-east-1b"];
    this.region = "us-east-1";
}
}

export class VPC extends Construct {
  awsvpc: Vpc;
  constructor(id: string, scope?: Construct, props?: VPCProps) {
    if (scope == null || id == 'undefined' || props == null)
        return
    else {
      super(scope, id);

      this.awsvpc = new Vpc(this, id, {
        name: props?.vpcname,
        cidr: props?.cidr,
        azs: props?.azs,
        privateSubnets: props?.privateSubnets,
        publicSubnets: props?.publicSubnets,
        enableNatGateway: props?.enableNATGateway ?? false,
      });
    }
  }
  sayHello(): string {
    return "hello, world!"
  }
}
