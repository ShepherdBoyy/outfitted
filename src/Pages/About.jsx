import topClothes from "../images/top-clothes.png"
import bottomClothes from "../images/bottom-clothes.png"
import shoes from "../images/shoes.png"

export default function About() {
  return (
    <div className="about">
      <div className="about-text">
        <p>
          Welcome to Outfitted, your best place for fashion ideas picked just
          for you! At Outfitted, we know how hard it is to find your perfect
          look in a changing fashion world. Our mission is simple: to help and
          motivate you in making your special style easily. We use the newest
          trends to give you daily outfit ideas that are made just for you. Our
          fashion team looks at the latest clothes and styles to give you cool
          outfits. They make sure you are on top in world of dress ups.
        </p>
        <p>
          If you're looking for the right clothes to wear on a special day or
          just want fashion ideas every day, Outfitted is your last place to go.
          We picked out items for different styles, helping you show off your
          own fashion sense. Look at our chosen things, find the biggest fashion
          styles and use them to make you looking better with Outfitted. Let us
          be the one you depend on for designing styles that show off who you
          are, how you feel and your way of living.
        </p>
        <p>
          Come with us on this fun style trip and improve how you dress! Check
          out Outfitted for cooler clothes items.
        </p>
      </div>

      <div className="about-image">
        <img src={topClothes} alt="T-Shirt" />
        <img src={bottomClothes} alt="Pants" />
        <img src={shoes} alt="Shoes" />
      </div>
    </div>
  )
}
