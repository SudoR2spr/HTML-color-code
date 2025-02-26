# HTML color code page 

## 📡 Live Demo
Check out the live demo [Here](https://).

# 🚀 Deploy on GitHub Pages Using GitHub Actions  

Fork this **repository** and deploy your website easily on **GitHub Pages** using **GitHub Actions**!  

---

## 📌 How to Deploy  

### 1️⃣ **Fork This Repository**  
🔹 Click on the **Fork** button at the top to create a copy in your account.  

### 2️⃣ **Enable GitHub Actions**  
🔹 Go to your **Forked Repository**  
🔹 Navigate to **Settings > Actions > General**  
🔹 Select **Allow all actions and reusable workflows**  

### 3️⃣ **Enable GitHub Pages**  
🔹 Go to **Settings > Pages**  
🔹 In the **Branch** section, select **gh-pages** or **main**  
🔹 Click **Save**  

### 4️⃣ **Run GitHub Actions for Deployment**  
🔹 Go to the **Actions** tab  
🔹 Click on the **Deploy to GitHub Pages** workflow  
🔹 Click the **Run workflow** button  

### 5️⃣ **Access Your Website**  
Once deployment is complete, your website will be live at:


## ⚙️ Automate Deployment  

You can configure **GitHub Actions** to automatically run the workflow whenever a **commit is pushed**.  

If the file **.github/workflows/deploy.yml** does not exist, create the following file:  

```
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Build Project
        run: |
          npm install
          npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: build```

This setup ensures that **GitHub Actions** automatically deploys your project to **GitHub Pages** whenever you push changes to the `main` branch.


## 👨‍💻 Developed By  

**WOODcraft** – [Telegram](https://t.me/Farooq_is_king)  

🔥 **Join for Updates & Support!**
