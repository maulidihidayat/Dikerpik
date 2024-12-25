import React from 'react'

export const FormSarran = () => {
  return (
    <div>
        <form className="flex flex-col mt-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-[18px] font-bold text-secondary ">Nama Lengkap:</label>
                    <input type="text" id="name" required className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary" placeholder="Nama Kamu " />
                </div>
                <div>
                    <label htmlFor="email" className="block text-[18px] font-bold text-secondary">Email:</label>
                    <input type="email" id="email" required className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary" placeholder="kamu@gmail.com" />
                </div>
                <div >
                    <label htmlFor="message" className="block text-[18px] font-bold text-secondary">Kritik & Saran:</label>
                    <textarea id="message" required className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary" rows={4} placeholder="Isi keritik dan Saran"></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px]">Kirim Saran</button>
                </div>
            </form>
    </div>
  )
}
