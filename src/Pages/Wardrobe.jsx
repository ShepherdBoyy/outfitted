import { useState } from "react"

import database from "../database/Database.js"
import male from "../images/male.png"
import female from "../images/female.png"
import unisex from "../images/unisex.png"

export default function Wardrobe() {
  const [selectedButton, setSelectedButton] = useState("Casual")
  const [category, setCategory] = useState("male")
  const [style, setStyle] = useState("casual")
  const [selectedDays, setSelectedDays] = useState([])

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const handleCategoryChange = selectedCategory => {
    setCategory(selectedCategory)
    setStyle("casual")
  }

  const handleStyleChange = selectedStyle => {
    setStyle(selectedStyle)
  }

  const handleButtonClick = style => {
    setSelectedButton(style)
  }
  const renderOutfitImages = () => {
    const selectedOutfits = database[category][style]

    const handleDayChange = (index, event) => {
      const selectedDay = event.target.value
      let updatedSelectedDays = [...selectedDays]
      updatedSelectedDays = updatedSelectedDays.filter(
        day => day !== selectedDay
      )
      updatedSelectedDays[index] = selectedDay
      setSelectedDays(updatedSelectedDays)
    }

    return (
      <div className="image-container">
        {selectedOutfits.map((outfit, index) => (
          <div key={index}>
            <img src={outfit} alt={`Outfit ${index + 1}`} />
            <select
              onChange={event => handleDayChange(index, event)}
              className="day-button"
            >
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="wardrobe-container">
      <div className="wardrobe-categories">
        <button
          onClick={() => {
            handleCategoryChange("male")
            setSelectedButton("Casual")
          }}
        >
          <img src={male} alt="Male" />
        </button>
        <button
          onClick={() => {
            handleCategoryChange("female")
            setSelectedButton("Casual")
          }}
        >
          <img src={female} alt="Female" />
        </button>
        <button
          onClick={() => {
            handleCategoryChange("unisex")
            setSelectedButton("Casual")
          }}
        >
          <img src={unisex} alt="Unisex" />
        </button>
      </div>

      <div className="wardrobe-styles">
        <button
          onClick={() => {
            handleButtonClick("Casual")
            handleStyleChange("casual")
          }}
          className={selectedButton === "Casual" ? "selected" : ""}
        >
          Casual
        </button>
        <button
          onClick={() => {
            handleButtonClick("Formal")
            handleStyleChange("formal")
          }}
          className={selectedButton === "Formal" ? "selected" : ""}
        >
          Formal
        </button>
        <button
          onClick={() => {
            handleButtonClick("Summer")
            handleStyleChange("summer")
          }}
          className={selectedButton === "Summer" ? "selected" : ""}
        >
          Summer
        </button>
        <button
          onClick={() => {
            handleButtonClick("Sports")
            handleStyleChange("sports")
          }}
          className={selectedButton === "Sports" ? "selected" : ""}
        >
          Sports
        </button>
        <button
          onClick={() => {
            handleButtonClick("Street")
            handleStyleChange("street")
          }}
          className={selectedButton === "Street" ? "selected" : ""}
        >
          Street
        </button>
        <button
          onClick={() => {
            handleButtonClick("Retro")
            handleStyleChange("retro")
          }}
          className={selectedButton === "Retro" ? "selected" : ""}
        >
          Retro
        </button>
      </div>

      <div>{renderOutfitImages()}</div>

      <section id="daily-outfit-section" className="daily-outfit-container">
        <h1>Daily Outfit</h1>
        <div className="all-days">
          {days.map(day => (
            <div key={day} className="days-container">
              <h2>{day}</h2>
              {selectedDays.map((selectedDay, index) => {
                if (selectedDay === day) {
                  return (
                    <img
                      key={index}
                      src={database[category][style][index]}
                      alt={`Outfit for ${day}`}
                    />
                  )
                }
                return null
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
