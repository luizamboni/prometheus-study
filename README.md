Prometheus study
===


Consume endpoints to gen metrics
```bash
 $ watch curl http://localhost:3000/resource
```


Then, enter in Prometheus: http://localhost:9090
queries:

http_request_duration_seconds_count{instance="app:3000",job="app",method="GET",status_code="200"}	