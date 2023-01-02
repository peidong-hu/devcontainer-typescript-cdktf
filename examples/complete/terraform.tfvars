region = "us-east-1"

availability_zones = ["us-east-1a", "us-east-1b"]

namespace = "tftest"

stage = "test"

name = "vpc-peering"

requestor_vpc_cidr = "172.16.0.0/16"

acceptor_vpc_cidr = "172.32.0.0/16"

requestor_additional_ipv4_cidr_block = "100.64.0.0/16"
