## 1. sanity (link: https://www.sanity.io/sonny)

- This is a schemaless backend that lets you store and query JSON documents, and subscribe to real-time changes
- run in your project:

```bash
npm install -g @sanity/cli
sanity init --coupon sonny2022
```

- project name: `grab-food`
- Project output path: `sanity`
- Select project template: `Blog (schema)`
- Then start `sanity studio`:

```bash
cd sanity
sanity start
```

- Change `schema.js` in ` schemas` folder -> add table in ` schemas` folder

- Install `sanity client and sanity image url`
- use sanity client to `Performing queries`, `Listening to queries`

```bash
npm i @sanity/client @sanity/image-url
```

- create `sanity.js` file :
- project id: check in `sanity.json` in `sanity` folder or in sanity.io project
- `api version` is current date

- RUN THIS to add exception for localhost 3000 CORS policy

```
sanity cors add http://localhost:3000
press y
```

- or:
- `sanity.io` project, into tab API, CORS origins, click `add CORS origin`, and push `http://localhost:3000`, click allow credentials
- terminal `cd sanity` and run

```bash
sanity cors add http://localhost:19006
```

when run project in web

- then in sanity folder path run in terminal:

```bash
cd sanity
sanity deploy
```

- studio hostname: grabfoodsupermen
- `https://grabfoodsupermen.sanity.studio/`
- in `sanity.io` project, in `Vision` tab, you can test query
