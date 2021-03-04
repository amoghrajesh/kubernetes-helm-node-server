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

To create a simple proxy using port forwarding - 
1. Get any of the many pods of the deployment using - ```kubectl get pods```
2. Use port forwarding like - ```kubectl port-forward <name of the pod> <host-port>:<deployment-port>```

For creating a new release, we can use helm upgrade as a much simpler alternative to the kubectl commands -
```helm upgrade hello-node-chart node-chart --reset-values```

Check the history of the deployment using -
```helm history <release name>```

Check the replication using -
![img.png](img.png)