import React from "react";
import { adminNavItems } from "../../data/navItems";
import AdminRouting from "./AdminRouting";
import Layout from "../../components/shared/Layout/Layout";


export const AdminLayout = () => {
  return (
    <Layout navItems={adminNavItems} redirectTo={"/admin/profile"}>
      <AdminRouting />
    </Layout>
  );
};
