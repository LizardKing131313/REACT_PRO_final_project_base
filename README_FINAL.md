# 1. Сделал tsconfig под себя
# 2. Сделал eslint под себя
# 3. Добавил сборку на vite
# 4. Добавил сборку на swc и esbuild
# 5. Обновил зависимости
# 6. Поправил код под новый линтер
# 7. Стабилизировал сборку на Webpack
  Результат сборки на Webpack:
```ignorelang
> react-final@1.0.0 build
> cross-env NODE_ENV=production webpack --config webpack/webpack.config.cjs --env env=prod

[dotenv@17.2.3] injecting env (1) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }
assets by path static/ 764 KiB
  asset static/scripts/main.de4fe679b71dc10cf108.js 714 KiB [emitted] [immutable] [minimized] [big] (name: main) 1 related asset
  asset static/styles/main.246ccfaf9993bfdfbf68.css 50.1 KiB [emitted] [immutable] (name: main)
asset index.html 559 bytes [emitted]
asset favicon.svg 380 bytes [emitted]
asset robots.txt 24 bytes [emitted] [from: public/robots.txt] [copied]
Entrypoint main [big] 764 KiB = static/styles/main.246ccfaf9993bfdfbf68.css 50.1 KiB static/scripts/main.de4fe679b71dc10cf108.js 714 KiB
orphan modules 3.11 MiB (javascript) 17.4 KiB (runtime) [orphan] 1102 modules
runtime modules 2.06 KiB 5 modules
cacheable modules 2.31 MiB (javascript) 50.1 KiB (css/mini-extract)
  javascript modules 2.31 MiB 21 modules
  css modules 50.1 KiB
    modules by path ./src/shared/ 12.4 KiB 7 modules
    modules by path ./src/widgets/ 7.51 KiB 5 modules
    modules by path ./src/pages/ 13.8 KiB 4 modules
    modules by path ./src/app/ 2.58 KiB 2 modules
    css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css 13.7 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  static/scripts/main.de4fe679b71dc10cf108.js (714 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (764 KiB)
      static/styles/main.246ccfaf9993bfdfbf68.css
      static/scripts/main.de4fe679b71dc10cf108.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.102.1 compiled with 3 warnings in 8766 ms

Process finished with exit code 0
```

Запуск DEV на webpack:
```ignorelang
> react-final@1.0.0 start
> webpack serve --config webpack/webpack.config.cjs --env env=dev

[dotenv@17.2.3] injecting env (1) from .env -- tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.105:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Work\react_final\webpack\dist' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
asset static/scripts/main.js 11.3 MiB [emitted] (name: main)
asset index.html 514 bytes [emitted]
asset favicon.svg 380 bytes [emitted]
asset robots.txt 24 bytes [emitted] [from: public/robots.txt] [copied]
orphan modules 1.19 MiB [orphan] 610 modules
runtime modules 32.6 KiB 18 modules
cacheable modules 3.78 MiB
  modules by path ./node_modules/ 3.4 MiB 411 modules
  modules by path ./src/ 397 KiB
    modules by path ./src/shared/ 202 KiB 71 modules
    modules by path ./src/pages/ 94.9 KiB 30 modules
    modules by path ./src/widgets/ 75 KiB 25 modules
    modules by path ./src/app/ 24 KiB
      modules by path ./src/app/styles/*.css 17.6 KiB 4 modules
      modules by path ./src/app/*.tsx 6.37 KiB
        ./src/app/App.tsx 1.47 KiB [built] [code generated]
        + 2 modules
    ./src/index.tsx 1.34 KiB [built] [code generated]
webpack 5.102.1 compiled successfully in 11422 ms
```
# 8. Запись профайлера исходного приложения
![До](./screenshots/before1.png)
# 9. Стабилизировал сборку на Vite
# 10. Стабилизировал сборку на EsBuild
# 11. Ленивый роутинг
# 12. Добавил кастомный тултип через React Portal
# 13. Добавил модальный диалог через React Portal
# 14. Рефакторинг на FSD
 - Вынес типы в entities
 - Вынес карточку товара в entities
 - Сделал виджет карточки товара
 - Добавил memo на компоненты
 - Добавил useMemo на список товаров
 - Ленивая загрузка карточек товаров
 - убрал проброс Product целиком в пропсы
 - useActionState на добавление в корзину
 - useOptimistic на лайк товара
 - вынес из шары все компоненты, которые касаются слоя продукта
 - обмазался мемо, колбеками и тд
