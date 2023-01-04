"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const provider_1 = require("../.gen/providers/aws/provider");
const vpc_1 = require("../.gen/modules/vpc");
const cdktf_tf_module_stack_1 = require("cdktf-tf-module-stack");
class MyVpcModule extends cdktf_tf_module_stack_1.TFModuleStack {
    constructor(scope, id) {
        super(scope, id);
        new cdktf_tf_module_stack_1.ProviderRequirement(this, "null", "~> 2.0");
        new provider_1.AwsProvider(this, "aws", {
            region: "us-east-1",
        });
        const var1 = new cdktf_tf_module_stack_1.TFModuleVariable(this, "vpcName", {
            type: "string",
            description: "A variable",
            default: "default",
        });
        const resource = new vpc_1.Vpc(this, 'MyVpc', {
            name: var1.stringValue,
            cidr: '10.0.0.0/16',
            azs: ['us-east-1a', 'us-east-1b'],
            privateSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
            publicSubnets: ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
            enableNatGateway: true
        });
        new cdktf_tf_module_stack_1.TFModuleOutput(this, "vpcId", {
            value: resource.vpcIdOutput,
        });
    }
}
const app = new cdktf_1.App();
new MyVpcModule(app, "hello-terraform");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBMkI7QUFDM0IsNkRBQTZEO0FBQzdELDZDQUEwQztBQUMxQyxpRUFLaUM7QUFDakMsTUFBTSxXQUFZLFNBQVEscUNBQWE7SUFDckMsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLDJDQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxzQkFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDM0IsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSx3Q0FBZ0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2pELElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLFlBQVk7WUFDekIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztZQUNqQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUM3RCxhQUFhLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztZQUNsRSxnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksc0NBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzlCLEtBQUssRUFBRSxRQUFRLENBQUMsV0FBVztTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3hDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiY2RrdGZcIlxuaW1wb3J0IHsgQXdzUHJvdmlkZXIgfSBmcm9tIFwiLi4vLmdlbi9wcm92aWRlcnMvYXdzL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBWcGMgfSBmcm9tICcuLi8uZ2VuL21vZHVsZXMvdnBjJztcbmltcG9ydCB7XG4gICAgVEZNb2R1bGVTdGFjayxcbiAgICBURk1vZHVsZVZhcmlhYmxlLFxuICAgIFRGTW9kdWxlT3V0cHV0LFxuICAgIFByb3ZpZGVyUmVxdWlyZW1lbnQsXG4gIH0gZnJvbSBcImNka3RmLXRmLW1vZHVsZS1zdGFja1wiO1xuY2xhc3MgTXlWcGNNb2R1bGUgZXh0ZW5kcyBURk1vZHVsZVN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgbmV3IFByb3ZpZGVyUmVxdWlyZW1lbnQodGhpcywgXCJudWxsXCIsIFwifj4gMi4wXCIpO1xuXG4gICAgbmV3IEF3c1Byb3ZpZGVyKHRoaXMsIFwiYXdzXCIsIHtcbiAgICAgIHJlZ2lvbjogXCJ1cy1lYXN0LTFcIixcbiAgICB9KTtcbiAgICBjb25zdCB2YXIxID0gbmV3IFRGTW9kdWxlVmFyaWFibGUodGhpcywgXCJ2cGNOYW1lXCIsIHtcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHZhcmlhYmxlXCIsXG4gICAgICBkZWZhdWx0OiBcImRlZmF1bHRcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc291cmNlID0gbmV3IFZwYyh0aGlzLCAnTXlWcGMnLCB7XG4gICAgICBuYW1lOiB2YXIxLnN0cmluZ1ZhbHVlLFxuICAgICAgY2lkcjogJzEwLjAuMC4wLzE2JyxcbiAgICAgIGF6czogWyd1cy1lYXN0LTFhJywgJ3VzLWVhc3QtMWInXSxcbiAgICAgIHByaXZhdGVTdWJuZXRzOiBbJzEwLjAuMS4wLzI0JywgJzEwLjAuMi4wLzI0JywgJzEwLjAuMy4wLzI0J10sXG4gICAgICBwdWJsaWNTdWJuZXRzOiBbJzEwLjAuMTAxLjAvMjQnLCAnMTAuMC4xMDIuMC8yNCcsICcxMC4wLjEwMy4wLzI0J10sXG4gICAgICBlbmFibGVOYXRHYXRld2F5OiB0cnVlXG4gICAgfSk7XG4gICAgbmV3IFRGTW9kdWxlT3V0cHV0KHRoaXMsIFwidnBjSWRcIiwge1xuICAgICAgICB2YWx1ZTogcmVzb3VyY2UudnBjSWRPdXRwdXQsXG4gICAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5uZXcgTXlWcGNNb2R1bGUoYXBwLCBcImhlbGxvLXRlcnJhZm9ybVwiKTtcbmFwcC5zeW50aCgpO1xuXG4iXX0=