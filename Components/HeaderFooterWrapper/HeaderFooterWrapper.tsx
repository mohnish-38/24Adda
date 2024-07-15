'use client'
import React from 'react'
import { AppShell, Burger, Container, Group, UnstyledButton,Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderFooterWrapper.module.css';
import { useState } from 'react';
import { HeaderSimple } from '../Header/HeaderSimple';
import { FooterLinks } from '../Footer/FooterLinks';
import Link from 'next/link';

export default function HeaderFooter({ children }: { children: any }) {
    const [opened, setOpened] = useState(false);
  
    const toggle = () => setOpened((prevOpened) => !prevOpened);
  
    return (
      <AppShell
        header={{ height: 64 }}
        navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
       
        <HeaderSimple opened={opened} toggle={toggle} />
        <AppShell.Navbar py="md" px={4}>
          <Link href="/" className={classes.control} style={{textDecoration:'none',color:
          'black'
          }}>Home</Link>
          <Link href="/Menu" className={classes.control} style={{textDecoration:'none',color:
          'black'
          }}>Menu</Link>
          <Link href="/Order" className={classes.control} style={{textDecoration:'none',color:
          'black'
          }}>Order</Link>
          <Link href="/About" className={classes.control} style={{textDecoration:'none',color:
          'black'
          }}>About Us</Link>
        </AppShell.Navbar>
        {children}
        <FooterLinks/>
      </AppShell>
    );
  }