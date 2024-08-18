module.exports = {
  apps: [
    {
      name: "fastapi",
      script: "poetry",
      args: "run gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000 main:app",
      interpreter: "none",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};
