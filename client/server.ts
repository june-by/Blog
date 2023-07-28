import http from "http";
import { parse } from "url";
import next from "next";

import https from "https";
import fs from "fs";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;

const httpsOptions = {
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
};

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url as string, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT + 1, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });

  // https 서버 추가
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url as any, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, () => {
      console.log(`> HTTPS: Ready on https://localhost:${PORT + 1}`);
    });
});
