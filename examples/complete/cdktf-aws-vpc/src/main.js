"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const provider_1 = require("../.gen/providers/aws/provider");
const vpc_1 = require("../.gen/modules/vpc");
class MyStack extends cdktf_1.TerraformStack {
    constructor(scope, id) {
        super(scope, id);
        new provider_1.AwsProvider(this, "aws", {
            region: "us-east-1",
        });
        new vpc_1.Vpc(this, 'MyVpc', {
            name: 'my-vpc',
            cidr: '10.0.0.0/16',
            azs: ['us-east-1a', 'us-east-1b'],
            privateSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
            publicSubnets: ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
            enableNatGateway: true
        });
    }
}
const app = new cdktf_1.App();
new MyStack(app, "hello-terraform");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBNEM7QUFDNUMsNkRBQTZEO0FBQzdELDZDQUEwQztBQU8xQyxNQUFNLE9BQVEsU0FBUSxzQkFBYztJQUNsQyxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksc0JBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxXQUFXO1NBQ3BCLENBQUMsQ0FBQztRQUVILElBQUksU0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDckIsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsYUFBYTtZQUNuQixHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO1lBQzdELGFBQWEsRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1lBQ2xFLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgQXBwLCBUZXJyYWZvcm1TdGFjayB9IGZyb20gXCJjZGt0ZlwiO1xuaW1wb3J0IHsgQXdzUHJvdmlkZXIgfSBmcm9tIFwiLi4vLmdlbi9wcm92aWRlcnMvYXdzL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBWcGMgfSBmcm9tICcuLi8uZ2VuL21vZHVsZXMvdnBjJztcbmltcG9ydCB7XG4gICAgVEZNb2R1bGVTdGFjayxcbiAgICBURk1vZHVsZVZhcmlhYmxlLFxuICAgIFRGTW9kdWxlT3V0cHV0LFxuICAgIFByb3ZpZGVyUmVxdWlyZW1lbnQsXG4gIH0gZnJvbSBcImNka3RmLXRmLW1vZHVsZS1zdGFja1wiO1xuY2xhc3MgTXlTdGFjayBleHRlbmRzIFRlcnJhZm9ybVN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICBuZXcgQXdzUHJvdmlkZXIodGhpcywgXCJhd3NcIiwge1xuICAgICAgcmVnaW9uOiBcInVzLWVhc3QtMVwiLFxuICAgIH0pO1xuXG4gICAgbmV3IFZwYyh0aGlzLCAnTXlWcGMnLCB7XG4gICAgICBuYW1lOiAnbXktdnBjJyxcbiAgICAgIGNpZHI6ICcxMC4wLjAuMC8xNicsXG4gICAgICBhenM6IFsndXMtZWFzdC0xYScsICd1cy1lYXN0LTFiJ10sXG4gICAgICBwcml2YXRlU3VibmV0czogWycxMC4wLjEuMC8yNCcsICcxMC4wLjIuMC8yNCcsICcxMC4wLjMuMC8yNCddLFxuICAgICAgcHVibGljU3VibmV0czogWycxMC4wLjEwMS4wLzI0JywgJzEwLjAuMTAyLjAvMjQnLCAnMTAuMC4xMDMuMC8yNCddLFxuICAgICAgZW5hYmxlTmF0R2F0ZXdheTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBNeVN0YWNrKGFwcCwgXCJoZWxsby10ZXJyYWZvcm1cIik7XG5hcHAuc3ludGgoKTtcblxuIl19