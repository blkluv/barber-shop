export interface ImageUrl {
  _type: string;
  _asset: {
    _ref: string;
    _type: string;
  };
}

export interface FetchedImage {
  height: number;
  width: number;
  name: string;
  imgUrl: ImageUrl;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
}

export interface Image {
  name: string;
  width: number;
  height: number;
  src: string;
}
