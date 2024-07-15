'use client'
import React from "react";
import {
  Avatar,
  Container,
  Paper,
  ScrollArea,
  Space,
  Table,
  Text,
  Title,
} from "@mantine/core";

const data = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Coffee",
    job: "Rs.10",
    email: "Hot Coffee",
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Coffee",
    job: "Rs.10",
    email: "Hot Coffee",
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Coffee",
    job: "Rs.10",
    email: "Hot Coffee",
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Coffee",
    job: "Rs.10",
    email: "Hot Coffee",
  },
  {
    id: "5",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Coffee",
    job: "Rs.10",
    email: "Hot Coffee",
  },
];

export function Menulist() {
  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Avatar size={80} src={item.avatar} radius={26} />
      </Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.email}</Table.Td>
      <Table.Td>{item.job}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper>
      <Container size="xl">
        <Space h="xl" />
        <Space h="xl" />
        <Title fw={500} fz="lg" mb={5}>
          Menu
        </Title>
        <Space h="sm" />
        <Text fz="md" c="dimmed">
          Explore our offerings including prices and popular items.
        </Text>
        <Space h="md" />
        <Paper radius="lg" withBorder>
          <ScrollArea>
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Item Name</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Price</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
        </Paper>
      </Container>
    </Paper>
  );
}

export default Menulist;
