import { GoX } from "react-icons/go";

export default function ModalButton() {
  return (
    <button className=" p-3 border-2 border-outline border-opacity-15 bg-super-dark-gray rounded-xl">
      <GoX size={32} className=" fill-text" />
    </button>
  );
}
