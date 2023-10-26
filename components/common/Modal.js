import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ children, setShowModal, showModal }) {
  const childrenRef = useRef(null);

  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog initialFocus={childrenRef} onClose={() => setShowModal(false)}>
        {/* Modal backdrop */}
        <Transition.Child
          className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        {/* End: Modal backdrop */}

        {/* Modal dialog */}
        <Transition.Child
          className="fixed inset-0 z-10 flex p-6"
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <div className="max-w-5xl mx-auto h-full flex items-center">
            <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
              <div ref={childrenRef}>{children}</div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
        {/* End: Modal dialog */}
      </Dialog>
    </Transition>
  );
}
