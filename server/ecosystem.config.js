module.exports = {
  apps: [
    {
      name: "byjuun.com-server-production",
      script: "build/index.js",
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
