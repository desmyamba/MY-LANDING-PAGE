"use client";
import Head from 'next/head';
import { useState } from 'react';

export default function TableLandingPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log({ name, phoneNumber, location });
    setMessage('Asante kwa kuwasiliana nasi! Tutawasiliana nawe hivi karibuni.');
    setName('');
    setPhoneNumber('');
    setLocation('');
  };

  return (
    <div>
      <Head>
        <title>Meza Bora kwa Nyumba Yako</title>
        <meta name="description" content="Gundua meza maridadi na bora kwa ajili ya nyumba yako." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans antialiased bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-blue-700">Meza Bora kwa Nyumba Yako</h1>
          </div>
        </header>

        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-4">Gundua Urembo na Ubora wa Meza Yetu</h2>
              <p className="mb-2">Karibu! Tunafurahi kukuletea meza ambayo itabadilisha muonekano wa nyumba yako na kuongeza faraja katika maisha yako ya kila siku.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sifa Muhimu:</h3>
              <ul className="list-disc list-inside">
                <li><span className="font-semibold">Ubunifu Maridadi:</span> Imeundwa kwa ustadi wa hali ya juu na kuendana na mitindo mbalimbali ya mapambo ya ndani.</li>
                <li><span className="font-semibold">Nyenzo Bora:</span> Imetengenezwa kwa kutumia mbao imara na zenye ubora wa juu, kuhakikisha uimara na maisha marefu.</li>
                <li><span className="font-semibold">Urahisi wa Matumizi:</span> Ni rahisi kusafisha na kudumisha, hivyo basi kuifanya kuwa chaguo bora kwa familia yako.</li>
                <li><span className="font-semibold">Ukubwa Sahihi:</span> Inapatikana katika ukubwa mbalimbali ili kukidhi mahitaji yako, iwe ni kwa sebule, chumba cha kulia, au ofisi.</li>
                <li><span className="font-semibold">Uimara na Utulivu:</span> Imejengwa kwa umakini ili kuhakikisha inasimama imara na salama kwa matumizi yako.</li>
              </ul>
              <p className="mt-4">Meza yetu sio tu kipande cha samani; ni sehemu muhimu ya maisha yako nyumbani.</p>
            </div>
            <div className="order-1 md:order-2">
              {/* Replace with an actual image of your table */}
              <img src="/table-placeholder.jpg" alt="Picha ya Meza" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-6">Je, Ungependa Kuwa na Meza Hii? Wasiliana Nasi!</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Jina Lako:</label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Namba Yako ya Simu:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Mahali Unapoishi:</label>
                <input
                  type="text"
                  id="location"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Tuma Maombi
              </button>
              {message && <p className="mt-4 text-green-500">{message}</p>}
            </form>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Samani Bora. Haki Zote Zimehifadhiwa.</p>
        </footer>
      </main>
    </div>
  );
}