import { AboutUs } from "./components/AboutUs/AboutUs";
import { Advantages } from "./components/Advantages/Advantages";
import { CalculationQuiz } from "./components/CalculationQuiz/CalculationQuiz";
import { Discount } from "./components/Discount/Discount";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HowBornKitchen } from "./components/HowBornKitchen/HowBornKitchen";
import { LostDiscount } from "./components/LostDiscount/LostDiscount";
import { Partners } from "./components/Partners/Partners";
import { Questions } from "./components/Questions/Questions";
import { SeeMore } from "./components/SeeMore/SeeMore";
import { Testimonials } from "./components/Testimonials/Testimonials";
import "./general.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SeeMore />
      <Advantages />
      <HowBornKitchen />
      <Testimonials />
      <Discount />
      <CalculationQuiz />
      <AboutUs />
      <Partners />
      <Questions />
      <LostDiscount />
      <Footer />
    </>
  );
}

export default App;
