import { FC, PropsWithChildren, ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Button } from "../button/component";

interface MainMenuContextType {
  openedPart: string | null;
  setOpenedPart: (part: string | null) => void;
}

const MainMenuContext = createContext<MainMenuContextType | undefined>(undefined);

export const MainMenu: FC<PropsWithChildren<{}>> & { Group: FC<GroupProps>; Item: FC<ItemProps> } = ({ children }) => {
  const [openedPart, setOpenedPart] = useState<string | null>(null);
  const contextValue = useMemo(
    () => ({ openedPart, setOpenedPart }),
    [openedPart]
  );

  return (
    <MainMenuContext.Provider value={contextValue}>
      {children}
    </MainMenuContext.Provider>
  );
};

type GroupProps = {
  name: string;
  children: ReactNode;
}

const Group: FC<GroupProps> = ({ name, children }) => {
  const context = useContext(MainMenuContext);
  if (!context) {
    throw new Error("Group must be used within a MainMenu");
  }
  const { openedPart, setOpenedPart } = context;
  const isOpened = openedPart === name;

  return (
    <div>
      <Button onClick={() => setOpenedPart(isOpened ? null : name)}>
        {name}
      </Button>
      {isOpened && <div>{children}</div>}
    </div>
  );
};

type ItemProps = {
  title: string
}

const Item: FC<ItemProps> = ({ title }) => {
  return <div>{title}</div>;
};

MainMenu.Group = Group;
MainMenu.Item = Item;