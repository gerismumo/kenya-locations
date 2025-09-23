import Fuse from "fuse.js";
import {
  ICounty,
  IConstituency,
  IWard,
  ILocality,
  IArea,
  SearchResult,
} from "../types";

import { areas, constituencies, counties, localities, wards } from "../data";

const combinedData: SearchResult[] = [
  ...counties.map((c: ICounty) => ({ type: "county" as const, item: c })),
  ...constituencies.map((c: IConstituency) => ({
    type: "constituency" as const,
    item: c,
  })),
  ...wards.map((w: IWard) => ({ type: "ward" as const, item: w })),
  ...localities.map((l: ILocality) => ({ type: "locality" as const, item: l })),
  ...areas.map((a: IArea) => ({ type: "area" as const, item: a })),
];

const fuse = new Fuse(combinedData, {
  keys: ["item.name"],
  includeScore: true,
  threshold: 0.2,
  ignoreLocation: true,
  findAllMatches: false,
  minMatchCharLength: 2,
});

export function searchLocations(
  query: string,
  limit: number = 10
): SearchResult[] {
  if (!query) return [];
  const results = fuse.search(query, { limit });
  return results.map((r) => r.item);
}
