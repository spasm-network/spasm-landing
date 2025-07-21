module.exports = {
  apps : [{
    name: 'spasm-land-3000',
    script: 'http-server',
    args: './site -p 3000',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
