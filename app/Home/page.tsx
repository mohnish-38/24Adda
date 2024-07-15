'use client'
import React from "react";
import classes from "./page.module.css";
import {
  AspectRatio,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Paper,
  Skeleton,
  Space,
  Title,
  Text,
  Group,
  SimpleGrid,
  rem,
  Card,
  Image,
  Anchor,
} from "@mantine/core";
import { StatsGroup } from "../../Components/StatGroup/StatsGroup";
import { ImageCard } from "../../Components/ImageCard/ImageCard";
import { Map } from "../../Components/Map/Map";
import MobileNavbar from "../page";

const child = <Skeleton height={140} radius="md" animate={false} />;

const HomePage = () => (
  <>
    <div className={classes.section1}>
      <Container size="xl">
        <Space h="xl" />
        <Space h="xl" />
        <Grid grow gutter="xl">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <AspectRatio>
              <img
                src="https://images.unsplash.com/photo-1516197227520-4d1c419f6ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA2MjM3NTB8&ixlib=rb-4.0.3&q=80"
                alt="Cafe"
                className={classes.cafeImage}
              />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <Flex
              mih={50}
              gap="xl"
              justify="flex-start"
              align="flex-start"
              direction="column"
              wrap="wrap"
              className={classes.contentSection}
            >
              <Title className={classes.h1}>Welcome to THE 24 ADDA CAFE</Title>

              <button className={classes.menuButton}>Explore Our Menu</button>
              <p className={classes.description}>
                THE 24 ADDA CAFE is your go-to cafe for delightful brews, yummy
                treats, and a cozy atmosphere.
              </p>
            </Flex>
          </Grid.Col>
        </Grid>
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
      </Container>

      <Paper bg="rgba(0, 0, 0, .3)">
        <Container size="xl">
          <StatsGroup />
        </Container>
      </Paper>
    </div>
    <Space h="xl" />
    <Space h="xl" />
    <Paper>
      <Container size="xl">
        <Title className={classes.h1}>THE 24 ADDA Gallery</Title>
        <Space h="xl" />

        <SimpleGrid
          verticalSpacing="xs"
          cols={{ base: 1, sm: 1, lg: 2 }}
          maw="870px"
        >
          <Text>Take a look at our cozy cafe and delightful offerings.</Text>
          <Text>
            Experience the ambiance and charm of THE 24 ADDA CAFE through our
            gallery.
          </Text>
        </SimpleGrid>
        <Space h="xl" />
        <ImageCard />
        <Space h="xl" />
        <Space h="xl" />
        <Map />
      </Container>
    </Paper>
  </>
);

export default HomePage;
