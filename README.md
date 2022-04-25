## 🦕 Deno Script to Create lots of Workloads in Rancher

Just a simple script to create lots of workloads with Deno.

3 command line arguments are required in this order:

1. Rancher URL (without the trailing slash & without `https://`)
2. Cluster ID
3. Bearer Token

```shell
 deno run --allow-net workload.ts example-site.com custer-id-goes-here bearer-token-goes-here                       
```

If running against a Rancher server with self signed certs add this flag: `--unsafely-ignore-certificate-errors`

```shell
 deno run --allow-net --unsafely-ignore-certificate-errors workload.ts example-site.com custer-id-goes-here bearer-token-goes-here  
```
