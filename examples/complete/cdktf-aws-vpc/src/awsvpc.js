"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPC = exports.VPCProps = void 0;
const constructs_1 = require("constructs");
const vpc_1 = require("../.gen/modules/vpc");
class VPCProps {
    // TODO: enableFlowLog
    constructor() {
        this.vpcname = "terraform-cdk-aws-vpc-test2";
        this.cidr = "172.64.0.0/16";
        this.privateSubnets = [];
        this.publicSubnets = [];
        this.azs = ["us-east-1a", "us-east-1b"];
        this.region = "us-east-1";
    }
}
exports.VPCProps = VPCProps;
class VPC extends constructs_1.Construct {
    constructor(id, scope, props) {
        var _a;
        if (scope == null || id == 'undefined' || props == null)
            return;
        else {
            super(scope, id);
            this.awsvpc = new vpc_1.Vpc(this, id, {
                name: props === null || props === void 0 ? void 0 : props.vpcname,
                cidr: props === null || props === void 0 ? void 0 : props.cidr,
                azs: props === null || props === void 0 ? void 0 : props.azs,
                privateSubnets: props === null || props === void 0 ? void 0 : props.privateSubnets,
                publicSubnets: props === null || props === void 0 ? void 0 : props.publicSubnets,
                enableNatGateway: (_a = props === null || props === void 0 ? void 0 : props.enableNATGateway) !== null && _a !== void 0 ? _a : false,
            });
        }
    }
    sayHello() {
        return "hello, world!";
    }
}
exports.VPC = VPC;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzdnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXdzdnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUN2Qyw2Q0FBMEM7QUFFMUMsTUFBYSxRQUFRO0lBV25CLHNCQUFzQjtJQUN0QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztJQUM5QixDQUFDO0NBQ0E7QUFwQkQsNEJBb0JDO0FBRUQsTUFBYSxHQUFJLFNBQVEsc0JBQVM7SUFFaEMsWUFBWSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxLQUFnQjs7UUFDekQsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxXQUFXLElBQUksS0FBSyxJQUFJLElBQUk7WUFDbkQsT0FBTTthQUNMO1lBQ0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTztnQkFDcEIsSUFBSSxFQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJO2dCQUNqQixHQUFHLEVBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEdBQUc7Z0JBQ2YsY0FBYyxFQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxjQUFjO2dCQUNyQyxhQUFhLEVBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGFBQWE7Z0JBQ25DLGdCQUFnQixFQUFFLE1BQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGdCQUFnQixtQ0FBSSxLQUFLO2FBQ25ELENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLGVBQWUsQ0FBQTtJQUN4QixDQUFDO0NBQ0Y7QUFyQkQsa0JBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IFZwYyB9IGZyb20gXCIuLi8uZ2VuL21vZHVsZXMvdnBjXCI7XG5cbmV4cG9ydCBjbGFzcyBWUENQcm9wcyB7XG4gIHJlYWRvbmx5IHZwY25hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgY2lkcjogc3RyaW5nO1xuICByZWFkb25seSBwcml2YXRlU3VibmV0czogc3RyaW5nW107XG4gIHJlYWRvbmx5IHB1YmxpY1N1Ym5ldHM6IHN0cmluZ1tdO1xuICByZWFkb25seSBhenM6IHN0cmluZ1tdO1xuICByZWFkb25seSByZWdpb24/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVuYWJsZU5BVEdhdGV3YXk/OiBib29sZWFuO1xuICByZWFkb25seSBlbmFibGVWUE5HYXRld2F5PzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgZW5hYmxlRE5TSG9zdG5hbWVzPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgZW5hYmxlRE5TU3VwcG9ydD86IGJvb2xlYW47XG4gIC8vIFRPRE86IGVuYWJsZUZsb3dMb2dcbiAgY29uc3RydWN0b3IoKSAgICAge1xuICAgIHRoaXMudnBjbmFtZSA9IFwidGVycmFmb3JtLWNkay1hd3MtdnBjLXRlc3QyXCI7XG4gICAgdGhpcy5jaWRyID0gXCIxNzIuNjQuMC4wLzE2XCI7XG4gICAgdGhpcy5wcml2YXRlU3VibmV0cyA9IFtdO1xuICAgIHRoaXMucHVibGljU3VibmV0cyA9IFtdO1xuICAgIHRoaXMuYXpzID0gW1widXMtZWFzdC0xYVwiLCBcInVzLWVhc3QtMWJcIl07XG4gICAgdGhpcy5yZWdpb24gPSBcInVzLWVhc3QtMVwiO1xufVxufVxuXG5leHBvcnQgY2xhc3MgVlBDIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgYXdzdnBjOiBWcGM7XG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHNjb3BlPzogQ29uc3RydWN0LCBwcm9wcz86IFZQQ1Byb3BzKSB7XG4gICAgaWYgKHNjb3BlID09IG51bGwgfHwgaWQgPT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuXG4gICAgZWxzZSB7XG4gICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICB0aGlzLmF3c3ZwYyA9IG5ldyBWcGModGhpcywgaWQsIHtcbiAgICAgICAgbmFtZTogcHJvcHM/LnZwY25hbWUsXG4gICAgICAgIGNpZHI6IHByb3BzPy5jaWRyLFxuICAgICAgICBhenM6IHByb3BzPy5henMsXG4gICAgICAgIHByaXZhdGVTdWJuZXRzOiBwcm9wcz8ucHJpdmF0ZVN1Ym5ldHMsXG4gICAgICAgIHB1YmxpY1N1Ym5ldHM6IHByb3BzPy5wdWJsaWNTdWJuZXRzLFxuICAgICAgICBlbmFibGVOYXRHYXRld2F5OiBwcm9wcz8uZW5hYmxlTkFUR2F0ZXdheSA/PyBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzYXlIZWxsbygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImhlbGxvLCB3b3JsZCFcIlxuICB9XG59XG4iXX0=