export interface movieSeriesList {
  imageUrl: string;
  productCount: number;
  seriesCode: string;
  seriesName: string;
}

export interface movieTheme {
  movieContent: {
    content: string;
  };
  movieThemeSeriesList: movieSeriesList[];
}
