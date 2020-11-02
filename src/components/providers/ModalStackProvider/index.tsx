import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ModalList } from 'components/experience/ModalStack';

export interface ModalEntry {
  name: ModalList;
  props?: { [x: string]: any };
}

interface ModalStackValue {
  activeModals: ModalEntry[];
  actions: {
    pushModal: (modal: ModalEntry) => void;
    popModal: () => void;
    removeModal: (modalName: ModalList) => void;
  };
}

const ModalStackContext = createContext<ModalStackValue>(undefined);

const ModalStackProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [activeModals, setActiveModals] = useState<ModalEntry[]>([]);

  const pushModal = useCallback((nextModal: ModalEntry) => {
    setActiveModals([...activeModals, nextModal]);
  }, [activeModals]);

  const popModal = useCallback(() => {
    setActiveModals(activeModals.slice(0, -1));
  }, [activeModals]);

  const removeModal = useCallback((modalName: ModalList) => {
    setActiveModals(activeModals.filter((modal) => modal.name !== modalName));
  }, [activeModals]);

  const providerValue = useMemo<ModalStackValue>(() => ({
    activeModals,
    actions: {
      pushModal,
      popModal,
      removeModal,
    },
  }), [activeModals]);

  return (
    <ModalStackContext.Provider value={providerValue}>
      {children}
    </ModalStackContext.Provider>
  );
};

export const useModals = () => useContext(ModalStackContext).activeModals;
export const useModalStackActions = () => useContext(ModalStackContext).actions;

export default ModalStackProvider;
