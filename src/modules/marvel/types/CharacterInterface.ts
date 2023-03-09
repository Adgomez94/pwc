export interface DataApiCharacter {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            DataCharacter;
}

export interface DataCharacter {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface Character {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      Comics;
  series:      Comics;
  stories:     Stories;
  events:      Comics;
  urls:        URL[];
}

interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

interface ComicsItem {
  resourceURI: string;
  name:        string;
}

interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        Type;
}

enum Type {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

interface Thumbnail {
  path:      string;
  extension: string;
}

interface URL {
  type: string;
  url:  string;
}