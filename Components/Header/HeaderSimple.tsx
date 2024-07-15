"use client"
import { useState } from 'react';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/Home', label: 'Home' },
  { link: '/Menu', label: 'Menu' },
  { link: '/Order', label: 'Order' },
];

export function HeaderSimple({ opened, toggle }) {
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
      <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <MantineLogo size={28} />
        <Button visibleFrom="xs">Contact Us</Button> 
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}