/* eslint-disable react-refresh/only-export-components */
import { createPubSub } from "./createPubSub";

export interface Person {
  first: string;
  last: string;
  age: number;
  gender: "Male" | "Female";
}

export const PERSON_DEAULT: Person = {
  first: "Peter",
  last: "Pan",
  age: 10,
  gender: "Male",
};

const { PubSubProvider, useSub } = createPubSub<Person>(PERSON_DEAULT);

export const PersonStoreProvider = PubSubProvider;
export const usePersonStore = useSub;

export function PersonFirstName() {
  const { data: firstName } = usePersonStore((store) => store.first);

  return (
    <div style={{ display: "flex" }}>
      <div>First Name: {firstName}</div>
    </div>
  );
}

export function PersonFirstNameInput() {
  const { data: firstName, setStore } = usePersonStore((store) => store.first);

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setStore({ first: e.target.value })}
      />
    </div>
  );
}

export function PersonLastName() {
  const { data: lastName } = usePersonStore((store) => store.last);

  return (
    <div style={{ display: "flex" }}>
      <div>Last Name: {lastName}</div>
    </div>
  );
}

export function PersonLastNameInput() {
  const { data: lastName, setStore } = usePersonStore((store) => store.last);

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setStore({ last: e.target.value })}
      />
    </div>
  );
}

export function PersonAge() {
  const { data: age } = usePersonStore((store) => store.age);

  return (
    <div style={{ display: "flex" }}>
      <div>Age: {age}</div>
    </div>
  );
}

export function PersonAgeInput() {
  const { data: age, setStore } = usePersonStore((store) => store.age);

  return (
    <div style={{ display: "flex" }}>
      <input
        type="number"
        value={age}
        onChange={(e) => setStore({ age: Number(e.target.value) })}
      />
    </div>
  );
}

export function PersonGender() {
  const { data: gender } = usePersonStore((store) => store.gender);

  return (
    <div style={{ display: "flex" }}>
      <div>Gender: {gender}</div>
    </div>
  );
}

export function PersonGenderSelect() {
  const { data: gender, setStore } = usePersonStore((store) => store.gender);

  return (
    <div style={{ display: "flex" }}>
      <select
        style={{ width: "100%" }}
        value={gender}
        onChange={(e) =>
          setStore({ gender: e.target.value as "Male" | "Female" })
        }
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
}