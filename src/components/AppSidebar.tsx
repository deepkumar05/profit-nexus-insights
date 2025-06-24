
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  FolderOpen,
  Users,
  Calculator,
  Settings as SettingsIcon,
  DollarSign,
  FileText,
  TrendingUp,
  Building
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Resources", url: "/resources", icon: Users },
  { title: "Rate Calculator", url: "/rate-calculator", icon: Calculator },
  { title: "Cost Overrides", url: "/cost-overrides", icon: Settings as any },
  { title: "Company Earnings", url: "/earnings", icon: DollarSign },
  { title: "Reports & Exports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: SettingsIcon },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-card/30 backdrop-blur-sm border-r border-border">
        {/* Company Brand */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-foreground">FinanceScope</h2>
                <p className="text-xs text-muted-foreground">Resource Management</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive: linkActive }) =>
                        `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive(item.url) || linkActive
                            ? "bg-primary/10 text-primary border-r-2 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Profit Indicator */}
        {!collapsed && (
          <div className="mt-auto p-6">
            <div className="bg-finance-profit/10 border border-finance-profit/20 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-finance-profit" />
                <span className="text-sm font-medium text-finance-profit">+12.5%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Monthly Growth</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
