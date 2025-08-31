import { Hero } from "../components/Hero/Hero";
import { SeeMore } from "../components/SeeMore/SeeMore";
import "../general.css";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Advantages } from "../components/Advantages/Advantages";
import { CalculationQuiz } from "../components/CalculationQuiz/CalculationQuiz";
import { Discount } from "../components/Discount/Discount";
import { HowBornKitchen } from "../components/HowBornKitchen/HowBornKitchen";
import { LostDiscount } from "../components/LostDiscount/LostDiscount";
import { Partners } from "../components/Partners/Partners";
import { Questions } from "../components/Questions/Questions";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { Catalog } from "../components/Catalog/Catalog";
export function MainPage() {
  return (
    <>
      <Hero />
      <Catalog />
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
    </>
  );
}
