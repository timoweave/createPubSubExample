# Create Pub/Sub Store Provider using React Context/Hook

We want to put a Pub/Sub Store Provider at the root and cover all the components and yet not re-render all the components. So that Pub/Sub Store Provider can scale to a large number of states and avoid components from re-rending from un-change state and ignore other state changes that a component does not depend on. 

# Outline
function `createPubSub` take type definition and default value to create Provider `PubSubProvider` and hook `useSub`. Inside `createPubSub`, it use `useRef` for context and use `useSyncExternalStore` for hook to subscribe for changes. The context host data and pub/sub, so that subscribers will be notified if a new state is changed. 

# Example

```tsx
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

const pubSub = createPubSub<StreetType>(STREET_DEFAULT);
const StreetProvider = pubSub.PubSubProvider;
const useStreet = pubSub.useSub;

const Street1 = () => {
   const {data: street1} = useStreet(
      store => store.street1,
   );
   return (<div>{street1}</div>);
}

const Street1Input = () => {
   const {data: street1, setData} = useStreet(
      store => store.street1,
   );
   return (
      <input 
         type="text" 
         value={street1} 
         onChange={e => setData({street1: e.target.value})}
      />
   );
}

const Street2 = () => { /* ... */ }

const Street2Input = () => { /* ... */ }

const City = () => { /* ... */ }

const CityInput = () => { /* ... */ }

const County = () => { /* ... */ }

const CountyInput = () => { /* ... */ }

const State = () => { /* ... */ }

const StateInput = () => { /* ... */ }

const ZipCode = () => { /* ... */ }

const ZipCodeInput = () => { /* ... */ }

const App = () => (
   <StreetProvider>
      <Street1/>
      <Street2/>
      <City/>
      <County/>
      <State/>
      <ZipCode/>
      <Street1Input/>
      <Street2Input/>
      <CityInput/>
      <CountyInput/>
      <StateInput/>
      <ZipCodeInput/>
   </StreetProvider>
);
```