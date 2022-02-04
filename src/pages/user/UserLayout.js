import React from "react";
import { Header } from "../../components/shared/Header/Header";
import { StyledMain } from "../../components/shared/Main/Main.styled";
import { StyledPage } from "../../components/shared/Main/Page.styled";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { userNavItems } from "../../data/navItems";
import UserRouting from "./UserRouting";
import Layout from "../../components/shared/Layout/Layout";

export const UserLayout = () => {
  return (
    <Layout navItems={userNavItems} redirectTo={'/user/profile'}>
      <UserRouting />
    </Layout>
  );
};
