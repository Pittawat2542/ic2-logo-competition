export enum Course {
  CSC491,
  CSC532
}

class Poster {
  id: number;
  authors: string[];
  title: string;
  abstract: string;
  imageURL?: string;
  pdfURL?: string;
  course: Course;

  constructor(id: number, authors: string[], title: string, abstract: string, course: string, imageURL?: string, pdfURL?: string) {
    this.id = id
    this.authors = [...authors]
    this.title = title;
    this.abstract = abstract;
    this.imageURL = imageURL;
    this.pdfURL = pdfURL;
    if (course === 'csc491') {
      this.course = Course.CSC491
    } else {
      this.course = Course.CSC532
    }
  }
}

type LoadPosterFromJSONFunc = (jsonPosters: { posterId: number, authors: string[], title: string, abstract: string, imageUrl?: string, pdfUrl?: string, course: string }[]) => Poster[]

export const loadPostersFromJSON: LoadPosterFromJSONFunc = (jsonPosters) => {
  return jsonPosters.map(jsonPoster => new Poster(jsonPoster.posterId, jsonPoster.authors, jsonPoster.title, jsonPoster.abstract, jsonPoster.course, jsonPoster.imageUrl, jsonPoster.pdfUrl));
}

export default Poster;