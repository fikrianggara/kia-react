import { MenuItem } from "../menu/Item";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon, ShareIcon } from '@heroicons/react/24/outline'

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <div className="grid grid-cols-6 gap-6 m-auto h-fit p-4 ">
                      <MenuItem title="Peduli Lindungi" className="bg-sky-400">
                        <svg width="24" viewBox="0 0 275 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M137.245 96.5073C168.846 96.5073 194.441 74.9138 194.441 48.2537C194.441 21.5935 168.846 0 137.245 0C105.644 0 80.049 21.5935 80.049 48.2537C80.049 74.9138 105.644 96.5073 137.245 96.5073ZM99.0667 246.576L117.369 227.275L73.4 196.392L40.5837 231.014C32.4333 239.579 32.2188 251.764 40.0118 260.57L74.3294 299.173C79.9775 305.506 88.5569 308.824 97.2078 308.824C103.142 308.824 109.219 307.255 114.367 303.998C127.021 296.036 129.524 280.897 120.086 270.221L99.0667 246.576ZM201.09 196.392L157.121 227.275L175.423 246.576L154.404 270.221C144.967 280.897 147.469 296.036 160.123 303.998C165.271 307.255 171.277 308.824 177.282 308.824C186.005 308.824 194.584 305.506 200.161 299.173L234.478 260.57C242.271 251.764 242.057 239.579 233.906 231.014L201.09 196.392V196.392ZM269.296 87.4598C260.217 76.5424 242.414 73.9488 229.474 81.5487L200.447 98.7391C162.769 121.056 111.65 121.056 74.0434 98.7391L45.0164 81.609C32.0758 73.9488 14.2736 76.6027 5.1937 87.4598C-3.88617 98.3772 -0.74039 113.396 12.1287 121.056L41.1557 138.247C53.3099 145.425 66.465 150.853 80.049 155.075V173.713H194.441V155.136C208.025 150.913 221.18 145.485 233.334 138.307L262.361 121.117C275.302 113.396 278.376 98.3772 269.296 87.4598Z" fill="white" />
                        </svg>
                      </MenuItem>
                      <MenuItem title="Download" className="bg-red-400">
                        <ArrowDownTrayIcon />
                      </MenuItem>
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
