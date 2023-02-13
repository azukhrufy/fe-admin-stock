import { TagIcons } from "../components/Icons/TagIcons";

export const emitenData = {
    name: "Telkom Indonesia (Persero)",
    code: "TLKM",
    image: "/Image/tlkm.png",
    tags: [
      {
        name: "Energi",
        icon: TagIcons.energy,
      },
      {
        name: "Batu Bara",
        icon: TagIcons.miningIcon,
      },
      {
        name: "Blue Chip",
        icon: TagIcons.blueChip,
      },
    ],
    filters: ["1D", "1M", "6M", "YTD", "1Y", "5Y", "All"],
    contentFilters: [
      "Statistic",
      "Corp Action",
      "Berita",
      "Laporan Keuangan",
      "Tentang Perusahaan",
    ],
    price: 7500,
    statistic: {
      marketCap: "86.682 B",
      pe: "6.7",
      pbv: "1.51",
      dividenYield: "8.12%",
      high: "3.720",
      low: "1.160",
      cashEquivalent: "25.859 B",
      totalAsset: "108.326 B",
      totalLiabilities: "44.670 B",
      totalEquity: "59.065 B",
      totalSales: '89.326 B',
      netIncome: '13.328 B',
      eps: '416.70',
      bvps: '1846.59',
      gpm: '56.2%',
      opm: '53.8%',
      npm: '36.1%',
      roa: '12.3%',
      roe: '22.6%',
      der: '0.39',
    },
  };