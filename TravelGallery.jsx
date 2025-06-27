export default function App() {
  const barcelonaImage = <img src="https://i.imgur.com/qaQNzqi.png" alt="Barcelona" />;
const tokyoImage = <img src= "https://i.imgur.com/OAx1wzO.png" alt="Tokyo" />;
const ohioImage = <img src="https://i.imgur.com/CxJjltu.png" alt="Ohio" />;

  const imageGallery = [
    <li key= "Barcelona">{barcelonaImage}</li>,
    <li key= "Tokyo">{tokyoImage}</li>,
    <li key="Ohio">{ohioImage}</li>
  ];
  
  
  return (
  <div>
    <h1>Recent Trips</h1>
    <ul>{imageGallery}</ul>
    </div>
  );
}

