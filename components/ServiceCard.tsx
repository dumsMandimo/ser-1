import { View, Text } from 'react-native';
import Image from 'next/image';
import bb from '@/public/bb.jpg';
import { Checkbox } from './ui/checkbox';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

export function ServiceCard() {
  return (
    <div>
      <Card className="w-30 max-w-lg">
        <CardHeader>
          <CardTitle>Box braids</CardTitle>
          <CardDescription>
            Classic box braids, typically takes 3 hours to complete, includes hairpiece, wash, and treatment.test.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center">
          {/* Container for the image to control its size and fit */}
          <div className="w-full h-48 relative rounded-lg overflow-hidden">
            <Image
              src={bb}
              alt="box braids"
              quality={100}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="pointer-events-none select-none"
            />
          </div>
        </CardContent>

        <CardFooter>
          <div className='flex-row'>
          <p>R800.00</p>
          <Checkbox/>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ServiceCard;
