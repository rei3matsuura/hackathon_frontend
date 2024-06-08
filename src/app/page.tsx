"use client";

import { Flex } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';

import React from 'react';
import CustomButton from '../components/customButton';


export default function Home() {
  return (
    <main className={styles.background}>
      <Flex direction="column" align="center" justify="center" minH="100vh" gap={20}>
        <Text className={styles.text}>酔っ払いメーター</Text>
        <CustomButton
          to="/roulette-screen"
          width="350px"
          height="75px"
          fontSize="40px"
          padding="1.5rem"
          buttonColor="#F6F9F4" // ボタンの背景色
          textColor="#7648ec" // 文字の色
          iconSize="30px" // アイコンのサイズ
        >
          診断開始！　
        </CustomButton>
      </Flex>
    </main>
  );
}
