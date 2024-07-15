import { Divider, Group, Space, Text } from '@mantine/core';
import classes from './StatsGroup.module.css';

const data = [
  {
    title: 'Delightful Brews',
    stats: '01',
    description: ' Discover our wide range of coffee and tea selections.',
  },
  {
    title: 'Yummy Treats',
    stats: '02',
    description: 'Indulge in our freshly baked pastries and snacks.',
  },
  {
    title: 'Cozy Atmosphere',
    stats: '03',
    description: 'Enjoy a relaxing environment perfect for any occasion.',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => (<>
  <Group p="lg">
    <Text className={classes.count}>{stat.stats}</Text>
    <Divider orientation="vertical" />
    <div key={stat.title} className={classes.stat}>
      
      <Text  className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
    </Group>
    <Space h="xl" />
    </>
  ));
  return <div className={classes.root}>{stats}</div>;
}