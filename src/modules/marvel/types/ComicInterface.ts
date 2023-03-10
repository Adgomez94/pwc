export interface DataApiComic {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            DataComic;
}

export interface DataComic {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Comic[];
}

export interface Comic {
  name?:           string;
  id:                 number;
  digitalId:          number;
  title:              Title;
  issueNumber:        number;
  variantDescription: string;
  description:        null;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        string;
  ean:                string;
  issn:               string;
  format:             string;
  pageCount:          number;
  textObjects:        any[];
  resourceURI:        string;
  urls:               URL[];
  series:             Series;
  variants:           Series[];
  collections:        any[];
  collectedIssues:    any[];
  dates:              DateElement[];
  prices:             Price[];
  thumbnail:          Thumbnail;
  images:             any[];
  creators:           Characters;
  characters:         Characters;
  stories:            Characters;
  events:             Characters;
}

interface Characters {
  available:     number;
  collectionURI: string;
  items:         Item[];
  returned:      number;
}

interface Item {
  resourceURI: string;
  name:        string;
  role?:       string;
  type?:       string;
}

interface DateElement {
  type: string;
  date: string;
}

interface Price {
  type:  string;
  price: number;
}

interface Series {
  resourceURI: string;
  name:        Title;
}

enum Title {
  MarvelPreviews2017 = "Marvel Previews (2017)",
  MarvelPreviews2017Present = "Marvel Previews (2017 - Present)",
}

interface Thumbnail {
  path:      string;
  extension: string;
}

interface URL {
  type: string;
  url:  string;
}