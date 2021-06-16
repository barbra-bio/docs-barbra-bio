/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b8bc8a60b94684a4342aa5e20c3b86e"
  },
  {
    "url": "a-fondo/amenorrea-hipotalámica/consecuencias-de-la-AH.html",
    "revision": "a5f653c5fc505a4aa8760d60589cccc3"
  },
  {
    "url": "a-fondo/amenorrea-hipotalámica/qué-es-la-AH.html",
    "revision": "913957f337bdd83f6bd8ef8472b41e29"
  },
  {
    "url": "a-fondo/amenorrea-hipotalámica/revirtiendo-mi-AH.html",
    "revision": "4513ea3085043788b071f7f4f76eb7dd"
  },
  {
    "url": "a-fondo/anticonceptivos-hormonales/los-efectos-de-los-anticonceptivos.html",
    "revision": "6f1d01b2e31fdc313d256e3f4a7e6386"
  },
  {
    "url": "a-fondo/ciclo-menstrual/dominancia-de-estrógenos.html",
    "revision": "e522aca80869937e377b159da471f96f"
  },
  {
    "url": "a-fondo/ciclo-menstrual/fase-folicular-y-estrógenos.html",
    "revision": "967a4c39266742bb2ef0e2cff46c8434"
  },
  {
    "url": "a-fondo/ciclo-menstrual/fase-lútea-y-progesterona.html",
    "revision": "ec17a730ad3565b5e02c1481c17d562e"
  },
  {
    "url": "a-fondo/ciclo-menstrual/la-importancia-del-ciclo.html",
    "revision": "b70debdca206b5e9c5f7f6269b29dda0"
  },
  {
    "url": "a-fondo/ciclo-menstrual/ovulación.html",
    "revision": "5d06212e95d7c002e36eed6a0b8fc52d"
  },
  {
    "url": "a-fondo/ciclo-menstrual/progesterona-baja.html",
    "revision": "442c32b4fd163f03ec330857b36507f2"
  },
  {
    "url": "acerca-del-sitio.html",
    "revision": "c017602614eb259bf76730443c80e09a"
  },
  {
    "url": "assets/css/0.styles.197540b8.css",
    "revision": "2ecdea949bcb7e0d1ac1959ccb9201e6"
  },
  {
    "url": "assets/img/curva.e36330dc.jpg",
    "revision": "e36330dc976a8150c4e2da23f02280d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.193c964e.js",
    "revision": "cc7090be216c307727af69e591d4f31d"
  },
  {
    "url": "assets/js/11.35c7f281.js",
    "revision": "bc785f2e6081f03b7e79fa246331a8c7"
  },
  {
    "url": "assets/js/12.d70b68a8.js",
    "revision": "ddd1a33d5eb45e8ad9e689d3070b1c96"
  },
  {
    "url": "assets/js/13.982c88d8.js",
    "revision": "77fcb179b225551dc69cecc24d33785b"
  },
  {
    "url": "assets/js/14.6d926e47.js",
    "revision": "75d819aa5eb0299a2d953d7fa6c0caca"
  },
  {
    "url": "assets/js/15.d5f97cd7.js",
    "revision": "c87d248b7fb8f3a5c90a18a1422d4fcd"
  },
  {
    "url": "assets/js/16.0d358358.js",
    "revision": "df59582accdb7e5fc1c154d84aba7e74"
  },
  {
    "url": "assets/js/17.67c028fb.js",
    "revision": "32ec592b1c7b59858541cc4b3fd61192"
  },
  {
    "url": "assets/js/18.e35d48e6.js",
    "revision": "7f9c51a0f7097b4a1610c617aaceeb0f"
  },
  {
    "url": "assets/js/19.7680155e.js",
    "revision": "012364b64188a4206b2b72b8e6210c5b"
  },
  {
    "url": "assets/js/2.a9208d7d.js",
    "revision": "21c821732a0a1fc52a066be82f7eb94a"
  },
  {
    "url": "assets/js/20.833dbaab.js",
    "revision": "1769759444054a4687287461ff8c6264"
  },
  {
    "url": "assets/js/21.244e8a34.js",
    "revision": "33dfd82c8c9257b81053f66928530720"
  },
  {
    "url": "assets/js/22.c580139c.js",
    "revision": "8304a00cfb89b24f7f908a8a82dff2ef"
  },
  {
    "url": "assets/js/23.8259b942.js",
    "revision": "7c05e1b2800036e949eeb4e45d1f81cc"
  },
  {
    "url": "assets/js/24.9e6768b4.js",
    "revision": "102ff54044ca06b00c6715015765f9b5"
  },
  {
    "url": "assets/js/25.184a2070.js",
    "revision": "27e8b425b8db595d8a1b1710f83b99a6"
  },
  {
    "url": "assets/js/26.ba61930c.js",
    "revision": "e88633e7c4302841615cd20200194245"
  },
  {
    "url": "assets/js/27.44caee2d.js",
    "revision": "b6433046633cf5c937d11e240a3fa1ad"
  },
  {
    "url": "assets/js/3.6c591d88.js",
    "revision": "cea064c0787686c01f255bc8e5a8edb6"
  },
  {
    "url": "assets/js/4.40bc4bab.js",
    "revision": "137dde27042c97bfe6cb9f6d7a67f486"
  },
  {
    "url": "assets/js/5.f7ad8ff5.js",
    "revision": "a14bc0f463443cc7a44a5e16bff2068b"
  },
  {
    "url": "assets/js/6.524d0527.js",
    "revision": "ab342a6adbef1e81be54d980b1b2d3fd"
  },
  {
    "url": "assets/js/7.03558ca8.js",
    "revision": "3700881144a641f04546353e4ebbde3c"
  },
  {
    "url": "assets/js/8.a8f690d8.js",
    "revision": "10802b152820bddaf1cbb00a12cc6366"
  },
  {
    "url": "assets/js/9.3c307652.js",
    "revision": "9d2262e1560d1a949d0a1a4b4e0b4e61"
  },
  {
    "url": "assets/js/app.7d02cfaf.js",
    "revision": "e6731443c9ed6938d1e9843f72159428"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "29782e15f9cce5f4962d70ade7c6f8df"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "72566b139a13b443754332a98671abf0"
  },
  {
    "url": "index.html",
    "revision": "d19fd9aebbed6eeb68675832af4fca3c"
  },
  {
    "url": "logo.svg",
    "revision": "8f6564887e0fa62933abb2ae8529e68a"
  },
  {
    "url": "reportes.html",
    "revision": "6027bfa70a842f742151b68abff7592a"
  },
  {
    "url": "yeahscience/cortisol-elevado.html",
    "revision": "44e301fe352ffbd3d438614d49d73bac"
  },
  {
    "url": "yeahscience/dejar-los-carbos.html",
    "revision": "1570bc5e9009caeb805df87ea33d58e4"
  },
  {
    "url": "yeahscience/las-ventajas-del-almidón.html",
    "revision": "21234bb7e773f1dc4bd2b070525ad301"
  },
  {
    "url": "yeahscience/luz-azul.html",
    "revision": "9afc7996b057a50a94062dbb3a8c02e5"
  },
  {
    "url": "yeahscience/método-sintotérmico.html",
    "revision": "369f005bc47a17d0d6f1513e1d2185f7"
  },
  {
    "url": "yeahscience/zanahoria-1-todos-dias.html",
    "revision": "71d301439b628543c5c72ac6552476df"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
