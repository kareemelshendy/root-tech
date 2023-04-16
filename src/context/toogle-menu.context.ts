import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface Props {
	showMenu?: boolean;
	setShowMenu?: Dispatch<SetStateAction<boolean | undefined>>;
}
export const ToggleMenu = createContext<Props>({
	showMenu: undefined,
	setShowMenu: undefined,
});

export const useToggleMenu = () => useContext(ToggleMenu);
