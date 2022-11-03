import { MaternalSelection } from "@/components/ibu-anak/MaternalSelection";
import { showFormattedDate } from "@/utils";
import { UserCircleIcon } from "@heroicons/react/24/outline"

import akta from "@/assets/ibu-anak/akta.png"
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";


const dummyData = [
  {
    kelahiran_id: 1,
    kelahiran_ke: 1,
    details: [
      {
        key: "Lokasi",
        value: "Puskesmas Bidara Cina"
      },
      {
        key: "Tanggal",
        value: "15 Juli 2018"
      },
      {
        key: "Jam",
        value: "21.00"
      },
      {
        key: "Jenis Kelamin",
        value: "Laki-Laki"
      },
      {
        key: "Berat Bay",
        value: "3 kg"
      },
      {
        key: "Panjang Bayi",
        value: "30 cm"
      },
      {
        key: "Menangis",
        value: "Ya"
      },
      {
        key: "Kondisi Bay",
        value: "Hidup"
      },
      {
        key: "Kondisi Ibu",
        value: "Hidup"
      }
    ],
    akta: {
      completed: true,
      name: "Al Ghiffari",
      tempat_lahir: "Kampung Melayu"
    }
  },
  {
    kelahiran_id: 2,
    kelahiran_ke: 2,
    details: [
      {
        key: "Lokasi",
        value: "Puskesmas Kampung Melayu"
      },
      {
        key: "Tanggal",
        value: "02 September 2022"
      },
      {
        key: "Jam",
        value: "15.00"
      },
      {
        key: "Jenis Kelamin",
        value: "Laki-Laki"
      },
      {
        key: "Berat Bay",
        value: "2.7 kg"
      },
      {
        key: "Panjang Bayi",
        value: "28 cm"
      },
      {
        key: "Menangis",
        value: "Ya"
      },
      {
        key: "Kondisi Bay",
        value: "Hidup"
      },
      {
        key: "Kondisi Ibu",
        value: "Hidup"
      }
    ],
    akta: {
      completed: false,
      name: "",
      tempat_lahir: ""
    }
  }
]

export const PersalinanDashboard = ({ data: userData }) => {
  const user = userData[0] ? userData[0] : null;

  const [data, setData] = useState(dummyData[0])

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-sky-600 p-4 text-white pb-2 rounded-b-2xl space-y-2">
        <nav className="flex items-center w-full ">
          <div className="flex space-x-2 items-center  w-full">
            <div className=" w-full space-y-1 flex flex-row justify-between align-middle">
              <div>
                <div className="flex text-xs items-center">
                  <UserCircleIcon className="w-8 mr-2 mb-2" />
                  <h1 className="font-medium">{user.nama}</h1>
                </div>
              </div>
              <div className="flex space-x-1">
                <MaternalSelection selection={data} data={dummyData} onSelect={(item) => setData(item)} />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="m-2 mt-4 shadow-md bg-gradient-to-tr from-red-500 to-sky-500  h-48 border rounded-lg flex justify-center items-center text-white">
        <div className="font-bold text-2xl">🎇 Selamat Bayi Anda Telah Lahir 🎇</div>
      </div>
      <div className="m-2 mt-4 bg-white border rounded-lg">
        <div className="border rounded-lg p-4 space-y-2">
          <div className="flex text-sky-800 font-medium items-center justify-between">
            <h3>Detail Persalinan</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <div className="flex space-x-2 items-center text-sky-800 font-medium">
                <UserCircleIcon className="w-8" />
                <span>Bidan Resti</span>
              </div>
              <div className="mr-2">
                {showFormattedDate(new Date())}
              </div>
            </div>

            <div className="space-y-2 text-gray-600">
              <div className="flex">
                <table className="m-auto text-sm text-left w-full border border-gray-200">

                  <tbody>
                    {data.details.map(item => (
                      <tr className="border" key={item.key}>
                        <td className="p-2">{item.key}</td>
                        <td className="w-2/4 p-2 text-green-500">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 mt-4 mb-4 p-4 bg-white border rounded-lg">
        <div className="flex text-sky-800 font-medium items-center justify-between mb-2">
          <h3>Pengajuan Akta Kelahiran</h3>
        </div>
        <div className="p-2 bg-sky-50 rounded text-sm mb-4">
          <p className="mb-3 font-normal text-sky-500 dark:text-gray-400">
            Pengajuan akta kelahiran bekerja sama dengan dukcapil. Lengkapi beberapa data berikut untuk mencetak akta kelahiran anak
          </p>
        </div>
        {data.akta.completed && (
          <div className="flex justify-between items-center p-2 bg-green-50 rounded text-sm mb-4">
            <p className="mb-3 font-normal text-sky-500 dark:text-gray-400">
              Akta kelahiran telah terbit
            </p>
            <div>
              <button className="p-2 bg-green-200 rounded-md text-gray-600" onClick={() => setIsOpen(true)}>
                Buka
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
                            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
                              <img src={akta} alt="Ilustrasi" />
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        )}
        <div>
          <div className="relative mt-1 mb-4 rounded-md shadow-sm">
            <label className="text-sm text-gray-600">NIK Ayah</label>
            <input
              type="text"
              name="share"
              className="block w-full rounded-md border-gray-300 border p-3 disabled:bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="NIK"
              disabled
              value="1805091101870001"
            />
          </div>
          <div className="relative mt-1 mb-4 rounded-md shadow-sm">
            <label className="text-sm text-gray-600">NIK Ibu</label>
            <input
              type="text"
              name="share"
              className="block w-full rounded-md border-gray-300 border p-3 disabled:bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="NIK"
              disabled
              value="1805095101890001"
            />
          </div>
          <div className="relative mt-1 mb-4 rounded-md shadow-sm">
            <label className="text-sm text-gray-600">Nama Anak</label>
            <input
              type="text"
              name="share"
              className="block w-full rounded-md border-gray-300 border p-3 disabled:bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="NAMA ANAK"
              value={data.akta.name ?? ""}
              disabled={data.akta.completed}
            />
          </div>
          <div className="relative mt-1 mb-4 rounded-md shadow-sm">
            <label className="text-sm text-gray-600">Tempat Lahir</label>
            <input
              type="text"
              name="share"
              className="block w-full rounded-md border-gray-300 border p-3 disabled:bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Tempat Lahir"
              value={data.akta.tempat_lahir ?? ""}
              disabled={data.akta.completed}
            />
          </div>
          {!data.akta.completed && (
            <div className="flex justify-center">
              <button className="bg-sky-500 hover:bg-sky-400 transition-all duration-150 text-white font-bold px-5 py-2 rounded-md">
                Ajukan Akta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}