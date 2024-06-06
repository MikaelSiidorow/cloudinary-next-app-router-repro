# cloudinary-next-app-router-repro

## Description

### Setup

```bash
# copy and fill .env
cp .env.example .env.local

# install deps
pnpm install
```

### Dev error

```bash
# start server
pnpm dev
```

Navigate to http://localhost:3000/api and observe the error in the console.

### Prod error

```bash
# build app
pnpm build

# start app
pnpm start
```

Navigate to http://localhost:3000/api and observe the error in the console.

## Example errors

### Dev

```
 GET /api 500 in 87ms
 ⨯ Error: ENOENT: no such file or directory, open '[project]/node_modules/.pnpm/cloudinary@2.2.0/node_modules/cloudinary/lib/package.json'
    at Object.readFileSync (node:fs:453:20)
    at getSDKVersions (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/chunks/31154_cloudinary_4875f0._.js:502:28)
    at Object.url (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/chunks/31154_cloudinary_4875f0._.js:1699:60)
    at Object.url (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/chunks/31154_cloudinary_4875f0._.js:5271:29)
    at GET (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/chunks/app_api_route_ts_5a7b13._.js:15:217)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:53452
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/trace/tracer.js:140:36
    at NoopContextManager.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/trace/tracer.js:122:103
    at NoopContextManager.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NextTracerImpl.trace (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/trace/tracer.js:122:28)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:46261
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at Object.wrap (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:39188)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:45368
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at Object.wrap (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:37583)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:45330
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at e_.execute (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:44777)
    at e_.handle (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:54711)
    at doRender (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1377:60)
    at cacheEntry.responseCache.get.routeKind (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1599:34)
    at ResponseCache.get (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/response-cache/index.js:49:26)
    at DevServer.renderToResponseWithComponentsImpl (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1507:53)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1002:121
    at NextTracerImpl.trace (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/trace/tracer.js:105:20)
    at DevServer.renderToResponseWithComponents (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1002:41)
    at DevServer.renderPageComponent (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1924:35)
    at async DevServer.renderToResponseImpl (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:1962:32)
    at async DevServer.pipeImpl (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:920:25)
    at async NextNodeServer.handleCatchallRenderRequest (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/next-server.js:272:17)
    at async DevServer.handleRequestImpl (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/base-server.js:816:17)
    at async /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/next-dev-server.js:339:20
    at async Span.traceAsyncFn (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.handleRequest (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/next-dev-server.js:336:24)
    at async invokeRender (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/router-server.js:174:21)
    at async handleRequest (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/router-server.js:353:24)
    at async requestHandlerImpl (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/router-server.js:377:13)
    at async Server.requestListener (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/start-server.js:141:13) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '[project]/node_modules/.pnpm/cloudinary@2.2.0/node_modules/cloudinary/lib/package.json'
}
 GET /api 500 in 33ms
```

### Prod

```
 ⨯ Error: Must supply sdkSemver
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/app/api/route.js:9:10224
    at e.url (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/app/api/route.js:9:27351)
    at e.url (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/app/api/route.js:1:17885)
    at c (/Users/<username>/Documents/cloudinary-next-app-router-repro/.next/server/app/api/route.js:1:968)
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:34672
    at /Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/trace/tracer.js:140:36
    at NoopContextManager.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/<username>/Documents/cloudinary-next-app-router-repro/node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
```
