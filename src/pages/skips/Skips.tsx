import React, { Fragment, useEffect, useState, useContext } from "react";
import SkipSelector from "./components/SkipSelector";
import LoadingSkips from "./components/LoadingSkips";
import SkipError from "./components/SkipError";
import { useSkip } from "../../context/SkipContext";

function Skips() {
  const {
    skips,
    loading,
    error,
    setLoading,
    setError,
    setSkips,
    selectedSkip,
    setSelectedSkip,
  } = useSkip();

  const handleFetchSkips = () => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleFetchSkips();
  }, []);

  const handleSelect = (skip: any) => {
    if (selectedSkip && selectedSkip.id === skip.id) setSelectedSkip(null);
    else setSelectedSkip(skip);
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center p-4">
      {/* Centered container for all states */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {loading ? (
          <div className="w-full flex justify-center">
            <LoadingSkips />
          </div>
        ) : (
          <Fragment>
            {error ? (
              <div className="w-full flex justify-center">
                <SkipError
                  error={error}
                  handleRetry={() => {
                    setLoading(true);
                    handleFetchSkips();
                  }}
                />
              </div>
            ) : (
              <div className="w-full">
                <SkipSelector
                  skips={skips}
                  handleSelect={handleSelect}
                  selectedSkip={selectedSkip}
                />
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Skips;
