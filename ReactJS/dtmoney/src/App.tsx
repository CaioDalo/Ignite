import { useState } from 'react'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {

  const [isTransactionNewModalOpen, setIsTransactionNewModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsTransactionNewModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsTransactionNewModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <Modal 
      isOpen={isTransactionNewModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}