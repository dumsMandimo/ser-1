import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import bb from '@/public/bb.jpg';
import RequestForm from '@/components/RequestForm';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const serviceCard = () => {
  return (
    <div>
     <Card className="w-40 max-w-lg">
            <CardHeader>
              <CardTitle>Box braids</CardTitle>
              <CardDescription> Classic box braids, typically take 3 hours. Includes wash and treament.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
          src={bb}
          alt="boxbraids"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "75%" }}
          fill
          className="pointer-events-none select-none"
          priority
        />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
    </div>
  );
};

export default serviceCard;
