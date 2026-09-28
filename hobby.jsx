
import "./App.css";

function HobbyCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />

      <div className="content">
        <h2>
          {props.emoji} {props.name}
        </h2>

        <p>{props.description}</p>

        <button>My Hobby</button>
      </div>
    </div>
  );
}

function App() {
  const hobbies = [
    {
      name: "Cafe Exploring",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      description:
        "Finding small cafes and trying something new is my weekend plan.",
      emoji: "☕",
    },
    {
      name: "Plant Care",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
      description: "I enjoy taking care of plants and watching them grow.",
      emoji: "🌱",
    },
    {
      name: "Late Night Music",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      description:
        "Music is my favourite way to relax after a busy day.",
      emoji: "🎵",
    },
    {
      name: "Cycling",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
      description: "A short cycle ride helps me refresh my mind.",
      emoji: "🚴",
    },
    {
      name: "Dance",
      image:
        "https://plus.unsplash.com/premium_photo-1682089706055-d5ef14dc14e4?w=500&auto=format&fit=crop&q=60",
      description: "Dance is my favourite way to express my feeling.",
      emoji: "💃",
    },
  ];

  return (
    <div className="page">
      <h1>My Weekend Vibes</h1>

      <p className="subtitle">
        A few things I enjoy doing when college is over.
      </p>

      <div className="gallery">
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={index}
            name={hobby.name}
            image={hobby.image}
            description={hobby.description}
            emoji={hobby.emoji}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
