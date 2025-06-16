import React, { Fragment, useEffect, useState, useContext } from "react";
import SkipSelector from "../components/SkipSelector";
import LoadingSkips from "../components/LoadingSkips";
import SkipError from "../components/SkipError";
import { useSkip } from "../context/SkipContext";
/**
 * Renders the Skips component that displays a list of skips.
 * Utilizes the SkipSelector component to handle the display and sorting of skips.
 */

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

  //fetch skips

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
    <div className="min-h-screen  items-center justify-center p-4">
      {loading ? (
        <LoadingSkips />
      ) : (
        <Fragment>
          {error ? (
            <SkipError
              error={error}
              handleRetry={() => {
                setLoading(true);
                handleFetchSkips();
              }}
            />
          ) : (
            <SkipSelector
              skips={skips}
              handleSelect={handleSelect}
              selectedSkip={selectedSkip}
            />
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Skips;
