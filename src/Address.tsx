/* eslint-disable react-refresh/only-export-components */
import { createPubSub } from "./createPubSub";

interface StreetType {
  street1: string;
  street2: string;
  city: string;
  county?: string;
  state: string;
  zipCode?: number;
}

const STREET_DEFAULT: StreetType = {
  street1: "",
  street2: "",
  city: "",
  state: "",
};

const { PubSubProvider, useSub } = createPubSub<StreetType>(STREET_DEFAULT);

export const AddressStoreProvider = PubSubProvider;
export const useAddressStore = useSub;

export const Street1 = () => {
  const { data: street1 } = useSub((store) => store.street1);
  return <div style={{ display: "flex" }}>Street 1: {street1}</div>;
};

export const Street1Input = () => {
  const { data: street1, setStore } = useSub((store) => store.street1);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={street1}
        placeholder="street1"
        onChange={(e) => setStore({ street1: e.target.value })}
      />
    </div>
  );
};

export const Street2 = () => {
  const { data: street2 } = useSub((store) => store.street2);
  return <div style={{ display: "flex" }}>Street 2: {street2}</div>;
};

export const Street2Input = () => {
  const { data: street2, setStore } = useSub((store) => store.street2);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Street 2"
        value={street2}
        onChange={(e) => setStore({ street2: e.target.value })}
      />
    </div>
  );
};

export const City = () => {
  const { data: city } = useSub((store) => store.city);
  return <div style={{ display: "flex" }}>City: {city}</div>;
};

export const CityInput = () => {
  const { data: city, setStore } = useSub((store) => store.city);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setStore({ city: e.target.value })}
      />
    </div>
  );
};

export const County = () => {
  const { data: county } = useSub((store) => store.county);
  return <div style={{ display: "flex" }}>County: {county}</div>;
};

export const CountyInput = () => {
  const { data: county, setStore } = useSub((store) => store.county);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="County"
        value={county}
        onChange={(e) => setStore({ county: e.target.value })}
      />
    </div>
  );
};

export const State = () => {
  const { data: state } = useSub((store) => store.state);
  return <div style={{ display: "flex" }}>State: {state}</div>;
};

export const StateInput = () => {
  const { data: state, setStore } = useSub((store) => store.state);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setStore({ state: e.target.value })}
      />
    </div>
  );
};

export const ZipCode = () => {
  const { data: zipCode } = useSub((store) => store.zipCode);
  return <div style={{ display: "flex" }}>Zip Code: {zipCode}</div>;
};

export const ZipCodeInput = () => {
  const { data: zipCode, setStore } = useSub((store) => store.zipCode);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="number"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => setStore({ zipCode: Number(e.target.value) })}
      />
    </div>
  );
};
