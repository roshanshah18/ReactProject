import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode; 
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="relative z-50 ">
      <div className=" fixed bg-black/50 inset-0">
        <div className="fixed inset-0 flex justify-center items-center p-4">
          <div className="flex items-center justify-center w-full">
            {children} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

