import React, {useState} from "react";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import flashcardImg from "../../images/flashcardBanner.png";
import ticketBookingImg from "../../images/bookMyShow.png";
import addToCartImg from "../../images/addToCart.png";
import freebieseImg from "../../images/freebiese.png";
import todoAppImg from "../../images/todoApp.png";
import "./style.scss";
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoverValue, setHoverValue] = useState(null);
  const portfolioData = [
    {
      id: 2,
      name: "Flashcard Generator",
      image: flashcardImg,
      link: " https://flashcard-generator-1d2e8.web.app/",
    },
    {
      id: 3,
      name: "Freebiese Landing Page ",
      image: freebieseImg,
      link: "https://freebiese-landing-page.web.app/  ",
    },
    {
      id: 2,
      name: "Add to Cart",
      image: addToCartImg,
      link: "https://food-restaurant-d59ff.web.app/menu",
    },
    {
      id: 2,
      name: "Todo App",
      image: todoAppImg,
      link: " https://cheerful-pika-c2074d.netlify.app/",
    },
    {
      id: 2,
      name: "Ticket Booking ",
      image: ticketBookingImg,
      link: " https://book-my-show-client.web.app/",
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
                    <a href={item.link} target="blank">
                      <button>Visit</button>
                    </a>
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
