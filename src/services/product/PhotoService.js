import photoData from "./photos.json";

console.log(photoData);
export class PhotoService {
  getImages() {
    return fetch(photoData)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((d) => {
        console.log(d);
        return d.data;
      });
  }
}
// src\services\product\photos.json
