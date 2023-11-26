module.exports = {
  apps: [
    {
      name: "byjuun.com-server-production",
      script: "build/index.js",
      autorestart: false,
      watch: false,
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
