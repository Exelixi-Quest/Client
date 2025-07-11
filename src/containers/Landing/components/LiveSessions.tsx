import React from "react";
import { Link } from "react-router-dom";
import { MacWindow } from "../mac-window";

export const LiveSessions: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Live Sessions</h2>
          <p className="text-gray-400 text-lg">
            Join our expert-led live coding sessions and workshops
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <MacWindow title="DevOps">
            <pre className="text-sm">
              <code>{`
apiVersion: v1
kind: Pod
metadata:
  name: exelixi-pod
spec:
  containers:
    - name: exelixi-container
      image: nginx:latest
      ports:
        - containerPort: 80
    `}</code>
            </pre>
          </MacWindow>
          <MacWindow title="Apigee">
            <pre className="text-sm">
              <code>{`
<?xml version="1.0" encoding="UTF-8"?>
<ProxyEndpoint name="default">
    <HTTPProxyConnection>
        <BasePath>/v1/hello</BasePath>
        <VirtualHost>default</VirtualHost>
    </HTTPProxyConnection>
    <RouteRule name="default">
      <TargetEndpoint>default</TargetEndpoint>
    </RouteRule>
</ProxyEndpoint>
              `}</code>
            </pre>
          </MacWindow>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/join"
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Join Live Session
          </Link>
        </div>
      </div>
    </section>
  );
}; 