type AboutMe = {
  _id: string;
  _createdAt: Date;
  version: number;
  blurbs: string[];
  image: {
    url: string;
    alt: string;
    hotspot: {
      x: number;
      y: number;
    };
  };
  paragraphs: { title: string; text: string }[];
};
