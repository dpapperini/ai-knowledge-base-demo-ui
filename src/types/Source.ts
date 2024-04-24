export interface Source {
  URL?: string;
  title?: string;
  // location?: string,
  location?: {
    s3Location?: {
      uri?: string,
      type?: string
    };
  };
  score?: string;
}