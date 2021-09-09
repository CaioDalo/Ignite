import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext'

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTrasactionModal 
        isOpen={isTransactionNewModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}