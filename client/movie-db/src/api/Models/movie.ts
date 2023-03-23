export default class Movie {
  _id: string;
  title: string;
  description: string;
  constructor(data) {
    this._id = data.id;
    this.title = data.title;
    this.description = data.description;
  }
}
