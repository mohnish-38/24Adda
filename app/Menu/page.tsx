"use client";
import React from "react";
import { WelcomeSection } from "../../Components/Menu/TopSection/WelcomeSection";
import { Container, Paper, Space, Tabs } from "@mantine/core";
import { HowToOrder } from "../../Components/Menu/HowtoOrder/HowToOrder";
import HeaderFooter from "../../Components/HeaderFooterWrapper/HeaderFooterWrapper";
import { Menulist } from "../../Components/Menu/MenuList/Menulist";
import { Map } from "../../Components/Map/Map";
import { VisitUs } from "../../Components/Menu/VisitUs/VisitUs";


const Menu = () => {
  return (
    <HeaderFooter>
      <Container size="xl">
        <WelcomeSection />
      </Container>
      <Paper bg="#fff5e8">
        <HowToOrder />
      </Paper>
        <Menulist />
        <Container size="xl">
        <VisitUs/>
      </Container>    
    </HeaderFooter>
  );
};

export default Menu;
