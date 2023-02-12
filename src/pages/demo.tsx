import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/Tabs/Tabs";
import Field from "../components/PinaField/Field";
import { FormIcons } from "../components/Icons/FormIcons";
import Statistics from "./Fragments/Statistics";
import { emitenData } from "../constant/emitent";
import { Menu } from "../constant/menu";
import { useAction } from "../hooks/useAction";
import { useFilter } from "../hooks/useFilter";
import CompanyProfile from "./Fragments/CompanyProfile";
import StockChart from "../components/Chart/StockChart";
import { TagIcons } from "../components/Icons/TagIcons";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import Tag from "../components/Tag/Tag";
import Pill from "../components/Pill/Pill";


const userData = {
  portfolio: "130.431.449",
  buyingPwr: 13431449,
  image: <img src="/Image/user.png" alt="user" />,
  stock: [
    {
      code: 'TLKM',
      lot: 5,
    },
    {
      code: 'ANTM',
      lot: 3,
    },
  ]
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
  const [buyLot, setBuyLot] = useState(1);
  const [buyPrice, setBuyPrice] = useState(emitenData.price);
  const [subTotal, setSubtotal] = useState(buyLot * buyPrice);

  const requestedLot = useAction(buyLot, buyPrice, setBuyLot, setSubtotal);
  const selledLot = useAction(buyLot, buyPrice, setBuyLot, setSubtotal);

  const requestedPrice = useAction(buyPrice, buyLot, setBuyPrice, setSubtotal);
  const desiredPrice = useAction(buyPrice, buyLot, setBuyPrice, setSubtotal);

  const [activeContentFilter, setActiveContentFilter] = useState(0);

  let timeRangeFilter = useFilter();
  let contentFilter = useFilter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <BaseLayout menu={Menu} sidebarLogo={TagIcons.pina} headerData={userData}>
        <div className="stock-data">
          <div className="pina-card ihsg-card">
            <div className="detail-instrument">
              <div className="emitent">
                <div className="emitent-img">
                  <img src="/Image/tlkm.png" alt="tlkm" />
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
                  pillType={activeFilter === key ? "active" : "default"}
                  onClick={() => timeRangeFilter.filter(key, setActiveFilter)}
                >
                  {filter}
                </Pill>
              ))}
            </div>
            <StockChart
              activeFilter = {activeFilter}
            />
          </div>
          <div className="pina-card emitent-content">
            <div className="pina-pills-container">
              {emitenData.contentFilters.map((filter, key) => (
                <Pill
                  key={key}
                  pillType={activeContentFilter === key ? "active" : "default"}
                  onClick={() => contentFilter.filter(key, setActiveContentFilter)}
                >
                  {filter}
                </Pill>
              ))}
            </div>
            <div className="content-container">
              <Statistics
                value={emitenData.statistic}
                active={activeContentFilter}
              />
              <CompanyProfile active = {activeContentFilter}/>
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
                        onClickPrefix={requestedLot.sub}
                        onClickSuffix={requestedLot.add}
                        onChangeValue={(e: any) => requestedLot.handleChange(e)}
                      />
                      <Field
                        name="stockPrice"
                        label="Harga Saham"
                        defaultValue={buyPrice}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={requestedPrice.sub}
                        onClickSuffix={requestedPrice.add}
                        onChangeValue={(e: any) =>
                          requestedPrice.handleChange(e)
                        }
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
                    <p>Lot yang tersedia</p>
                    <p>{userData.stock.map((stock) => {
                      if(stock.code === emitenData.code){
                        return(
                          stock.lot
                        );
                      }
                    })} Lot</p>
                    <form onSubmit={handleSubmit}>
                      <Field
                        name="lot"
                        label="Jumlah Lot"
                        defaultValue={buyLot}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={selledLot.sub}
                        onClickSuffix={selledLot.add}
                        onChangeValue={(e: any) => selledLot.handleChange(e)}
                      />
                      <Field
                        name="stockPrice"
                        label="Harga Saham"
                        defaultValue={buyPrice}
                        prefixIcon={FormIcons.minus}
                        suffixIcon={FormIcons.plus}
                        onClickPrefix={desiredPrice.sub}
                        onClickSuffix={desiredPrice.add}
                        onChangeValue={(e: any) => desiredPrice.handleChange(e)}
                      />
                      <div className="pina-subtotal">
                        <p>Total Penjualan</p>
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
