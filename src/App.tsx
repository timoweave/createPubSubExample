import {
  AddressStoreProvider,
  City,
  CityInput,
  County,
  CountyInput,
  State,
  StateInput,
  Street1,
  Street1Input,
  Street2,
  Street2Input,
  ZipCode,
  ZipCodeInput,
} from "./Address.tsx";
import "./App.css";
import {
  PersonAge,
  PersonAgeInput,
  PersonFirstName,
  PersonFirstNameInput,
  PersonGender,
  PersonGenderSelect,
  PersonLastName,
  PersonLastNameInput,
  PersonStoreProvider,
} from "./Person.tsx";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr  1fr",
        gap: "10px",
        placeItems: "flex-start",
        width: "600px",
      }}
    >
      <div>
        <PersonStoreProvider>
          <PersonFirstName />
          <PersonFirstNameInput />
          <PersonLastName />
          <PersonLastNameInput />
          <PersonAge />
          <PersonAgeInput />
          <PersonGender />
          <PersonGenderSelect />
        </PersonStoreProvider>
      </div>
      <div>
        <AddressStoreProvider>
          <Street1 />
          <Street2 />
          <City />
          <County />
          <State />
          <ZipCode />
          <Street1Input />
          <Street2Input />
          <CityInput />
          <CountyInput />
          <StateInput />
          <ZipCodeInput />
        </AddressStoreProvider>
      </div>
    </div>
  );
}

export default App;
