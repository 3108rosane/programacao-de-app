export{};


declare global {
    interface Window {
        addPeloEnter: (Event: KeyboardEvent) => void;
        adicionarTarefa: () => void;
    }
}