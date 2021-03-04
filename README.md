# kubernetes-helm-node-server
Simple node server to handle http requests. Deploying this server on a kubernetes cluster using docker as runtime execution

To create the helm chart :
```helm create node-chart```

To run the cluster up on kubernetes through helm - 
```helm install hello-node-chart node-chart --values node-chart/values.yaml```

If this throws an error, check if kubernetes is running using - 
```kubectl cluster-info```

If this doesn't show an output, check your kubernetes installation. If done through minikube, run the following - 
```minikube start```