# 15. Результат новой сборки на вебпаке
```ignorelang
"C:\Program Files\nodejs\npm.cmd" run build

> react-final@1.0.0 build
> cross-env NODE_ENV=production webpack --config webpack/webpack.config.cjs --env env=prod

[dotenv@17.2.3] injecting env (1) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }
assets by path static/ 785 KiB
  assets by path static/scripts/*.js 729 KiB
    asset static/scripts/main.70a8d162821bf24fd0a1.js 557 KiB [emitted] [immutable] [minimized] [big] (name: main) 1 related asset
    asset static/scripts/611.197ee7938dd138c05c49.js 141 KiB [emitted] [immutable] [minimized] (id hint: vendors)
    asset static/scripts/884.1966c076214f0074bda2.js 15.1 KiB [emitted] [immutable] [minimized]
    + 9 assets
  assets by path static/styles/*.css 56.6 KiB
    asset static/styles/main.89e6d7c921162bd2e8a5.css 26 KiB [emitted] [immutable] (name: main)
    asset static/styles/261.ade9a913510247dfed26.css 8.38 KiB [emitted] [immutable]
    asset static/styles/557.b8bcf9e7e6bff98db3a4.css 7.65 KiB [emitted] [immutable]
    asset static/styles/748.b8bcf9e7e6bff98db3a4.css 7.65 KiB [emitted] [immutable]
    + 4 assets
asset index.html 559 bytes [emitted]
asset favicon.svg 380 bytes [emitted]
asset robots.txt 24 bytes [emitted] [from: public/robots.txt] [copied]
Entrypoint main [big] 583 KiB = static/styles/main.89e6d7c921162bd2e8a5.css 26 KiB static/scripts/main.70a8d162821bf24fd0a1.js 557 KiB
orphan modules 2.03 MiB (javascript) 29.3 KiB (runtime) [orphan] 1079 modules
runtime modules 10.3 KiB 12 modules
cacheable modules 2.33 MiB (javascript) 41.3 KiB (css/mini-extract)
  javascript modules 2.33 MiB
    modules by path ./node_modules/ 2.11 MiB 111 modules
    modules by path ./src/ 222 KiB 37 modules
  css modules 41.3 KiB
    modules by path ./src/widgets/ 9.32 KiB 9 modules
    modules by path ./src/shared/ui/ 4.02 KiB 6 modules
    modules by path ./src/entities/ 4.57 KiB 6 modules
    modules by path ./src/features/ 4.23 KiB 4 modules
    modules by path ./src/pages/ 2.78 KiB 4 modules
    modules by path ./src/app/ 2.58 KiB 2 modules
    css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css 13.7 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  static/scripts/main.70a8d162821bf24fd0a1.js (557 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (583 KiB)
      static/styles/main.89e6d7c921162bd2e8a5.css
      static/scripts/main.70a8d162821bf24fd0a1.js


webpack 5.102.1 compiled with 198 warnings in 8143 ms

Process finished with exit code 0
```

Запуск на вебпаке
````ignorelang
> react-final@1.0.0 start
> webpack serve --config webpack/webpack.config.cjs --env env=dev

