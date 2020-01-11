const getEmail = require('./app-files/notes');
const validator = require('validator')
const chalk = require('chalk')


const email = 'stephenkastonagmail.com'

if(validator.isEmail(email)) {
    console.log(chalk.green('you entered a correct email!'))
} else {
    console.log(chalk.red('This is not an email!'))
}