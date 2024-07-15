'use client'
import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Space,
  Anchor,
} from "@mantine/core";
// import image from './image.svg';
import classes from "./VisitUs.module.css";
import { Map } from "../../Map/Map";

export function VisitUs() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Space h="xl" />
        <Space h="xl" />
        <Title className={classes.title}>THE 24 ADDA CAFE </Title>
        <Text fw={500} fz="lg" mb={5}>
          Visit us at our main location.
        </Text>

        <Space h="xl" />
        <Anchor
          href="https://maps.app.goo.gl/UpeYiCyNAoZhhek46"
          target="_blank"
        >
          THE 24 ADDA CAFE
        </Anchor>
        <Text fw={500} fz="sm" mb={5}>
          contact@the24addacafe.com
        </Text>
      </div>
    </div>
  );
}
