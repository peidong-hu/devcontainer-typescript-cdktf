import { Construct } from "constructs";
import { Vpc } from "../.gen/modules/vpc";
export declare class VPCProps {
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
    constructor();
}
export declare class VPC extends Construct {
    awsvpc: Vpc;
    constructor(id: string, scope?: Construct, props?: VPCProps);
    sayHello(): string;
}
