module.exports = {
  apps: [
    {
      name: "fastapi", // Ilova nomi
      script: "poetry", // `poetry` yordamida ishga tushiradi
      interpreter: "python3", // Python interpreteri
      args: "run gunicorn main:app --workers 4 --port 8000 --worker-class uvicorn.workers.UvicornWorker", // Gunicorn uchun parametrlar
      instances: "max", // CPU yadrolari bo'yicha ilova ko'paytmasi
      exec_mode: "cluster", // Clustering rejimida ishga tushirish
    },
  ],
};
