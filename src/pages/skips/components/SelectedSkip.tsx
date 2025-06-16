import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { X, Ruler, CalendarDays, Package, CheckCircle } from "lucide-react";

function SelectedSkip({ selectedSkip, handleCancel }: any) {
  if (!selectedSkip) return null;

  const totalPrice = Math.round(
    selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)
  );

  const keyFeatures = [
    {
      icon: <Ruler className="h-5 w-5 text-blue-500" />,
      title: "Dimensions",
      value: `${selectedSkip.size <= 6 ? "Compact" : "Large"} size`,
    },
    {
      icon: <Package className="h-5 w-5 text-green-500" />,
      title: "Capacity",
      value: `~${selectedSkip.size * 15} bin bags`,
    },
    {
      icon: <CalendarDays className="h-5 w-5 text-purple-500" />,
      title: "Hire Period",
      value: `${selectedSkip.hire_period_days} days`,
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
      title: "Includes",
      value: "Delivery & collection",
    },
  ];

  return (
    <Dialog
      open={!!selectedSkip}
      onOpenChange={(open) => !open && handleCancel()}
    >
      <DialogContent className="sm:max-w-md rounded-lg">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                {selectedSkip.size} Yard Skip
                <span className="text-sm font-normal bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Most Popular
                </span>
              </DialogTitle>
              <DialogDescription>
                Perfect for{" "}
                {selectedSkip.size <= 4
                  ? "small projects"
                  : selectedSkip.size <= 6
                  ? "home renovations"
                  : "large clearances"}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="my-4">
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold">£{totalPrice}</span>
            <span className="text-muted-foreground text-sm mb-1">
              incl. VAT
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-muted p-2 rounded-lg">{feature.icon}</div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {feature.title}
                  </p>
                  <p className="font-medium">{feature.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Button className="w-full h-12 bg-green-600 hover:bg-green-700">
              Proceed with hire
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Free cancellation up to 24 hours before delivery
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SelectedSkip;
