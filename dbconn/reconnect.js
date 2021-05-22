#!/usr/bin/env node

const DatabaseReconnection = require('./db.js'); 
const db = new DatabaseReconnection({
  host: 'localhost', port: 5432,
  user: 'user', password: 'hunter2',
  database: 'dbconn', retry: 1_000
});
db.connect();
db.on('error', (err) => console.error('db error', err.message));
db.on('reconnect', () => console.log('reconnecting...'));
db.on('connect', () => console.log('connected.'));
db.on('disconnect', () => console.log('disconnected.'));