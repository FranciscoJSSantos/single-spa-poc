import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pupj/mf-header",
  app: () => System.import<any>("@pupj/mf-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@pupj/mf-login",
  app: () => System.import<any>("@pupj/mf-login"),
  activeWhen: ["/mf-login"],
});

registerApplication({
  name: "@pupj/mf-portal",
  app: () => System.import<any>("@pupj/mf-portal"),
  activeWhen: ["/mf-portal"],
});

registerApplication({
  name: "@pupj/mf-home",
  app: () => System.import<any>("@pupj/mf-home"),
  activeWhen: ["/mf-home"],
});

start({
  urlRerouteOnly: true,
});