[dotenv@17.2.3] injecting env (1) from .env -- tip: 🛠️  run anywhere with `dotenvx run -- yourcommand`
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.107:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Work\react_final\webpack\dist' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
assets by path static/scripts/*.js 11.6 MiB
  asset static/scripts/main.js 9.04 MiB [emitted] (name: main)
  asset static/scripts/vendors-node_modules_yup_index_esm_js-node_modules_hookform_resolvers_yup_dist_yup_mjs-node_m-938755.js 1.61 MiB [emitted] (id hint: vendors)
  asset static/scripts/src_widgets_auth_index_ts-src_widgets_product_index_ts.js 493 KiB [emitted]
  asset static/scripts/src_pages_CartPage_index_ts.js 174 KiB [emitted]
  asset static/scripts/src_pages_ProductPage_index_ts.js 106 KiB [emitted]
  asset static/scripts/src_pages_ProfilePage_index_ts.js 70.6 KiB [emitted]
  asset static/scripts/src_pages_SignInPage_index_ts.js 45 KiB [emitted]
  asset static/scripts/src_pages_SignUpPage_index_ts.js 44.8 KiB [emitted]
  asset static/scripts/src_entities_review_ui_ReviewItem_tsx.js 32.7 KiB [emitted]
  asset static/scripts/src_pages_NotFoundPage_index_ts.js 29.2 KiB [emitted]
  + 2 assets
asset index.html 514 bytes [emitted]
asset favicon.svg 380 bytes [emitted]
asset robots.txt 24 bytes [emitted] [from: public/robots.txt] [copied]
orphan modules 1.19 MiB [orphan] 610 modules
runtime modules 35.8 KiB 20 modules
cacheable modules 3.84 MiB
  modules by path ./node_modules/ 3.4 MiB 412 modules
  modules by path ./src/ 458 KiB
    modules by path ./src/shared/ 151 KiB 55 modules
    modules by path ./src/widgets/ 116 KiB 43 modules
    modules by path ./src/features/ 63.1 KiB 30 modules
    modules by path ./src/pages/ 44.2 KiB 24 modules
    modules by path ./src/entities/ 52.1 KiB 20 modules
    modules by path ./src/app/ 30.8 KiB 10 modules
    ./src/index.tsx 1.34 KiB [built] [code generated]
  data:image/svg+xml;utf8,<svg width=%2714.. 313 bytes [built] [code generated]
webpack 5.102.1 compiled successfully in 6123 ms
````

Запуск на Vite
```ignorelang
  VITE v7.2.2  ready in 565 ms
```

Сборка на Vite
```ignorelang
> react-final@1.0.0 vite-build
> tsc -b && vite build

vite v7.2.2 building client environment for production...
✓ 1104 modules transformed.
dist/index.html                                0.96 kB │ gzip:  0.43 kB
dist/assets/quality-BuNDuxhF.svg               6.24 kB │ gzip:  2.50 kB
dist/assets/logo-DR8_wP0j.svg                  7.03 kB │ gzip:  2.89 kB
dist/assets/index-zD8K8sX6.css                 0.14 kB │ gzip:  0.13 kB
dist/assets/ReviewItem-DR_TJQPk.css            0.73 kB │ gzip:  0.32 kB
dist/assets/index-COqoa6Oq.css                 0.75 kB │ gzip:  0.40 kB
dist/assets/index-SmvyVqHM.css                 1.75 kB │ gzip:  0.64 kB
dist/assets/index--ZbIAiwc.css                 1.99 kB │ gzip:  0.69 kB
dist/assets/CartItem-BUMKZpra.css              2.38 kB │ gzip:  0.83 kB
dist/assets/ProductPageCard-D-DCdLt_.css       7.76 kB │ gzip:  2.20 kB
dist/assets/index-BqvhOSPZ.css                26.50 kB │ gzip:  5.82 kB
dist/assets/getMessageFromError-Bt-s8Iad.js    0.14 kB │ gzip:  0.13 kB
dist/assets/WithProtection-BzVn04dd.js         0.38 kB │ gzip:  0.28 kB
dist/assets/ButtonBack-CN1tvlG_.js             0.38 kB │ gzip:  0.28 kB
dist/assets/index-CWeM5_J_.js                  0.45 kB │ gzip:  0.33 kB
dist/assets/index-BdgtnfLy.js                  0.49 kB │ gzip:  0.35 kB
dist/assets/index-pPvoszB_.js                  0.57 kB │ gzip:  0.41 kB
dist/assets/ProductCardWidget-BIxUyYgg.js      0.69 kB │ gzip:  0.41 kB
dist/assets/yup-BGgDkCtu.js                    0.86 kB │ gzip:  0.48 kB
dist/assets/ReviewItem-PekW4uH_.js             1.08 kB │ gzip:  0.51 kB
dist/assets/index-Dz2nKGVt.js                  2.17 kB │ gzip:  1.17 kB
dist/assets/index-BSH6_Zm4.js                  2.19 kB │ gzip:  1.18 kB
dist/assets/CartItem-BO9KtOjs.js               2.21 kB │ gzip:  0.81 kB
dist/assets/index-DcNVlA7G.js                  2.51 kB │ gzip:  1.26 kB
dist/assets/index-CvPoAdYM.js                  2.53 kB │ gzip:  0.92 kB
dist/assets/index-BRBvGdyh.js                  4.24 kB │ gzip:  1.58 kB
dist/assets/ProductPageCard-C8lz_nPR.js       17.43 kB │ gzip:  6.74 kB
dist/assets/emotion-OF122Mmi.js               25.41 kB │ gzip: 10.62 kB
dist/assets/redux-Y59gpkUn.js                 31.07 kB │ gzip: 11.50 kB
dist/assets/react-C0c7tFOs.js                 42.47 kB │ gzip: 13.56 kB
dist/assets/form-BUzAuarA.js                  62.69 kB │ gzip: 21.86 kB
dist/assets/router-BhaIt-xX.js                82.44 kB │ gzip: 28.11 kB
dist/assets/mui-BZbH-GD2.js                  176.77 kB │ gzip: 53.48 kB
dist/assets/index-BTjMRyyR.js                268.48 kB │ gzip: 87.63 kB
✓ built in 8.58s

Process finished with exit code 0
```
# 16. Запись профайлера исходного приложения
![После](./screenshots/after1.png)
