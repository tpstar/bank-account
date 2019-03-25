# README

This app is a CRUD app for bank accounts, which has validations on bank routing numbers.

It was built with Ruby on Rails for API and React for frontend.

### Usage

#### To run this app;

1. clone this app (copy and paste the below line in your terminal)
  + git clone https://github.com/tpstar/bank-account.git
2. move to the app directory
  + cd bank-account
3. install Ruby gems
  + bundle install
4. create a data migration
  + rake db:migrate
5. seed data
  + rake db:seed
6. start the api server on port 5000
  + rails s -p 5000
6. move to client directory (on a new tab in your terminal)
  + cd client
7. install Javascript packages
  + yarn
8. start the client server
  + yarn start
9. on your browser go to
  localhost:3000

#### to use the app on your browser

1. create an account by clicking 'Add Account' button on the top right corner
2. edit or delete an account by clicking horizontal dots icon on an account card
3. when editing or creating an account, type only numbers (e.g. 271070801) for routing numbers
