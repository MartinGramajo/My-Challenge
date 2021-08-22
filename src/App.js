import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavReact from './components/NavReact';
import Header from './components/Header'
import Banner from './components/Banner';
import Article from './components/Article';
import Service from './components/Service';
import Productos from './components/Productos';
import Contacto from './components/Contacto'


const servicios = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Pick your Scooter",
    descripcion: "We show the most important info for the scooter closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Enjoy the ride",
    descripcion: "Scan the QR code and the bike will unlock. Retract the cable lock, put onn a helmet, and you're off! Always lock bikes away from walkways.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
];

const trabajos = [
  {
    image: "https://jrroofers.com/static/media/step1.dc109171.jpg",
    titulo: "Schedule Estimate",
    descripcion: "Contact us via call or email. We'll be in touch ASAP.",
  },
  {
    image: "https://jrroofers.com/static/media/step2.79bcd8a5.jpg",
    titulo: "Pick Material Color",
    descripcion: "That is a tough part, choosing color.",
  },
  {
    image: "https://jrroofers.com/static/media/step3.c2db276f.jpg",
    titulo: "Install New Roof",
    descripcion: "Our assistant will be there and install new roof.",
  },
  {
    image: "https://jrroofers.com/static/media/step4.3bc93ed9.jpg",
    titulo: "Enjoy Peace of Mind",
    descripcion: "Your new rooftop is ready and it's awesome.",
  },
]

function App() {
  return (
    <div className="">
      <NavReact sticky="top" />
      <Header />
      <Banner />
      <Article />
      <div className="mt-5 color-fondo">
        <h1 className="text-center text-white mt-3 mb-5 fs-1">  Our Services </h1>
        <div className=" container d-flex flex-wrap justify-content-between align-items-center mb-4">
          {servicios.map((servicio, i) =>
            <Service key={i} data={servicio} />
          )}
        </div>
      </div>
      <div>
      <h1 className="text-center text-dark mt-3 mb-5 fs-1">  Our Working Process </h1>
        <div className=" container d-flex col-12 text-center">
          {trabajos.map((trabajo, id) =>
            <Productos key={id} data={trabajo} />
          )}
        </div>
      </div>
      <Contacto />
    </div>
  );
}

export default App;
