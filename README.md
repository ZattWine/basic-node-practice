# Simple Online Shop

Simple Online Shop is a sample web application using NodeJS.

# Implementation

- Views engine - [pug](https://github.com/ZattWine/basic-node-practice/tree/template-engine-pug), [express-handlebars](https://github.com/ZattWine/basic-node-practice/tree/template-engine-handlebars), [ejs](https://github.com/ZattWine/basic-node-practice/tree/template-engine-ejs)
- Autherntication and authorization - [authentication](https://github.com/ZattWine/basic-node-practice/tree/authentication), [advance-authentication-authorization](https://github.com/ZattWine/basic-node-practice/tree/advanced-authentication)
- Cookies and sessions - [cookies-sessions](https://github.com/ZattWine/basic-node-practice/tree/cookies-sessions)
- File upload and download - [file-upload-download](https://github.com/ZattWine/basic-node-practice/tree/file-upload-download)
- MVC - [mvc](https://github.com/ZattWine/basic-node-practice/tree/mvc)
- Database - [mysql2](https://github.com/ZattWine/basic-node-practice/tree/online-shop-mysql2), [sequelize](https://github.com/ZattWine/basic-node-practice/tree/online-shop-sequelize), [mongodb](https://github.com/ZattWine/basic-node-practice/tree/online-shop-mongodb), [mongoose](https://github.com/ZattWine/basic-node-practice/tree/online-shop-mongoose)
- Pagination - [pagination](https://github.com/ZattWine/basic-node-practice/tree/pagination)
- Validation - [validation](https://github.com/ZattWine/basic-node-practice/tree/validation)
- Errors handling - [error-handling](https://github.com/ZattWine/basic-node-practice/tree/error-handling)
- Sending Mails - [sending-mails](https://github.com/ZattWine/basic-node-practice/tree/sending-mails)
- Async requests - [async-requests](https://github.com/ZattWine/basic-node-practice/tree/async-requests)
- Payment - [payment](https://github.com/ZattWine/basic-node-practice/tree/payment)
- Deployment - [deployment](https://github.com/ZattWine/basic-node-practice/tree/deployment)

> You can see specific implementation and specific commit at all branches.

# Third-party

- Views engine - `pug`, `express-handlebars` and `ejs`
- Password hashing - `bcrypt`
- CSRF protection - `csurf`
- Passing error message - `connect-flash`
- Database - `mysql2`, `sequelize`, `mongodb` and `mongoose`
- Validation - `express-validator`
- Cookies and sessions - `express-session`
- File upload and download (to fix form submit header) - `multer`
- Sending Mails - `nodemailer` and `sendinblue` mail service
- Payment - `stripe` online payment service
- Secure Response Headers - `helmet`
- Assets compression - `compression`
- Requests logging - `morgan`

# Installation

The installation and testing on your local machine.

1. ```bash
   git clone git@github.com:ZattWine/basic-node-practice.git
   ```

2. ```bash
   cd /basic-node-practice
   ```

3. ```bash
   npm install
   ```

4. ```bash
   npm start
   ```

5. If `npm start` success, you can now test from your browser by typing [http://localhost:3000](http://localhost:3000)

# Further

You need to create `data/invoices` folder and subfolder if you want to look the invoices pdf after you click `Invoice` link on your `Order` page. You don't need to create `images`. If the application start, it will automatically create `images` folder on your project root.
