module.exports = {
  apps: [
    {
      name: "fastapi", // Ilova nomi
      script: "main.py", // Asosiy skript
      interpreter: "python3", // Python interpreteri
      instances: "max", // Ilova ko'paytmasi soni (max CPU yadrolari bo'yicha)
      exec_mode: "cluster", // Clustering rejimida ishga tushiring
    },
  ],

  deploy: {
    production: {
      user: "ubuntu", // EC2 serveridagi foydalanuvchi
      host: "13.60.180.58", // EC2 server IP yoki domeni
      ref: "origin/main", // Git tarmog'i
      repo: "https://github.com/hojiakbar2806/fastapi.git", // Git repozitoriy URL
      path: "/home/ubuntu/fastapi", // Serverdagi yo'l
      "post-deploy":
        "poetry install --only main && pm2 reload ecosystem.config.js", // Deploydan keyingi buyruqlar
    },
  },
};
