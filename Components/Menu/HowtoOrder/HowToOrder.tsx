"use client";
import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Space,
  Container,
  Stepper,
} from "@mantine/core";
// import image from './image.svg';
import classes from "./HowToOrder.module.css";
import StepsToOrder from "./Stepper";

export function HowToOrder() {
  return (
    <Container size="xl">
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Text fw={500} fz="lg" mb={5}>
            How To Order
          </Text>
          <Title className={classes.title}>Enjoy Order in 3 Easy Steps</Title>
          <Space h="sm" />
          <Text fz="md" c="dimmed">
            Follow these simple steps to place your order and enjoy our
            delightful offerings.
          </Text>
        </div>
        {/* <Image src={image.src} className={classes.image} /> */}
      </div>
      <Space h="xl" />
      <StepsToOrder />
      <Space h="xl" />
    </Container>
  );
}
