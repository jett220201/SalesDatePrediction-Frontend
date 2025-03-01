# SalesPredictionApp 📅📊

SPA web application using Angular 19. The application connects to 
an API to display detailed information about user purchase orders, 
including the expected date of the next purchase. In addition, it allows 
the creation of new purchase orders using Angular Material for an intuitive and modern interface.

## 🚀 Technologies Used
- **Angular 19.2.0**

## 📥 Getting Started
These instructions will give you a give to install and run the
project in your local machine.

### 📂 Project structure
This project has the following structure:
```
└── 📁SalesDatePrediction-Frontend
    └── 📁sales-prediction-app
        └── 📁.angular
        └── .editorconfig
        └── .gitignore
        └── 📁.vscode
            └── extensions.json
            └── launch.json
            └── tasks.json
        └── angular.json
        └── package-lock.json
        └── package.json
        └── 📁public
            └── favicon.ico
        └── 📁src
            └── 📁app
                └── app.component.css
                └── app.component.html
                └── app.component.spec.ts
                └── app.component.ts
                └── app.config.server.ts
                └── app.config.ts
                └── app.routes.server.ts
                └── app.routes.ts
                └── 📁components
                    └── 📁customers
                        └── customers.component.css
                        └── customers.component.html
                        └── customers.component.spec.ts
                        └── customers.component.ts
                    └── 📁new-order-customer
                        └── new-order-customer.component.css
                        └── new-order-customer.component.html
                        └── new-order-customer.component.spec.ts
                        └── new-order-customer.component.ts
                    └── 📁view-orders-customer
                        └── view-orders-customer.component.css
                        └── view-orders-customer.component.html
                        └── view-orders-customer.component.spec.ts
                        └── view-orders-customer.component.ts
                └── 📁models
                    └── customer.model.ts
                    └── employee.model.ts
                    └── order.model.ts
                    └── orderDetails.model.ts
                    └── product.model.ts
                    └── shipper.model.ts
                └── 📁services
                    └── api.service.spec.ts
                    └── api.service.ts
            └── 📁assets
                └── 📁images
                    └── nserio-logo.png
            └── 📁environments
                └── environment.prod.ts
                └── environment.ts
            └── index.html
            └── main.server.ts
            └── main.ts
            └── server.ts
            └── styles.css
        └── tsconfig.app.json
        └── tsconfig.json
        └── tsconfig.spec.json
```

### 🔥 Installing

1. Clone the repository:
```sh
git clone https://github.com/jett220201/SalesDatePrediction-Frontend.git
cd SalesDatePrediction-Frontend
```

2. Build project
To build the project run:
```
ng build
```

3. Test project
To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
```
ng test
```

4. Start project
To start a local development server, run:
```
ng serve
```

## :octocat: Authors

  - **Juan Esteban Torres Tamayo**
