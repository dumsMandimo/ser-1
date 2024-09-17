"use client";

import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { z } from "zod";
import { Map } from "./map";
import { FormItem } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ServiceCard } from './servicecard';
import PlaceSearchOrigin from './PlaceSearchOrigin';
import { DatePickerDemo } from './date';
import { Textarea } from './ui/textarea';
import { TimeInput } from "@nextui-org/date-input";
import { now, getLocalTimeZone } from "@internationalized/date";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  address: z.string().min(2).max(50),
  service: z.string().min(2).max(50),
  date: z.string().min(2).max(50),
  extras: z.string().min(2).max(50),
  notes: z.string().min(2).max(50),
});

const RequestForm = () => {
  const [value, setValue] = useState<string | null>('10:00');

  return (
    <div className="mt-20 flex flex-col">
      <form>
        <PlaceSearchOrigin />
        <DatePickerDemo />
        <TimeInput 
          isRequired 
          label="Event Time"
          className="custom-time-picker"
        />

        <div className="mt-5">
          <Label htmlFor="r1">Select service type</Label>

          <RadioGroup className="flex-row" defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Hair</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Fitness</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Nails</Label>
            </div>
          </RadioGroup>

          <Card className="w-full max-w-lg mt-5">
            <CardHeader>
              <CardTitle>Select your service</CardTitle>
              <CardDescription>Select a service below.</CardDescription>
            </CardHeader>

            <CardContent>
              {/* Grid layout for ServiceCard components */}
              <div className="grid grid-cols-2 gap-4">
                <ServiceCard />
                <ServiceCard />
              </div>
            </CardContent>

            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <Textarea className="mt-5" placeholder="Enter additional notes" />
        <Button className="mt-5">Submit</Button>
      </form>
    </div>
  );
};

export default RequestForm;
