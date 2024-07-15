'use client'
import { Text, Title, TextInput, Button, Image, Space } from '@mantine/core';
// import image from './image.svg';
import classes from './WelcomeSection.module.css';

export function WelcomeSection() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
      <Space h="xl" />
      <Space h="xl" />
        <Text fw={500} fz="lg" mb={5}>
          Welcome to THE 24 ADDA CAFE
        </Text>
        <Title className={classes.title}  fz={80}>Our Menu</Title>
        <Space h="sm" />
        <Text fz="md" c="dimmed">
          Discover our delightful brews and yummy treats,crafted to perfection.
        </Text>
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
      </div>
      {/* <Image src={image.src} className={classes.image} /> */}
    </div>
  );
}