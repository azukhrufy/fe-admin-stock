import TextField from "../../components/PinaField/TextField";

interface StatisticProps {
  active: number;
  value: any;
}

const Statistics = ({ value, active }: StatisticProps) => {
  return (
    <>
      <div
        className={`statistic-left-content ${
          active === 0 ? "active" : "inactive"
        }`}
      >
        <>
          <TextField
            label="Market Cap"
            value={value.marketCap}
          />
          <TextField label="P/E (Annualized)" value={value.pe} />
          <TextField label="PBV" value={value.pbv} />
          <TextField
            label="Dividen Yield"
            value={value.dividenYield}
          />
          <TextField label="52W High" value={value.high} />
          <TextField label="52W Low" value={value.low} />
        </>
        <>
          <h2>Fundamental</h2>
          <TextField
            label="Cash Equivalent"
            value={value.cashEquivalent}
          />
          <TextField
            label="Total Assets"
            value={value.totalAsset}
          />
          <TextField
            label="Total Liabilities"
            value={value.totalLiabilities}
          />
          <TextField
            label="Total Equity"
            value={value.totalEquity}
          />
          <TextField
          label="Total Sales"
          value={value.totalSales}
        />
        <TextField
            label="Net Icome"
            value={value.netIncome}
          />
        </>
      </div>
      <div
        className={`statistic-right-content ${
          active === 0 ? "active" : "inactive"
        }`}
      >
        <>
        <h2>Earning</h2>
        <TextField label="Earning per Share" value={value.eps} />
        <TextField label="Book Value per Share" value={value.bvps} />
        </>
        <>
        <h2>Profitabilitas</h2>
        <TextField label="Gross Profit Margin" value={value.gpm} />
        <TextField label="Operating Profit Margin" value={value.opm} />
        <TextField label="Net Profit Margin" value={value.npm} />
        <TextField label="ROA" value={value.roa} />
        <TextField label="ROE" value={value.roe} />
        </>
        <>
        <h2>Solvabilitas</h2>
        <TextField
            label="Debt Equity Ratio"
            value={value.der}
          />
        </>
       
        
      </div>
    </>
  );
};

export default Statistics;
