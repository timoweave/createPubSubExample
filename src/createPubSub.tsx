/* eslint-disable react-refresh/only-export-components */
import {
  useRef,
  useCallback,
  useSyncExternalStore,
  createContext,
  useContext,
} from "react";

export function createPubSub<StoreData>(initialState: StoreData) {
  type Callback = () => void;

  type PubSubContextType = {
    get: () => StoreData;
    set: (value: Partial<StoreData>) => void;
    subscribe: (callback: Callback) => Callback;
  };

  const PubSubContext = createContext<PubSubContextType>({
    get: () => initialState,
    set: (v: Partial<StoreData>): void => {
      v;
    },
    subscribe: (cb: Callback): Callback => {
      return cb;
    },
  });

  function usePubSub(initialStore: StoreData): PubSubContextType {
    const store = useRef<StoreData>(initialStore);
    const subscribers = useRef<Set<Callback>>(new Set<Callback>());

    const get = useCallback((): StoreData => {
      return store.current;
    }, []);

    const set = useCallback((value: Partial<StoreData>): void => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback: Callback): void => {
        callback();
      });
    }, []);

    const subscribe = useCallback((callback: Callback): Callback => {
      subscribers.current.add(callback);
      const unsubscribe = () => {
        subscribers.current.delete(callback);
      };
      return unsubscribe as Callback;
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  const PubSubProvider = (props: React.PropsWithChildren) => {
    const pubSub = usePubSub(initialState);

    return (
      <PubSubContext.Provider value={pubSub}>
        <>{props.children}</>
      </PubSubContext.Provider>
    );
  };

  function useSub<StoreMember>(
    selectStoreMember: (store: StoreData) => StoreMember,
  ) {
    const context = useContext(PubSubContext);
    const data = useSyncExternalStore(
      (onChange) => context.subscribe(onChange),
      () => selectStoreMember(context.get()),
    );
    return { data, setData: context.set };
  }

  return { PubSubProvider, useSub };
}
