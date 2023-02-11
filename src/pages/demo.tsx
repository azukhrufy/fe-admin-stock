import { TagIcons } from "../components/Icons/TagIcons";
import { MenuIcon } from "../components/Icons/MenuIcons";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import Tag from "../components/Tag/Tag";
import Pill from "../components/Pill/Pill";
import { useState } from "react";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/Tabs/Tabs";
import Field from "../components/PinaField/Field";
import { FormIcons } from "../components/Icons/FormIcons";
import TextField from "../components/PinaField/TextField";

const Menu = [
  {
    id: "home",
    icon: MenuIcon.home,
    name: "Home",
  },
  {
    id: "portfolio",
    icon: MenuIcon.portfolio,
    name: "Portfolio",
  },
  {
    id: "order",
    icon: MenuIcon.order,
    name: "Order",
  },
  {
    id: "search",
    icon: MenuIcon.search,
    name: "Search",
  },
  {
    id: "profile",
    icon: MenuIcon.profile,
    name: "Profile",
  },
];

const userData = {
  portfolio: "130.431.449",
  buyingPwr: "13.431.449",
  image: <img src="/Image/user.png" />,
};

const emitenData = {
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
  price: 750019,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Demo = () => {
  const [activeFilter, setActiveFilter] = useState(3);
  const [value, setValue] = useState(0);
  const [buyLot, setBuyLoy] = useState(1);
  const [buyPrice, setBuyPrice] = useState(emitenData.price);
  const [subTotal, setSubtotal] = useState(buyLot * buyPrice);

  const [activeContentFilter, setActiveContentFilter] = useState(0);

  const handleContentFilterChange = (key: number) => {
    setActiveContentFilter(key);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFilter = (key: number) => {
    setActiveFilter(key);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const addLot = () => {
    let newValue = buyLot + 1;
    setBuyLoy(newValue);
    setSubtotal(newValue * buyPrice);
  };

  const subLot = () => {
    if (buyLot > 0) {
      const newValue = buyLot - 1;
      setBuyLoy(newValue);
      setSubtotal(newValue * buyPrice);
    }
  };

  let onChange = (e: any) => {
    if (!isNaN(Number(e.target.value))) {
      let newValue = Number(e.target.value);
      setBuyLoy(newValue);
      setSubtotal(newValue * buyPrice);
    }
  };

  const addPrice = () => {
    let newValue = buyPrice + 1;
    setBuyPrice(newValue);
    setSubtotal(newValue * buyLot);
  };

  const subPrice = () => {
    if (buyPrice > 0) {
      const newValue = buyPrice - 1;
      setBuyPrice(newValue);
      setSubtotal(newValue * buyLot);
    }
  };

  let handlePriceChange = (e: any) => {
    if (!isNaN(Number(e.target.value))) {
      let newValue = Number(e.target.value);
      setBuyPrice(newValue);
      setSubtotal(newValue * buyLot);
    }
  };

  return (
    <>
      <BaseLayout menu={Menu} sidebarLogo={TagIcons.pina} headerData={userData}>
        <div className="stock-data">
          <div className="pina-card">
            <div className="ihsg-card">
              <div className="detail-instrument">
                <div className="emitent">
                  <div className="emitent-img">
                    <img src="/Image/tlkm.png" />
                  </div>
                  <div className="emitent-name">
                    <p>{emitenData.code}</p>
                    <p>{emitenData.name}</p>
                  </div>
                </div>
                <div className="performances">
                  <p>{emitenData.price}</p>
                  <p>+48,83 (+0.68%)</p>
                </div>
              </div>
              <div className="pina-tags-container">
                {emitenData.tags.map((tag, key) => (
                  <Tag
                    key={key}
                    tagType="primary"
                    tagShape="rounded"
                    prefixIcon={tag.icon}
                  >
                    {tag.name}
                  </Tag>
                ))}
              </div>
              <div className="pina-pills-container">
                {emitenData.filters.map((filter, key) => (
                  <Pill
                    key={key}
                    pillType={activeFilter == key ? "active" : "default"}
                    onClick={() => handleFilter(key)}
                  >
                    {filter}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
          <div className="pina-card">
            <div className="emitent-content">
              <div className="pina-pills-container">
                {emitenData.contentFilters.map((filter, key) => (
                  <Pill
                    key={key}
                    pillType={activeContentFilter == key ? "active" : "default"}
                    onClick={() => handleContentFilterChange(key)}
                  >
                    {filter}
                  </Pill>
                ))}
              </div>
              <div className="content-container">
                <div className="left-content">
                  <TextField />
                </div>
                <div className="right-content">
                  <TextField />
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <div className="pina-card">
            <div className="checkout-card">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#FFDC00",
                      },
                    }}
                    textColor="inherit"
                    aria-label="basic tabs example"
                  >
                    <Tab label="Beli" {...a11yProps(0)} />
                    <Tab label="Jual" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="checkout-content">
                    <p>Dana yang tersedia</p>
                    <p>IDR {userData.buyingPwr}</p>
                    <form onSubmit={handleSubmit}>
                      <Field
                        name="lot"
                        label="Jumlah Lot"
                        defaultValue={buyLot}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={subLot}
                        onClickSuffix={addLot}
                        onChangeValue={(e: any) => onChange(e)}
                      />
                      <Field
                        name="stockPrice"
                        label="Harga Saham"
                        defaultValue={buyPrice}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={subPrice}
                        onClickSuffix={addPrice}
                        onChangeValue={(e: any) => handlePriceChange(e)}
                      />
                      <div className="pina-subtotal">
                        <p>Total Pembelian</p>
                        <p> {subTotal} </p>
                      </div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <Pill className="mt-4 p-2" pillType="active">
                        <button type="submit">Beli</button>
                      </Pill>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="checkout-content">
                    <p>Dana yang tersedia</p>
                    <p>IDR {userData.buyingPwr}</p>
                    <form onSubmit={handleSubmit}>
                      <Field
                        name="lot"
                        label="Jumlah Lot"
                        defaultValue={buyLot}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={subLot}
                        onClickSuffix={addLot}
                        onChangeValue={(e: any) => onChange(e)}
                      />
                      <Field
                        name="stockPrice"
                        label="Harga Saham"
                        defaultValue={buyPrice}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={subPrice}
                        onClickSuffix={addPrice}
                        onChangeValue={(e: any) => handlePriceChange(e)}
                      />
                      <div className="pina-subtotal">
                        <p>Total Pembelian</p>
                        <p> {subTotal} </p>
                      </div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <Pill className="mt-4 p-2" pillType="active">
                        <button type="submit">Jual</button>
                      </Pill>
                    </form>
                  </div>
                </TabPanel>
              </Box>
            </div>
          </div>
        </aside>
      </BaseLayout>
    </>
  );
};

export default Demo;
