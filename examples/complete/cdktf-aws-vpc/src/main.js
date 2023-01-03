"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const provider_1 = require("../.gen/providers/aws/provider");
const vpc_1 = require("../.gen/modules/vpc");
const cdktf_tf_module_stack_1 = require("cdktf-tf-module-stack");
class MyVpcStack extends cdktf_tf_module_stack_1.TFModuleStack {
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
new MyVpcStack(app, "hello-terraform");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBMkI7QUFDM0IsNkRBQTZEO0FBQzdELDZDQUEwQztBQUMxQyxpRUFLaUM7QUFDakMsTUFBTSxVQUFXLFNBQVEscUNBQWE7SUFDcEMsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLDJDQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxzQkFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDM0IsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSx3Q0FBZ0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2pELElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLFlBQVk7WUFDekIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztZQUNqQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUM3RCxhQUFhLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztZQUNsRSxnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksc0NBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzlCLEtBQUssRUFBRSxRQUFRLENBQUMsV0FBVztTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiY2RrdGZcIlxuaW1wb3J0IHsgQXdzUHJvdmlkZXIgfSBmcm9tIFwiLi4vLmdlbi9wcm92aWRlcnMvYXdzL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBWcGMgfSBmcm9tICcuLi8uZ2VuL21vZHVsZXMvdnBjJztcbmltcG9ydCB7XG4gICAgVEZNb2R1bGVTdGFjayxcbiAgICBURk1vZHVsZVZhcmlhYmxlLFxuICAgIFRGTW9kdWxlT3V0cHV0LFxuICAgIFByb3ZpZGVyUmVxdWlyZW1lbnQsXG4gIH0gZnJvbSBcImNka3RmLXRmLW1vZHVsZS1zdGFja1wiO1xuY2xhc3MgTXlWcGNTdGFjayBleHRlbmRzIFRGTW9kdWxlU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBuZXcgUHJvdmlkZXJSZXF1aXJlbWVudCh0aGlzLCBcIm51bGxcIiwgXCJ+PiAyLjBcIik7XG5cbiAgICBuZXcgQXdzUHJvdmlkZXIodGhpcywgXCJhd3NcIiwge1xuICAgICAgcmVnaW9uOiBcInVzLWVhc3QtMVwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHZhcjEgPSBuZXcgVEZNb2R1bGVWYXJpYWJsZSh0aGlzLCBcInZwY05hbWVcIiwge1xuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdmFyaWFibGVcIixcbiAgICAgIGRlZmF1bHQ6IFwiZGVmYXVsdFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzb3VyY2UgPSBuZXcgVnBjKHRoaXMsICdNeVZwYycsIHtcbiAgICAgIG5hbWU6IHZhcjEuc3RyaW5nVmFsdWUsXG4gICAgICBjaWRyOiAnMTAuMC4wLjAvMTYnLFxuICAgICAgYXpzOiBbJ3VzLWVhc3QtMWEnLCAndXMtZWFzdC0xYiddLFxuICAgICAgcHJpdmF0ZVN1Ym5ldHM6IFsnMTAuMC4xLjAvMjQnLCAnMTAuMC4yLjAvMjQnLCAnMTAuMC4zLjAvMjQnXSxcbiAgICAgIHB1YmxpY1N1Ym5ldHM6IFsnMTAuMC4xMDEuMC8yNCcsICcxMC4wLjEwMi4wLzI0JywgJzEwLjAuMTAzLjAvMjQnXSxcbiAgICAgIGVuYWJsZU5hdEdhdGV3YXk6IHRydWVcbiAgICB9KTtcbiAgICBuZXcgVEZNb2R1bGVPdXRwdXQodGhpcywgXCJ2cGNJZFwiLCB7XG4gICAgICAgIHZhbHVlOiByZXNvdXJjZS52cGNJZE91dHB1dCxcbiAgICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBNeVZwY1N0YWNrKGFwcCwgXCJoZWxsby10ZXJyYWZvcm1cIik7XG5hcHAuc3ludGgoKTtcblxuIl19