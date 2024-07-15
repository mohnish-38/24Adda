import { Text, Title, TextInput, Button, Image, Anchor, Space, AspectRatio, Grid } from '@mantine/core';
import classes from './Map.module.css';

export function Map() {
  return (
    <Grid >
        <Grid.Col span={{ base: 12, xs: 4 }}>
        <Title className={classes.title}>Visit Us</Title>
        {/* <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text> */}
        <Text fz="sm" c="dimmed">
        Find us in the heart of City and enjoy a delightful experience.
        </Text>
        <Space h="xl" />
        <Anchor href="https://maps.app.goo.gl/UpeYiCyNAoZhhek46" target="_blank">
      THE 24 ADDA CAFE
    </Anchor>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3692.0851605453086!2d77.8712513!3d22.2747637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397dfd782601a743%3A0x210bea2f8ea0b77!2sThe%2024%20adda%20cafe%20bhoura!5e0!3m2!1sen!2sin!4v1720796136774!5m2!1sen!2sin" width="100%"  style={{border:0, borderRadius:'20px'}}  height="300px" allowFullScreen loading="lazy"></iframe>

        </Grid.Col>
      </Grid>
  );
}