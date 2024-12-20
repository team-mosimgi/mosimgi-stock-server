const { DataSource } = require('typeorm');
const {join} = require("node:path");

const AppDataSource = new DataSource({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'op1928!!',
    database: 'mosimgi',
    synchronize: true,
    logging: false,
    entities: [
        join(__dirname, '/stock/stock.entity.js'),
        join(__dirname, '/trade/trade.entity.js'),
        join(__dirname, '/user/user.entity.js'),
        join(__dirname, '/trade/buy/buy.entity.js'),
        join(__dirname, '/trade/sell/sell.entity.js'),
        join(__dirname, '/favorite/favorite.entity.js'),
    ],
});

module.exports = { AppDataSource };