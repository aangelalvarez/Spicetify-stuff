export const settingsStyles = `
dialog.fs-popup-modal {
    background-color: var(--spice-main);
    color: var(--spice-text);
    border: 1px solid rgba(var(--spice-rgb-text), 0.1);
    border-radius: 8px;
    padding: 0;
    width: clamp(550px, 50vw, 680px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    margin: auto;
}

dialog.fs-popup-modal-large {
    width: clamp(700px, 80vw, 900px);
}

dialog.fs-popup-modal::backdrop {
    background-color: rgba(0,0,0,0.5);
}

dialog.fs-popup-modal::-webkit-scrollbar {
    width: 7px;
}
dialog.fs-popup-modal::-webkit-scrollbar-thumb {
    border-radius: 2rem;
}

.fs-popup-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: var(--spice-main);
    position: sticky;
    top: 0;
    z-index: 2;
}

.fs-popup-modal-header h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    color: var(--spice-text);
}

.fs-popup-modal-close-btn {
    background: transparent;
    border: none;
    color: var(--spice-subtext);
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;
}

.fs-popup-modal-close-btn:hover {
    color: var(--spice-text);
    background-color: rgba(var(--spice-rgb-text), 0.1);
}

.fs-popup-modal-main-section {
    padding: 0 16px 16px;
    background-color: var(--spice-main);
    height: 75vh;
    max-height: 800px;
    overflow-y: auto;
}

dialog.fs-popup-modal.transparent-bg,
dialog.fs-popup-modal.transparent-bg::backdrop {
    background-color: transparent !important;
}
`;
