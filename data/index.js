const fs = require('fs');
const yahooFinance = require('yahoo-finance2').default;
const tickers = require('./stock/tickers');

const START_DATE = '1980-01-01';
const END_DATE = '2021-12-31';

async function go() {
    for (let i = 0; i < 2 || tickers.length; i++) {
        const { name, symbol, exchange } = tickers[i];

        const queryOptions = { period1: START_DATE, interval: '1d' };
        const result = await yahooFinance.historical(query, queryOptions);
    }
}

go().then(() => {
    console.log('DONE!');
});

// var yahooFinance = require('yahoo-finance')
//
// yahooFinance.historical(
//     {
//         symbol: 'TPG',
//         from: '1990-01-01',
//         to: '2021-12-31',
//         // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
//     },
//     function (err, quotes) {
//         console.log('quotes', quotes.reverse())
//         console.log('quotes', quotes.length)
//     }
// )
// const fs = require('fs')
// const { sandp, nasdaq, nyse, ftse100 } = require('./stock/tickers')
// const result = [
//     ...nasdaq.map((r) => ({
//         name: r['Company Name'],
//         symbol: r.Symbol,
//         exchange: 'NASDAQ',
//     })),
//     ...nyse.map((r) => ({
//         name: r['Company Name'],
//         symbol: r['ACT Symbol'],
//         exchange: 'NYSE',
//     })),
//     ...ftse100.map((r) => ({
//         name: r.name,
//         symbol: r.ticker,
//         exchange: 'LSE',
//     })),
// ]
//
// const resultString = JSON.stringify(result, null, 2)
//
// fs.writeFileSync('./tickers.js', resultString, {
//     encoding: 'utf-8',
// })
