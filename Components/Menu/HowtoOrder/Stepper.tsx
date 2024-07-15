"use client";
import { useState } from "react";
import { Stepper, Button, Group, Center } from "@mantine/core";

export default function StepsToOrder() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} pl="xl" visibleFrom="md">
        <Stepper.Step label="First step" description="Browse Menu">
          Step 1 : Explore our wide range of brews and treats.
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Place Order via SMS">
          Step 2 : Send us your order via SMS for a quick and easy experience.
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Sit back & Enjoy">
          Step 3 : We will deliver order to your place!
        </Stepper.Step>
        <Stepper.Completed>
          Our delivery partner deliver your order soon. Thanks
        </Stepper.Completed>
      </Stepper>

      <Stepper
        active={active}
        onStepClick={setActive}
        pl="xl"
        hiddenFrom="md"
        orientation="vertical"
      >
        <Stepper.Step label="First step" description="Browse Menu">
          Step 1 : Explore our wide range of brews and treats.
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Place Order via SMS">
          Step 2 : Send us your order via SMS for a quick and easy experience.
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Sit back & Enjoy">
          Step 3 : We will deliver order to your place!
        </Stepper.Step>
        <Stepper.Completed>
          Our delivery partner deliver your order soon. Thanks
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
