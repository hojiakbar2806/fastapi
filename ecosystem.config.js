module.exports = {
  apps: [
    {
      name: "fastapi", // Ilova nomi
      script: "main.py", // Asosiy skript
      interpreter: "python3", // Python interpreteri
      instances: "max", // Ilova ko'paytmasi soni (max CPU yadrolari bo'yicha)
      exec_mode: "cluster", // Clustering rejimida ishga tushiring
      autorestart: true, // Ilova ishga tushirishdan oldin qayta ishga tushiriladi
      watch: false, // Ilova ishga tushirishdan oldin qayta ishga tushiriladi
      max_memory_restart: "1G", // Ilova ishga tushirishdan oldin qayta ishga tushiriladi
    },
  ],
};
