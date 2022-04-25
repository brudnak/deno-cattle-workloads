import { parse } from "https://deno.land/std/flags/mod.ts"

const rancherServerUrl = Deno.args[0] as string
const clusterID = Deno.args[1] as string
const token = Deno.args[2] as string
const workloadCount = 3000
const workloadName = "deno-workload"

async function createWorkload(name: string, count: number) {

let payload = `{"type":"apps.deployment","metadata":{"namespace":"default","labels":{"workload.user.cattle.io/workloadselector":"apps.deployment-default-${name}"},"name":"${name}"},"spec":{"replicas":1,"template":{"spec":{"restartPolicy":"Always","containers":[{"imagePullPolicy":"Always","name":"container-0","__active":true,"volumeMounts":[],"image":"brudnak/hello-rancher-golang"}],"initContainers":[],"imagePullSecrets":[],"volumes":[],"affinity":{}},"metadata":{"labels":{"workload.user.cattle.io/workloadselector":"apps.deployment-default-${name}"}}},"selector":{"matchLabels":{"workload.user.cattle.io/workloadselector":"apps.deployment-default-${name}"}}}}`

const response = await fetch(`https://${rancherServerUrl}/k8s/clusters/${clusterID}/v1/apps.deployments`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": `Bearer ${token}`
  },
  body: payload
});

await response.json()
console.log(`workload #${count} response code: ${response.status}`)
}


  for (let i = 0; i < workloadCount; i++) {
     const done = await createWorkload(`${workloadName}-${i}`, i)
  }

  export{}



