import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindowF,
  Autocomplete,
  Libraries,
} from "@react-google-maps/api";

import classes from "./LocationFilter.module.css";
import { useRef, useState } from "react";
import PopUp from "../../ui/PopUp";
import {
  changeValue,
  focusInput,
  useSelectFilter,
} from "../../../db/slices/filterSlice";
import { useDispatch } from "react-redux/es/exports";
import { setDefaults, OutputFormat, geocode, RequestType } from "react-geocode";
import { AnimatePresence, motion } from "framer-motion";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const libraries: Libraries = ["places"];
const LocationFilter = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });
  setDefaults({
    key: GOOGLE_API_KEY,
    language: "en",
    region: "es",
    outputFormat: OutputFormat.JSON,
  });

  const locationFilter = useSelectFilter("location");
  const dispatch = useDispatch();
  const [marker, setMarker] = useState<{
    lat: number;
    lng: number;
  }>();
  const [infoActive, setInfoActive] = useState<boolean | null>(null);
  const [center, setCenter] = useState({ lat: 43.2, lng: 27.9 });

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const classNames = [classes.location];
  const locationHandler = async (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    if (lat && lng) {
      setMarker({ lat: lat, lng: lng });
      setInfoActive(true);
      geocode(RequestType.LATLNG, `${lat},${lng}`)
        .then(({ results }) => {
          const address = results[0].formatted_address;
          dispatch(changeValue({ filter: "location", value: address }));
        })
        .catch(console.error);
    }
  };

  const placeChangeHandler = () => {
    if (autoCompleteRef.current) {
      const adress =
        autoCompleteRef.current.getPlace()["formatted_address"];
      dispatch(
        changeValue({
          filter: "location",
          value: adress,
        })
      );
      geocode(RequestType.ADDRESS, adress!).then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setCenter({ lat, lng });
        setMarker({ lat, lng });
        setInfoActive(true);
      });
    }
  }

  return (
    <div className={classes.locationWrapper}>
      <div
        className={
          locationFilter.isFocused
            ? [...classNames, classes.focused].join(" ")
            : classNames.join(" ")
        }
      >
        <label htmlFor="location">Where?</label>
        {isLoaded && (
          <Autocomplete
            className={classes.inputText}
            onLoad={(autocomplete) => {
              autoCompleteRef.current = autocomplete;
            }}
            onPlaceChanged={placeChangeHandler}
          >
            <input
              id="location"
              onFocus={() => dispatch(focusInput({ filter: "location" }))}
              type="text"
              placeholder="search destinations"
              value={locationFilter.value!}
              onChange={(e) =>
                dispatch(
                  changeValue({
                    filter: "location",
                    value: e.currentTarget.value,
                  })
                )
              }
            />
          </Autocomplete>
        )}
      </div>

      <AnimatePresence>
        {locationFilter.isFocused && isLoaded && (
          <PopUp id="filterPopups" classes={classes.popup}>
            <motion.div
              layout
                   animate={{ height:300, opacity:1 }}
                   initial={{ opacity:0,height:0 }}
                       exit={{ opacity:0,height:0 }}
                   transition={{ type: "spring" }}
            >
              <GoogleMap
                onClick={(e) => locationHandler(e)}
                mapContainerClassName={["map-container", classes.map].join(" ")}
                center={center}
                zoom={10}
              >
                {marker && (
                  <Marker position={marker}>
                    {infoActive && (
                      <InfoWindowF
                        position={marker}
                        onCloseClick={() => setInfoActive(false)}
                      >
                        <p>{locationFilter.value}</p>
                      </InfoWindowF>
                    )}
                  </Marker>
                )}
              </GoogleMap>
            </motion.div></PopUp>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationFilter;
