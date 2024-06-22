import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]); //useState Hook

  //useEffect Hook
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=5")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="photos">
      {photos.map((photo) => (
        <img key={photo.id} src={photo.download_url} alt={photo.id} width={300} height={300} />
      ))}
    </div>
  );
}

export default App;
