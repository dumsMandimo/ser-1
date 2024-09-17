import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import hair3 from '@/public/hair3.jpg';
import RequestForm from '@/components/RequestForm';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding to avoid the content being covered by the Navbar */}
      <div className="w-full h-screen bg-slate-600 flex pt-100"> {/* Adjusted here */}
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Book an appointment</CardTitle>
              <CardDescription>Enter details of your appointment below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RequestForm />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-5/6 h-5/6 rounded-lg overflow-hidden shadow-lg mt-12"> {/* Reduced the top margin here */}
            <Image
              src={hair3}
              alt="man-getting-haircut"
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              fill
              className="pointer-events-none select-none rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
