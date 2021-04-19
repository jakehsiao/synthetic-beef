export interface IArticle {
  // Example interface with values
  title: string;
  url: string;
  img: string;
}

export interface dbInterface {
  // Example interface with both values and functions, gonna be implemented by class
  getAllArticles: () => IArticle[];
  // TODO: Add more functions and constants into this interface.
}