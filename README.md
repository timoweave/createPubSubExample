# Create Pub/Sub Store Provider using React Context/Hook

We want to put a Pub/Sub Store Provider at the root and cover all the components and yet not re-render all the components. So that Pub/Sub Store Provider can scale to a large number of states and avoid components from re-rending from un-change state and ignore other state changes that a component does not depend on. 

# Outline
function `createPubSub` take type definition and default value to create Provider `PubSubProvider` and hook `useSub`. Inside `createPubSub`, it use `useRef` for context and use `useSyncExternalStore` for hook to subscribe for changes. The context host data and pub/sub, so that subscribers will be notified if a new state is changed. 

# Example

```
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

const {
   PubSubProvider, 
   useSub,
} = createPubSub<StreetType>(STREET_DEFAULT);

const Street1 = () => {
   const {store: street1} = useSub(
      store => store.street1,
   );
   return (<div>{street1}</div>);
}

const Street1Input = () => {
   const {store: street1, setStore} = useSub(
      store => store.street1,
   );
   return (
      <input 
         type="text" 
         value={street1} 
         onChange={e => setStore({street1: e.target.value})}
      />
   );
}

const Street2 = () => ...

const Street2Input = () => ...

const City = () => ...

const CityInput = () => ...

const County = () => ...

const CountyInput = () => ...

const State = () => ...

const StateInput = () => ...

const ZipCode = () => ...

const ZipCodeInput = () => ...

const App = () => (
   <PubSubProvider>
      <Street1/>
      <Street1Input/>
      <Street2/>
      <Street2Input/>
      <City/>
      <CityInput/>
      <County/>
      <CountyInput/>
      <State/>
      <StateInput/>
      <ZipCode/>
      <ZipCodeInput/>
   </PubSubProvider>
);
```