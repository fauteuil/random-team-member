import { ReactNode } from "react";

/**
 * Types for route configurations.
 */
export type Route = {
  path: string | string[];
  component: ReactNode;
  page: string;
  breadcrumb: any; // TOREFACTOR - standardize this with Breadcrumb type
};

/**
 * Dynamic URL params passed to the router
 */
export interface MatchParams {
  bidId?: string;
  Tab?: string;
}
