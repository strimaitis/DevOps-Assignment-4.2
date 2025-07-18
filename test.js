# Ref: https://github.com/ralmhana/helloworld-demo-node/blob/main/test.js

import http from "k6/http";
import { check, sleep } from "k6";

// Test configuration
export const options = {
  thresholds: {
    // Assert that 90% of requests finish within 3000ms.
    http_req_duration: ["p(90) < 100"],
  },
  // Ramp the number of virtual users up and down
  stages: [
    { duration: "30s", target: 15 },
    { duration: "1m", target: 15 },
    { duration: "20s", target: 0 },
  ],
};

// Simulated user behavior
export default function () {
  let res = http.get("https://quickpizza.grafana.com");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
