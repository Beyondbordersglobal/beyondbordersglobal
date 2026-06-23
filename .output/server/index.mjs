globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/company-profile.pdf": {
    "type": "application/pdf",
    "etag": '"774-eafk5Lh5+A/UlZzYZBBt4QhC/0E"',
    "mtime": "2026-06-22T15:56:01.796Z",
    "size": 1908,
    "path": "../public/company-profile.pdf"
  },
  "/assets/about-B96o5MTv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"202a-YGddBF9YfShUORijjMsXzIQiFZI"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 8234,
    "path": "../public/assets/about-B96o5MTv.js"
  },
  "/assets/become-a-distributor-DHokH1sC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d86-HErqPNzfjgcojcGq8t6SXDO+sTI"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 3462,
    "path": "../public/assets/become-a-distributor-DHokH1sC.js"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4"',
    "mtime": "2026-06-22T15:56:07.432Z",
    "size": 23,
    "path": "../public/robots.txt"
  },
  "/assets/become-a-supplier-Bosxmog3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ed6-JjMTfThRlUN/FhB3X5j/BJkw+pE"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 3798,
    "path": "../public/assets/become-a-supplier-Bosxmog3.js"
  },
  "/assets/bg-port-D5RDxnjh.jpg": {
    "type": "image/jpeg",
    "etag": '"5199c-6GZneZ1v+xIuNXjiGQQNiTDtexo"',
    "mtime": "2026-06-23T13:18:38.186Z",
    "size": 334236,
    "path": "../public/assets/bg-port-D5RDxnjh.jpg"
  },
  "/assets/bg-warehouse-D2BaIw3i.jpg": {
    "type": "image/jpeg",
    "etag": '"3c5cf-vYTj6Qbb3jGk7sB3iGhpondc7pA"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 247247,
    "path": "../public/assets/bg-warehouse-D2BaIw3i.jpg"
  },
  "/assets/bg-cargo-BF12WPFS.jpg": {
    "type": "image/jpeg",
    "etag": '"29c4c-lUHwjeSLywPeZ/PTGq7RPy8Hd8o"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 171084,
    "path": "../public/assets/bg-cargo-BF12WPFS.jpg"
  },
  "/assets/circle-check-big-g8yEIElK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"be-DoX4cDBM3SaYzsoEKzImsiQTl+s"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 190,
    "path": "../public/assets/circle-check-big-g8yEIElK.js"
  },
  "/assets/cpu-h0CsKLZ3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"283-g8Z4vQhmYad0/Wpeq6F7ZbNQyqE"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 643,
    "path": "../public/assets/cpu-h0CsKLZ3.js"
  },
  "/assets/global-markets-9RH5i72a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9c7-NhhloNC5PPDUoIP7JnQN5EZp5hs"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 2503,
    "path": "../public/assets/global-markets-9RH5i72a.js"
  },
  "/assets/contact-oiJI3Y4n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13cc-wT8MWg8yb2ntO5t6aA7QrxFhu5M"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 5068,
    "path": "../public/assets/contact-oiJI3Y4n.js"
  },
  "/assets/index-DVUJaPh9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5cf1-/Cobbi2k1ydY1DH6FVizjTtlkso"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 23793,
    "path": "../public/assets/index-DVUJaPh9.js"
  },
  "/assets/PageHero-V0lPMGmj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6a4-L11cJjUmCprngSAKUNAwdqhhcdo"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 1700,
    "path": "../public/assets/PageHero-V0lPMGmj.js"
  },
  "/assets/industries-CZlqfdGn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-DLqpE0NydMW5yt258VWabGVyAwY"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 3449,
    "path": "../public/assets/industries-CZlqfdGn.js"
  },
  "/assets/index-BI3qJrmw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ba88-OdhfCoyLHvQeC8RrjDjoE8Zfrv8"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 375432,
    "path": "../public/assets/index-BI3qJrmw.js"
  },
  "/assets/products-C08QUn0W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1387-31UTD2T42liNyIosDC9lBqZMzsc"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 4999,
    "path": "../public/assets/products-C08QUn0W.js"
  },
  "/assets/services-D1F1KHDJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1834-E/S271YgmNqf9B9r6vQQKfCfs00"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 6196,
    "path": "../public/assets/services-D1F1KHDJ.js"
  },
  "/assets/shield-Bxr9XXVn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10c-0ujxNQaJzhgurBO+74/rBtkPIQw"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 268,
    "path": "../public/assets/shield-Bxr9XXVn.js"
  },
  "/assets/shirt-fohGD3Td.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-aUB8lTWzvFQr6b4js0Oxn0Cgi0c"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 646,
    "path": "../public/assets/shirt-fohGD3Td.js"
  },
  "/assets/shopping-bag-h-CEGyBF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"264-OECumsvOvHJpM/kz0dgjBc21d/U"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 612,
    "path": "../public/assets/shopping-bag-h-CEGyBF.js"
  },
  "/assets/sprout-DvdwiYxJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27a-2XNGqdXXBmy1O5hpH2pq/Nru2S4"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 634,
    "path": "../public/assets/sprout-DvdwiYxJ.js"
  },
  "/assets/truck-CgeA_UgI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"325-8n5hDB1iUP9EmcKytzq/Ul3hO9E"',
    "mtime": "2026-06-23T13:18:38.191Z",
    "size": 805,
    "path": "../public/assets/truck-CgeA_UgI.js"
  },
  "/assets/styles-Cl6FDO23.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"167e5-mofupJH5RthQPWxi6Jc/aMvkqJM"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 92133,
    "path": "../public/assets/styles-Cl6FDO23.css"
  },
  "/assets/users-DZBYYgoI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"636-AlCGcUr+CP+2G2BCEbGYg2IDMWY"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 1590,
    "path": "../public/assets/users-DZBYYgoI.js"
  },
  "/assets/WorldMap-CcRdxyYU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"981-uhgGUOiudBZ5k8ObFWCWLfISmmk"',
    "mtime": "2026-06-23T13:18:38.190Z",
    "size": 2433,
    "path": "../public/assets/WorldMap-CcRdxyYU.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_KcAdFg = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_KcAdFg };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
