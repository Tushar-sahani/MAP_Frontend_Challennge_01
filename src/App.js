import data from "./constant/data";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto w-screen h-screen">
      <h1 className="text-2xl font-bold text-center my-8">
        Horizontal Scroll Cards
      </h1>
      <div className="overflow-x-scroll whitespace-nowrap py-4">
        {data.map((card) => (
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              tag={card.tag}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
