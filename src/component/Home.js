import React from "react";
import styled from "styled-components";
import Section from "./Section";

export default function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        showDownArrow
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
      />
      <div className="flex justify-center pb-24">
      <div className="grid grid-cols-8 gap-2 font-semibold text-black">
      <p>tesla @ 2022</p>
      <p>privacy & Legal</p>
      <p>Vehical Recalls</p>
      <p>Conact</p>
      <p>Careers</p>
      <p>News</p>
      <p>Engage</p>
      <p>Locations</p>
      </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
