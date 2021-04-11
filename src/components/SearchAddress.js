import React, { useRef, useCallback, useState } from "react";
import { useLoadScript } from "@react-google-maps/api"; //npm i -S @react-google-maps/api
import usePlacesAutocomplete from "use-places-autocomplete"; //npm install --save use-places-autocomplete
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"; //npm install @reach/combobox
import { Form } from "react-bootstrap";
import "@reach/combobox/styles.css";

/* 
---------------------------------------------------------------------------
Component to autofill address using GoogleAPI
---------------------------------------------------------------------------
*/

const libraries = ["places"];

const SearchAddress = ({
  setInputAddress,
  setCity,
  setProvince,
  setCountry,
}) => {
  const [resultAddress, setResultAddress] = useState("");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  setInputAddress(resultAddress);

  return (
    <Search
      setResultAddress={setResultAddress}
      setCity={setCity}
      setProvince={setProvince}
      setCountry={setCountry}
    />
  );
};

function Search({ setResultAddress, setCity, setProvince, setCountry }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    const addressArray = address.split(",");
    setValue(addressArray[0], false);
    setResultAddress(addressArray[0]);
    setCity(addressArray[1]);
    setProvince(addressArray[2]);
    setCountry(addressArray[3]);
    clearSuggestions();
  };

  return (
    <Combobox onSelect={handleSelect} className="search">
      <ComboboxInput
        required
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search your location"
        className="search"
      />
      <Form.Control.Feedback type="invalid">
        Please enter address
      </Form.Control.Feedback>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption
                key={id}
                value={description}
                // optionsAddress={description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default SearchAddress;
