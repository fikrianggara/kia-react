import { MaternalSelection } from "@/components/ibu-anak/MaternalSelection";
import { showFormattedDate } from "@/utils";
import { UserCircleIcon } from "@heroicons/react/24/outline"

import akta from "@/assets/ibu-anak/akta.png"

export const PersalinanDashboard = ({ data }) => {
  const user = data[0] ? data[0] : null;

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
                <MaternalSelection
                  maternalData={[
                    { kelahiran_id: 1, kelahiran_ke: 1 },
                    { kelahiran_id: 2, kelahiran_ke: 2 },
                  ]}
                />
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
                    <tr className="border">
                      <td className="p-2">Lokasi Persalinan</td>
                      <td className="w-2/4 p-2 text-green-500">Puskesmas Bidara Cina</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">Berat Bayi</td>
                      <td className="w-2/4 p-2 text-green-500">3 Kg</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">Panjang Bayi</td>
                      <td className="w-2/4 p-2 text-green-500">30 cm</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">Menangis</td>
                      <td className="w-2/4 p-2 text-green-500">Ya</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">Kondisi Bayi</td>
                      <td className="w-2/4 p-2 text-green-500">Hidup</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">Kondisi Ibu Bayi</td>
                      <td className="w-2/4 p-2 text-green-500">Hidup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 mt-4 mb-4 p-4 bg-white border rounded-lg">
        <div className="flex text-sky-800 font-medium items-center justify-between mb-2">
          <h3>Cetak Akta Kelahiran</h3>
        </div>
        <div className="p-2 bg-sky-50 rounded text-sm mb-4">
          <p className="mb-3 font-normal text-sky-500 dark:text-gray-400">
            Pembuatan akta kelahiran bekerja sama dengan dukcapil. Lengkapi beberapa data berikut untuk mencetak akta kelahiran anak
          </p>
        </div>
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
            />
          </div>
          <div className="relative mt-1 mb-4 rounded-md shadow-sm">
            <label className="text-sm text-gray-600">Tempat Lahir</label>
            <input
              type="text"
              name="share"
              className="block w-full rounded-md border-gray-300 border p-3 disabled:bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Tempat Lahir"
            />
          </div>
          <div className="flex justify-center">
            <a href={akta} download className="bg-sky-500 hover:bg-sky-400 transition-all duration-150 text-white font-bold px-5 py-2 rounded-md">
              Buat Akta
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}