import { useParams } from "react-router-dom";
import { kitchens } from "../data/kitchens";
import { useEffect, useState } from "react";
import "../KitchenPage.css";
import { KitchenNavigate } from "../components/KitchenContent/KitchenNavigate/KitchenNavigate";
import { KitchenInfo } from "../components/KitchenContent/KitchenContent/KitchenInfo/KitchenInfo";
import { KitchenSlider } from "../components/KitchenContent/KitchenContent/KitchenSlider/KitchenSlider";
import { KitchenInfoMaterials } from "../components/KitchenContent/KitchenInfoMaterials/KitchenInfoMaterials";
import { KitchenMaterialsColors } from "../components/KitchenContent/KitchenMaterialsColors/KitchenMaterialsColors";
import { KitchenInterest } from "../components/KitchenContent/KitchenInterest/KitchenInterest";

export function KithcenPage() {
  const { id } = useParams();
  const [currentKitchen, setCurrenKitchen] = useState();
  useEffect(() => {
    const kitchen = kitchens.find((el) => el.id == id);
    setCurrenKitchen(kitchen);
  }, [id]);

  return (
    <section className="kitchen-page">
      {!currentKitchen || currentKitchen.length < 1 ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="container">
          <KitchenNavigate title={currentKitchen.title} />
          <h3 className="mobile-title text-lg">кухня {currentKitchen.title}</h3>
          <div className="kitchen-page-content">
            <KitchenSlider currentKitchen={currentKitchen} />
            <KitchenInfo currentKitchen={currentKitchen} />
          </div>
          <div className="kitchen-page-info">
            <p
              className="gray text-xs"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: currentKitchen.descriptions }}
            />
            <KitchenInfoMaterials currentKitchen={currentKitchen} />
            <KitchenMaterialsColors currentKitchen={currentKitchen} />
          </div>
          <h3 className="text-lg">Товари, які можуть вас зацікавити</h3>
          <KitchenInterest />
        </div>
      )}
    </section>
  );
}
