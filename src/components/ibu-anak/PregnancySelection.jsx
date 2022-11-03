import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const PregnancySelection = ({ preganciesData = [] }) => {
  const [pregnancy, setPregnancy] = useState(preganciesData[0] ?? null);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="h-8 w-fit">
        <Menu.Button className="w-full justify-center rounded-md h-full bg-black bg-opacity-20 px-2 sm:px-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="flex align-middle space-x-2 ">
            <span className="mb-0 text-xs w-20">
              Kehamilan {pregnancy.kehamilan_ke}
            </span>
            <ChevronDownIcon className="w-4 text-violet-200 hover:text-violet-100" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {preganciesData.map((item) => (
              <Menu.Item key={item.kehamilan_id}>
                {({ active }) => (
                  <button
                    onClick={() => setPregnancy(item)}
                    className={`${
                      active ? "bg-sky-600 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Kehamilan ke-{item.kehamilan_ke}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
