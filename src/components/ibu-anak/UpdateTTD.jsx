import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon, PlusIcon } from "@heroicons/react/24/outline";

export const UpdateTTD = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className=" bg-sky-50 flex py-2 justify-evenly items-center text-sky-500 rounded-md p-1 px-3 text-sm"
      >
        {/* <SecurityUpdateGoodOutlined></SecurityUpdateGoodOutlined> */}
        <PlusIcon className="w-4 mr-2" />
        Konfirmasi TTD
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 px-2 pb-2">
                    <div>
                      <label
                        htmlFor="share"
                        className="block text-md font-bold text-gray-700"
                      >
                        Konfirmasi Tablet Tambah Darah (TTD) hari ini
                      </label>
                    </div>
                    <div className="mb-4">
                      <div className="relative mt-1 mb-4 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="share"
                          className="block w-full rounded-md border-gray-300 border p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="berat dalam kilogram"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="bg-sky-400 hover:bg-sky-300 m-auto transition-all duration-150 text-white  px-5 py-2 rounded-md"
                      >
                        Konfirmasi
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
