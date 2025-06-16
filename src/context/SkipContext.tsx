import React, { ReactNode, useContext, createContext, useState } from "react";

// Skip type
export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

// Context value type
type SkipContextValue = {
  skips: Skip[];
  loading: boolean;
  error: Error | null;
  selectedSkip: Skip | null;
  setSkips: React.Dispatch<React.SetStateAction<Skip[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setSelectedSkip: React.Dispatch<React.SetStateAction<Skip | null>>;
};

// Context provider prop
type SkipProviderProps = {
  children: ReactNode;
};

// Create context with undefined fallback (will be handled in hook)
const SkipContext = createContext<SkipContextValue | undefined>(undefined);

// Provider component
export const SkipProvider = ({ children }: SkipProviderProps) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <SkipContext.Provider
      value={{
        skips,
        loading,
        error,
        selectedSkip,
        setSkips,
        setLoading,
        setError,
        setSelectedSkip,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export const useSkip = () => {
  const context = useContext(SkipContext);
  if (context === undefined) {
    throw new Error("useSkip must be used within a SkipProvider");
  }
  return context;
};
