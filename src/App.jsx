import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "..//src";

import Filter from "./components/Filter";
function App() {
  const [ratingChange, setRatingChange] = useState(1);
  const [SearchInput, setSearchInput] = useState("");
  const [newMovie, setnewMovie] = useState({});
  const [movieData, setMovieData] = useState([
    {
      id: Math.random(),
      title: "The forest",
      posterurl:
        "https://th.bing.com/th/id/OIP.0RTmzOe99uH1udYGkG4T9gHaK-?rs=1&pid=ImgDetMain",
      rating: 5,
      description:
        "Le film The Forest est un film d'horreur et de thriller psychologique réalisé par Jason Zada, sorti en 2016. Le film met en vedette Natalie Dormer dans le rôle principal.",
    },
    {
      id: Math.random(),
      title: "Frozen",
      posterurl:
        "https://1.bp.blogspot.com/-lsdKoJ4EsL8/YQj2GfxtdrI/AAAAAAAACIY/WVVaTLM9fPwIcgZBbAEVMYUQGMaSOdD3wCLcBGAsYHQ/s1920/asdadada.jpg",
      rating: 5,
      description:
        "La Reine des neiges (Frozen) est le 128 long-métrage d'animation et le 53 « Classique d'animation » des studios Disney.",
    },
    {
      id: Math.random(),
      title: "The conjuring ",
      posterurl:
        "https://th.bing.com/th/id/OIP.3o-QVdMC2ij76AqDmcF2cgHaHa?w=211&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating: 4,
      description:
        "Il s'agit de la série principale. C'est la seule série de la franchise qui est basée partiellement sur des faits réels, s'inspirant des affaires des chasseurs de fantôme Ed et Lorraine Warren..",
    },
    {
      id: Math.random(),
      title: "Christmas",
      posterurl:
        "https://th.bing.com/th/id/OIP.mK7G1MgmiqvCz25KXHQa8QHaK-?rs=1&pid=ImgDetMain",
      rating: 3,
      description:
        "Christmas is a film that captures the spirit of the holiday season, typically focusing on themes of love, family, redemption, and the magic of Christmas.",
    },
    {
      id: Math.random(),
      title: " The Cabin woods",
      posterurl:
        "https://th.bing.com/th/id/OIP.cJ2siwElbYruWsYC5cgyPwAAAA?rs=1&pid=ImgDetMain",
      rating: 2,
      description:
        "The Cabin in the Woods is a 2011 science fiction comedy horror film directed by Drew Goddard in his directorial debut, produced by Joss Whedon, and written by Whedon and Goddard.",
    },
    {
      id: Math.random(),
      title: "House Monster",
      posterurl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg",
      rating: 3,
      description:
        "Monster House, ou La Maison monstre au Québec, est une comédie d'animation américaine réalisée par Gil Kenan, sortie le 21 juillet 2006.",
    },
    {
      id: Math.random(),
      title: "Matrix",
      posterurl:
        "https://th.bing.com/th/id/OIP.gT4k51CwZKctAn4L2PUXPgHaKA?rs=1&pid=ImgDetMain",
      rating: 5,
      description:
        "Matrix ou La Matrice au Québec (The Matrix) est un film de science-fiction de type « cyberfilm » australo-américain écrit et réalisé par les Wachowski et sorti en 1999.",
    },
    {
      id: Math.random(),
      title: "Voyage 2",
      posterurl:
        "https://th.bing.com/th/id/R.9a3a2a9294f7abd62a4eb754c477ed0d?rik=VydigcMiSQWWhw&pid=ImgRaw&r=0",
      rating: 4,
      description:
        "Voyage au centre de la Terre 2 : L’Île mystérieuse ou Le 2 Voyage : L’Île mystérieuse au Québec (Journey 2: The Mysterious Island) est un film d'aventure fantastique américain réalisé par Brad Peyton, sorti en 2012.",
    },
    {
      id: Math.random(),
      title: "Hell Driver",
      posterurl:
        "https://th.bing.com/th/id/OIP.wAn278KavU82-rTh_iQ9lAHaJ4?rs=1&pid=ImgDetMain",
      rating: 3,
      description:
        "Milton est prêt à tout pour rattraper les fanatiques qui ont assassiné sa fille et kidnappé le bébé de celle-ci pour le sacrifier à la prochaine pleine lune.",
    },
    {
      id: Math.random(),
      title: "Barbie",
      posterurl:
        "https://th.bing.com/th/id/R.8a35d5b55398df981952f41f00480fb0?rik=ZJmCSzifFVmlig&pid=ImgRaw&r=0",
      rating: 5,
      description:
        "Parallèlement au monde réel, il existe Barbieland, un monde parfait où les poupées Barbie vivent joyeusement",
    },
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    setMovieData([...movieData, newMovie]);
    handleClose();
  };
  return (
    <>
      <NavBar
        ratingChange={ratingChange}
        setRatingChange={setRatingChange}
        setSearchInput={setSearchInput}
        newMovie={newMovie}
        handleSave={handleSave}
        show={show}
        handleClose={handleClose}
        setShow={setShow}
        setnewMovie={setnewMovie}
      />
      <Filter
        ratingChange={ratingChange}
        SearchInput={SearchInput}
        movieData={movieData}
      />
    </>
  );
}

export default App;
