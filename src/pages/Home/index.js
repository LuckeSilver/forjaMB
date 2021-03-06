import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu";
import Anao from "../../assets/anao.png";
import Elfo from "../../assets/elfo.png";
import Faen from "../../assets/faen.png";
import Fauno from "../../assets/fauno.png";
import Fira from "../../assets/fira.png";
import Humano from "../../assets/humano.png";
import Juban from "../../assets/juban02.png";
import Levent from "../../assets/levent.png";
import Mahok from "../../assets/mahok.png";
import Metadilio from "../../assets/metadilio.png";
import Tailox from "../../assets/tailox.png";
import Racas from "../../assets/raca.png";
import Aesir from "../../assets/aesir.png";
import Asterio from "../../assets/asterio.png";
import Asteria from "../../assets/asteria.png";
import Centauro from "../../assets/centauro02.png";
import Input from "../../components/Input";

import raceDB from "../../db/raceDB";

import "./styles.css";

function Home() {
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [name, setName] = useState("");

  console.log(name);

  useEffect(() => {
    switch (selectedRace) {
      case "Aesir":
        document.getElementById("force").innerHTML = `${raceDB[1].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[1].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[1].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[1].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[1].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[1].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[1].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Aesir} alt="Aesir" />`;
        break;
      case "Anão":
        document.getElementById("force").innerHTML = `${raceDB[2].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[2].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[2].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[2].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[2].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[2].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[2].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Anao} alt="Anão" />`;
        break;
      case "Astério":
        document.getElementById("force").innerHTML = `${raceDB[3].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[3].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[3].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[3].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[3].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[3].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[3].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Asterio} alt="Astério" />`;
        break;
      case "Astéria":
        document.getElementById("force").innerHTML = `${raceDB[4].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[4].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[4].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[4].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[4].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[4].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[4].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Asteria} alt="Astéria" />`;
        break;
      case "Centauro":
        document.getElementById("force").innerHTML = `${raceDB[5].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[5].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[5].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[5].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[5].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[5].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[5].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Centauro} alt="Centauro" />`;
        break;
      case "Elfo":
        document.getElementById("force").innerHTML = `${raceDB[6].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[6].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[6].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[6].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[6].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[6].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[6].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Elfo} alt="Elfo" />`;
        break;
      case "Faen":
        document.getElementById("force").innerHTML = `${raceDB[7].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[7].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[7].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[7].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[7].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[7].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[7].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Faen} alt="Faen" />`;
        break;
      case "Fauno":
        document.getElementById("force").innerHTML = `${raceDB[8].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[8].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[8].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[8].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[8].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[8].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[8].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Fauno} alt="Fauno" />`;
        break;
      case "Fira":
        document.getElementById("force").innerHTML = `${raceDB[9].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[9].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[9].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[9].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[9].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[9].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[9].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Fira} alt="Fira" />`;
        break;
      case "Humano":
        document.getElementById("force").innerHTML = `${raceDB[10].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[10].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[10].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[10].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[10].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[10].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[10].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Humano} alt="Humano" />`;
        break;
      case "Juban":
        document.getElementById("force").innerHTML = `${raceDB[11].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[11].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[11].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[11].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[11].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[11].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[11].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Juban} alt="Juban" />`;
        break;
      case "Levent":
        document.getElementById("force").innerHTML = `${raceDB[12].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[12].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[12].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[12].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[12].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[12].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[12].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Levent} alt="Levent" />`;
        break;
      case "Mahok":
        document.getElementById("force").innerHTML = `${raceDB[13].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[13].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[13].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[13].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[13].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[13].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[13].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Mahok} alt="Mahok" />`;
        break;
      case "Metadílio":
        document.getElementById("force").innerHTML = `${raceDB[14].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[14].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[14].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[14].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[14].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[14].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[14].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Metadilio} alt="Metadílio" />`;
        break;
      case "Tailox":
        document.getElementById("force").innerHTML = `${raceDB[15].for}`;
        document.getElementById("agi").innerHTML = `${raceDB[15].agi}`;
        document.getElementById("int").innerHTML = `${raceDB[15].int}`;
        document.getElementById("vont").innerHTML = `${raceDB[15].von}`;
        document.getElementById(
          "classesCommon"
        ).innerHTML = `${raceDB[15].commonClasses}`;
        document.getElementById(
          "autoHabil"
        ).innerHTML = `${raceDB[15].autoHabil}`;
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[15].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Tailox} alt="Tailox" />`;
        break;
      default:
        document.getElementById(
          "description"
        ).innerHTML = `${raceDB[0].raceDescription}`;
        document.getElementById(
          "imgContainer"
        ).innerHTML = `<img src=${Racas} alt="Raças" />`;
    }
  }, [selectedRace]);

  return (
    <>
      <Menu />
      <h1>Criação de Personagem</h1>
      <div className="container">
        <form>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nome do jogador :"
            type="text"
          />
          <Input label="Nome do personagem :" type="text" />
          <Input label="Motivação :" type="text" />
          <div className="selectContainer">
            <span className="selectLabel">Raça</span>
            <select
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
              className="defaultSelect"
            >
              {raceDB.map((race) => (
                <option key={race.id}>{race.race}</option>
              ))}
            </select>
          </div>
          <div className="selectContainer">
            <span className="selectLabel">Classe</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="defaultSelect"
            >
              {raceDB.map((work) => (
                <option key={work.id}>{work.race}</option>
              ))}
            </select>
          </div>
        </form>
        <aside className="personDescription">
          <section className="sectionContent">
            <h2 className="raceTitle">
              Raça: <span>{selectedRace}</span>
            </h2>
            <div className="titleSection">
              <h3>Atributos Iniciais</h3> <h3>Classes Comuns</h3>
            </div>
            <div className="flex">
              <div className="attributes">
                <h3 className="attributeName">
                  Força : <span id="force"></span>
                </h3>
                <h3 className="attributeName">
                  Agilidade : <span id="agi"></span>
                </h3>
                <h3 className="attributeName">
                  Inteligência : <span id="int"></span>
                </h3>
                <h3 className="attributeName">
                  Vontade : <span id="vont"></span>
                </h3>
              </div>
              <div className="asideInfos">
                <p id="classesCommon"></p>
                <h3 className="habilName">Habil. Automática</h3>
                <p id="autoHabil"></p>
              </div>
            </div>
            <p className="description" id="description"></p>
          </section>
          <div id="imgContainer"></div>
        </aside>
      </div>
    </>
  );
}

export default Home;
