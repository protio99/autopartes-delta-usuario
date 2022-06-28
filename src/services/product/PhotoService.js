export class PhotoService {
  getImages() {
    return fetch("./photos.json")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        return d.data;
      });
  }
}
// src\services\product\photos.json
