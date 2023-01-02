"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awsvpc_1 = require("./awsvpc");
const cdktf_1 = require("cdktf");
class MyStack extends cdktf_1.TerraformStack {
    constructor(scope, stackname, vpcprops) {
        super(scope, stackname);
        // Create VPC with Typescript and CKDTF
        new awsvpc_1.VPC(stackname + "-vpc", scope, vpcprops);
    }
}
const app = new cdktf_1.App();
let vpcProps = new awsvpc_1.VPCProps();
new MyStack(app, "cdktf-typescript-aws-vpc-test", vpcProps);
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbiBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbiBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXlDO0FBQ3pDLGlDQUE0QztBQUc1QyxNQUFNLE9BQVEsU0FBUSxzQkFBYztJQUNoQyxZQUFZLEtBQWdCLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtRQUNqRSxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBR3hCLHVDQUF1QztRQUN6QyxJQUFJLFlBQUcsQ0FBQyxTQUFTLEdBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUzQyxDQUFDO0NBQ0Y7QUFFSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksaUJBQVEsRUFBRSxDQUFDO0FBQzlCLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgVlBDLCBWUENQcm9wcyB9IGZyb20gXCIuL2F3c3ZwY1wiO1xuaW1wb3J0IHsgQXBwLCBUZXJyYWZvcm1TdGFjayB9IGZyb20gXCJjZGt0ZlwiO1xuXG5cbmNsYXNzIE15U3RhY2sgZXh0ZW5kcyBUZXJyYWZvcm1TdGFjayB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgc3RhY2tuYW1lOiBzdHJpbmcsIHZwY3Byb3BzOiBWUENQcm9wcykge1xuICAgICAgc3VwZXIoc2NvcGUsIHN0YWNrbmFtZSk7XG5cbiAgXG4gICAgICAvLyBDcmVhdGUgVlBDIHdpdGggVHlwZXNjcmlwdCBhbmQgQ0tEVEZcbiAgICBuZXcgVlBDKHN0YWNrbmFtZStcIi12cGNcIiwgc2NvcGUsIHZwY3Byb3BzKTtcbiAgXG4gICAgfVxuICB9XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmxldCB2cGNQcm9wcyA9IG5ldyBWUENQcm9wcygpO1xubmV3IE15U3RhY2soYXBwLCBcImNka3RmLXR5cGVzY3JpcHQtYXdzLXZwYy10ZXN0XCIsIHZwY1Byb3BzKTtcbmFwcC5zeW50aCgpOyJdfQ==