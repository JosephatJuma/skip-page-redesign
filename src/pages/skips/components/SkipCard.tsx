import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, ShieldCheck } from "lucide-react";

import {
  Yard4,
  Yard6,
  Yard8,
  Yard10,
  Yard12,
  Yard14,
  Yard40,
} from "@/assets/skip-yards";

type SkipCardProps = {
  skip: {
    size: number;
    price_before_vat: number;
    vat: number;
    hire_period_days: number;
    allowed_on_road?: boolean;
    allows_heavy_waste?: boolean;
  };
  isSelected?: boolean;
  handleSelect?: (skip: any) => void;
};

const SKIP_IMAGES: Record<number, string> = {
  4: Yard4,
  6: Yard6,
  8: Yard8,
  10: Yard10,
  12: Yard12,
  14: Yard14,
  20: Yard14,
  40: Yard40,
};

const getSkipImage = (size: number): string => {
  if (size <= 4) return SKIP_IMAGES[4];
  if (size <= 6) return SKIP_IMAGES[6];
  if (size <= 8) return SKIP_IMAGES[8];
  if (size <= 10) return SKIP_IMAGES[10];
  if (size <= 12) return SKIP_IMAGES[12];
  if (size <= 20) return SKIP_IMAGES[14];
  return SKIP_IMAGES[40];
};

const getSkipUseCase = (size: number) => {
  if (size <= 4) return "small home projects";
  if (size <= 6) return "medium renovations";
  if (size <= 10) return "large home projects";
  if (size <= 14) return "construction sites";
  return "commercial projects";
};

const SkipCard = ({
  skip,
  isSelected = false,
  handleSelect,
}: SkipCardProps) => {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  const image = getSkipImage(skip.size);

  const features = [
    {
      condition: true,
      icon: Truck,
      label: "Includes delivery & collection",
    },
    {
      condition: skip.allowed_on_road,
      icon: ShieldCheck,
      label: "Road Permit included",
    },
    {
      condition: skip.allows_heavy_waste,
      icon: Package,
      label: "Allows Heavy Waste",
    },
  ];

  return (
    <Card
      className={`overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-0 ${
        isSelected ? "ring-4 ring-primary border-primary" : "border-gray-300"
      }`}
    >
      {/* Top Image, no space above */}
      <div
        className="h-50 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {skip.size} Yard Skip
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Perfect for {getSkipUseCase(skip.size)}
              </CardDescription>
            </div>
            <Badge className="text-xs bg-gray-800 text-white">
              {skip.hire_period_days} day hire
            </Badge>
          </div>

          <div className="text-2xl font-bold text-center my-3 text-gray-900">
            £{totalPrice}
          </div>

          <div className="space-y-2 text-sm">
            {features
              .filter((f) => f.condition)
              .map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-purple-100 p-1.5 rounded-md">
                    <Icon className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{label}</span>
                </div>
              ))}
          </div>
        </div>

        <CardFooter className="mt-4 p-0">
          <Button
            size="sm"
            className={`w-full font-bold ${
              isSelected ? "bg-gradient-to-r from-green-600 to-emerald-700" : ""
            }`}
            onClick={() => handleSelect?.(skip)}
          >
            {isSelected && <CheckCircle className="mr-2 h-4 w-4" />}
            {isSelected ? "Selected" : "Select"}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default SkipCard;
