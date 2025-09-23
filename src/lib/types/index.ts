/**
 * Interface for County data
 */
export interface ICounty {
  code: string;
  name: string;
  type: string;
}

/**
 * Interface for Constituency data
 */
export interface IConstituency {
  code: string;
  name: string;
  county_code: string;
  county_name: string;
  type: string;
}

/**
 * Interface for Ward data
 */
export interface IWard {
  code: string;
  name: string;
  constituency_code: string;
  constituency_name: string;
  county_code: string;
  county_name: string;
  type: string;
}

/**
 * Interface for Locality data
 */
export interface ILocality {
  code: string;
  name: string;
  county_code: string;
  county_name: string;
  type: string;
}

/**
 * Interface for Area data
 */
export interface IArea {
  code: string;
  name: string;
  locality: string;
  county_code: string;
  county_name: string;
  type: string;
}

/**
 * Search result interface
 */
export interface SearchResult {
  type: "county" | "constituency" | "ward" | "locality" | "area";
  item: ICounty | IConstituency | IWard | ILocality | IArea;
}

/**
 * Available search types
 */
export type SearchType =
  | "county"
  | "constituency"
  | "ward"
  | "locality"
  | "area";

/**
 * Data version options
 */
export interface KenyaDivisionsOptions {
  dataVersion?: string;
}
