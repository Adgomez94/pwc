export interface DataApiSerie {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            DataSerie;
}

export interface DataSerie {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Serie[];
}


export interface Serie {
  id:          number;
  title:       string;
  name:        string;
  description: null;
  resourceURI: string;
  urls:        URL[];
  startYear:   number;
  endYear:     number;
  rating:      string;
  type:        string;
  modified:    string;
  thumbnail:   Thumbnail;
  creators:    Characters;
  characters:  Characters;
  stories:     Characters;
  comics:      Characters;
  events:      Characters;
  next:        null;
  previous:    null;
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

interface Thumbnail {
  path:      string;
  extension: string;
}

interface URL {
  type: string;
  url:  string;
}