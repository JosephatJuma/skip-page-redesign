import React, { useState } from "react";
import SkipCard from "./SkipCard";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Phone, MessageSquare, HelpCircle, MapPin } from "lucide-react";

const SkipSelector = ({ skips, selectedSkip, handleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect skip size for your project. All skips include a
            14-day hire period.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 rounded-full bg-background text-foreground border">
              <MapPin className="h-5 w-5 text-green-500 mr-2" />
              <span className="font-medium">Postcode: NR32</span>
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={skip.id === selectedSkip?.id}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        <Card className="mt-16 bg-gradient-to-r from-primary to-indigo-700 border-0">
          <CardContent className="p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl md:text-4xl font-bold">
                  Need help choosing?
                </CardTitle>
                <p className="text-xl opacity-90">
                  Our skip experts are ready to help you select the perfect size
                  for your project.
                </p>
              </CardHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="bg-primary-foreground/20 p-3 rounded-xl mr-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Call Us</h3>
                    <p className="opacity-90">0800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-foreground/20 p-3 rounded-xl mr-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Live Chat</h3>
                    <p className="opacity-90">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-foreground/20 p-3 rounded-xl mr-4">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Skip Guide</h3>
                    <p className="opacity-90">Find the right size</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkipSelector;
