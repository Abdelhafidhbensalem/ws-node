// to add a 3rd party module we need
// to intialize npm
// => npm init
//-----------------------------------------------
// require module 3rd party (express)
// const express = require("express");

const uuid = require('uuid')

const users = [{ name: 'John', age: 36, id: uuid.v4() }, { name: 'Emilie', age: 26, id: uuid.v4() }, { name: 'Alex', age: 28, id: uuid.v4() }, { name: 'Taher', age: 18, id: uuid.v4() }]

const getAver = (arr) => {
    return arr.map(el => el.age).reduce((prev, cur) => prev + cur) / arr.length
}

module.exports = { users, getAver }
//console.log(users)

