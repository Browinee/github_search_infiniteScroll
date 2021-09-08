import { useCallback, useEffect, useState } from "react";

type useModalProps = {
  isModalOpen: boolean;
  toggleModal: (status: boolean) => void;
};
const useModal = (initialStatus?: boolean): useModalProps => {
  const [isModalOpen, setIsModalOpen] = useState(initialStatus || false);
  const toggleModal = useCallback((status) => {
    setIsModalOpen(status);
  }, []);
  useEffect(() => {
    setIsModalOpen(initialStatus || false);
  }, [initialStatus]);
  return { isModalOpen, toggleModal };
};

export default useModal;
