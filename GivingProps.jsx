export default function App() {
  // const catalogItems = array of objects here 💖
  const castalogItems = [
    {
      name: "Sunshine",
      category: "Developer",
      website: "sun.com"
    },
    {
    name: "Radha",
    category: "Student",
    website: "r14.com"
    },
    {
      name: "Rohit",
      category: "Game",
      website: "r45.com"
    }
   
  ];
  return (
    <div>
      {castalogItems.map(function (item) {
        return (
          <div>
            <h2>{item.name}</h2>
            <h3>Specialty: {item.category}</h3>
            <a href={item.website}>Learn more</a>
          </div>
        )
      })}
    </div>
  )
}
