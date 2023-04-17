import React, {useState} from "react";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import image2 from "../../images/flashcardBanner.png";
import image3 from "../../images/Screenshot (718).png";
import "./style.scss";
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoverValue, setHoverValue] = useState(null);
  const portfolioData = [
    {
      id: 2,
      name: "Development",
      image: image2,
      link: "",
    },
    {
      id: 3,
      name: "Design ",
      image: image2,
      link: "",
    },
    {
      id: 2,
      name: "Development",
      image: image2,
      link: "",
    },
    {
      id: 2,
      name: "Development",
      image: image2,
      link: "",
    },
  ];
  const filterData = [
    {
      filterId: 1,
      label: "All",
    },

    {
      filterId: 2,
      label: "Development",
    },

    {
      filterId: 3,
      label: "Design",
    },
  ];

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const filterdItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => {
          return item.id === filteredValue;
        });

  const handleHover = (index) => {
    setHoverValue(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        HeaderText="My Portfolio"
        Icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              onClick={() => {
                handleFilter(item.filterId);
              }}
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterdItems.map((item, index) => (
            <div
              key={`cartItem${index}`}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="#">
                  <img src={item.image} alt="img" />
                </a>
              </div>
              <div className="overlay">
                {index === hoverValue && (
                  <div className="">
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
