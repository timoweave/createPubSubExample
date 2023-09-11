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
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
    gap: "10px",
    placeItems: "flex-start",
    width: "600px",
  };

  return (
    <PersonStoreProvider>
      <AddressStoreProvider>
        <div style={style}>
          <div>
            <PersonFirstName />
            <PersonFirstNameInput />
            <PersonLastName />
            <PersonLastNameInput />
            <PersonAge />
            <PersonAgeInput />
            <PersonGender />
            <PersonGenderSelect />
          </div>
          <div>
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
          </div>
        </div>
      </AddressStoreProvider>
    </PersonStoreProvider>
  );
}

export default App;
