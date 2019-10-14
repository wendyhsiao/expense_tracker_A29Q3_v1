# 老爸的私房錢

## 環境建置與需求

---

- Node.js v10.15.3
- MySQL

#### npm 套件

- bcryptjs: ^2.4.3,
- body-parser: ^1.19.0,
- connect-flash: ^0.1.1,
- dotenv: ^8.1.0,
- express: ^4.17.1,
- express-handlebars: ^3.1.0,
- express-session: ^1.17.0,
- handlebars: ^4.4.3,
- method-override: ^3.0.0,
- moment: ^2.24.0,
- mysql2: ^1.7.0,
- nodemon: ^1.19.3,
- passport: ^0.4.0,
- passport-facebook: ^3.0.0,
- passport-local: ^1.0.0,
- sequelize: ^5.19.6,
- sequelize-cli: ^5.5.1


## 安裝與執行步驟

---

#### 安裝方法 1

在終端機(Terminal)輸入

```
git clone https://github.com/wendyhsiao/expense_tracker_A29Q3_v1.git
```

如果在終端機訊息中看見「done」，就表示成功了！

#### 安裝方法 2

先點選 "Clone or download / Download ZIP" 把檔案下載下來，解壓縮。

#### 執行步驟

1.在終端機(Terminal)切換到 expense_tracker_A29Q3_v1 目錄下

```
cd expense_tracker_A29Q3_v1
```

2.安裝套件

```
npm install
```

3.建立 Facebook 的登入功能
回到 expense_tracker_A29Q3_v1 目錄下
在根目錄建立.env 檔案

```
FACEBOOK_ID=**個人FB應用程式編號**
FACEBOOK_SECRET=**個人FB應用程式密鑰**
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```

4.使用 nodemon 啟動伺服器

```
cd expense_tracker_A29Q3_v1
npm run dev
```

5.在瀏覽器輸入網址 `localhost:3000`即可看到內容

## 功能描述

---

- 登入與註冊功能，可用 FB 登入
- 可以看到所有的支出紀錄、總金額
- 提供篩選功能，選出想查看的類別
- 可新增、修改、刪除支出紀錄

## 專案畫面

---

![image](https://github.com/wendyhsiao/expense_tracker_A29Q3_v1/blob/master/public/img/index.PNG)

![image](https://github.com/wendyhsiao/expense_tracker_A29Q3_v1/blob/master/public/img/edit.PNG)

![image](https://github.com/wendyhsiao/expense_tracker_A29Q3_v1/blob/master/public/img/new.PNG)

![image](https://github.com/wendyhsiao/expense_tracker_A29Q3_v1/blob/master/public/img/login.PNG)

![image](https://github.com/wendyhsiao/expense_tracker_A29Q3_v1/blob/master/public/img/register.PNG)