var c = module.exports = { }

// maximum pertfolio allocation per possition (20%)
c.POSITION_SIZING = 1.0;

// maximum loss of whole portfolio per position (1%)
c.MAX_LOSS_THRESHOLD = 0.1;
0
// trailing stop mode (none, max, atr, sar)
c.trailing_stop = "max";

// market breadth impact (true / false)
// true:
//   - sell everything if market fall down
//   - don't buy anything if market is weak
//   - buy only in strong up market directon
// false: no not impact market breadth on trades.
c.market_breadth = false;

// earnings announcements impact (true / fasle)
// true: sell shares at the day before earnings report
// false: take risk and keep shares overnight
c.earnings_announcements = true;

// relative strength priority for portfolio allocation (m1, m3, m6, off)
// m1: prioritize stocks by 1 month return
// m3: prioritize stocks by 3 month return
// m6: prioritize stocks by 6 month return
// off: do not prioritize any stocks
c.rsa_priority = "off";

// obtain token from www.quandl.com, need for market analysis
c.quandl_token = "K29QgtbdNxZfGVzau4nu" ;
// Robinhood credentials

c.robinhood_credentials = {
    username: 'josephtutera',
    password: 'Chanel6600'
};

// List of securities to trade
c.list = ["AMZN","NVDA","HP","MU","ADBE","PXD","TROW","STI","BABA","VGT","PLNT","CBOE","FDX",
    "FFTY","RHT","QQQ","UGA","SMH","DIA","SPY","LIT","IWM","XLF","XBI","XLV","IBB"];
    
// backtest
c.backtest = { }
c.backtest.cash = 26300
