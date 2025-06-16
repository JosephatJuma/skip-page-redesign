import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Home,
  ShieldCheck,
  CheckCircle,
  Package,
  Ruler,
  ShoppingBasket,
} from "lucide-react";

type SkipCardProps = {
  skip: any;
  isSelected?: boolean;
  handleSelect?: (skip: any) => void;
};

const SkipCard = ({
  skip,
  isSelected = false,
  handleSelect,
}: SkipCardProps) => {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  // Calculate dimensions based on skip size
  const dimensions = {
    width:
      skip.size <= 6 ? `${skip.size * 0.9 + 2.5}m` : `${skip.size * 0.75 + 3}m`,
    height: skip.size <= 6 ? "1.8m" : "2.2m",
    depth: skip.size <= 6 ? "1.5m" : "2.0m",
  };

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSelected ? "ring-4 ring-primary border-primary" : "border-gray-500"
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">
              {skip.size} Yard Skip
            </CardTitle>
            <CardDescription className="mt-1">
              Perfect for {getSkipUseCase(skip.size)}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            {skip.hire_period_days} day hire
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-5 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Home className="h-4 w-4 text-blue-600" />
              </div>
              <span>Home Use</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <ShieldCheck className="h-4 w-4 text-green-600" />
              </div>
              <span>Includes VAT</span>
            </div>

            {skip.allowed_on_road && (
              <div className="flex items-center gap-2">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                </div>
                <span>Road Permit</span>
              </div>
            )}

            {skip.allows_heavy_waste && (
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Package className="h-4 w-4 text-purple-600" />
                </div>
                <span>Heavy Waste</span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="text-3xl font-bold mb-1">£{totalPrice}</div>
          <p className="text-muted-foreground text-sm">
            Includes delivery & collection
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Ruler className="h-4 w-4" />
              <span>Dimensions</span>
            </div>
            <div className="font-medium">
              {dimensions.width} × {dimensions.height} × {dimensions.depth}
            </div>
          </div>
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <ShoppingBasket className="h-4 w-4" />
              <span>Capacity</span>
            </div>
            <div className="font-medium">~{skip.size * 15} bin bags</div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          size="lg"
          className={`w-full font-bold ${
            isSelected ? "bg-gradient-to-r from-green-600 to-emerald-700" : ""
          }`}
          onClick={() => handleSelect?.(skip)}
        >
          {isSelected ? <CheckCircle className="mr-2 h-5 w-5" /> : null}
          {isSelected ? "Selected" : "Select this skip"}
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to generate use cases based on skip size
const getSkipUseCase = (size: number) => {
  if (size <= 4) return "small home projects";
  if (size <= 6) return "medium renovations";
  if (size <= 10) return "large home projects";
  if (size <= 14) return "construction sites";
  return "commercial projects";
};

export default SkipCard;
