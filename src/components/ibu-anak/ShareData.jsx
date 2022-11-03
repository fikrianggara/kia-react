import { MenuItem } from "../menu/Item";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon, ShareIcon } from "@heroicons/react/24/outline";

export const ShareData = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex flex-col justify-center align-middle rounded-md h-8 w-8 bg-black bg-opacity-20 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <ShareIcon className="flex w-4 h-4 m-2" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                      <label htmlFor="share" className="block text-md font-bold text-gray-700">
                        Bagikan Informasi Kehamilan
                      </label>
                    </div>
                    <div className="mb-4">
                      <div className="relative mt-1 mb-4 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="share"
                          className="block w-full rounded-md border-gray-300 border p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="NIK"
                        />
                      </div>
                      <div>
                        <div className="font-bold mb-3 text-gray-700">Siapa saja yang bisa akses</div>
                        <div>
                          <div class="flex items-center mx-auto p-3 cursor-pointer rounded-md mb-2 border-gray-200 flex-row hover:bg-gray-200">
                            <UserCircleIcon className="h-10 w-10 mr-2 text-sky-500" />
                            <div class="flex-1 text-left mt-6 sm:mt-0">
                              <div className="text-sm font-bold text-gray-600">John Doe</div>
                              <div className="text-xs">1804030402870001</div>
                            </div>
                          </div>
                          <div class="flex items-center mx-auto p-3 cursor-pointer rounded-md mb-2 border-gray-200 flex-row hover:bg-gray-200">
                            <UserCircleIcon className="h-10 w-10 mr-2 text-sky-500" />
                            <div class="flex-1 text-left mt-6 sm:mt-0">
                              <div className="text-sm font-bold text-gray-600">Jane Doe</div>
                              <div className="text-xs">1804034401890002</div>
                            </div>
                          </div>
                          <div class="flex items-center mx-auto p-3 cursor-pointer rounded-md mb-2 border-gray-200 flex-row hover:bg-gray-200">
                            <UserCircleIcon className="h-10 w-10 mr-2 text-sky-500" />
                            <div class="flex-1 text-left mt-6 sm:mt-0">
                              <div className="text-sm font-bold text-gray-600">John Kneddy</div>
                              <div className="text-xs">1804030402870001</div>
                            </div>
                          </div>
                          <div class="flex items-center mx-auto p-3 cursor-pointer rounded-md mb-2 border-gray-200 flex-row hover:bg-gray-200">
                            <UserCircleIcon className="h-10 w-10 mr-2 text-sky-500" />
                            <div class="flex-1 text-left mt-6 sm:mt-0">
                              <div className="text-sm font-bold text-gray-600">John Doe</div>
                              <div className="text-xs">1804030402870001</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-red-500 hover:bg-red-400 transition-all duration-150 text-white font-bold px-5 py-2 rounded-md">
                        Batal
                      </button>
                      <button className="bg-sky-500 hover:bg-sky-400 transition-all duration-150 text-white font-bold px-5 py-2 rounded-md">
                        Selesai
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
