import Envelope from './components/Envelope';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'Mi-aș dori să te pot ține în brațe 24/7.Să vii acasă și să te găsești mereu în brațele mele.Și de fiecare dată când vin la tine, să vin cu o floare doar ca să te văd zâmbind.',
    'As vrea sa vin sa te vad in fiecare zi dar traiesc cu frica ca nu o sa ma iubesti.',
    'Vreau doar sa am grija de tine, sa te vad fericita, linistita si iubita in fiecare zi.',
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="text-slate-100 mb-2 text-2xl">
        {['', '', ''][index]}
      </p>
    </div>
  ));
  return (
    <>
      <div className="bg-red-950 w-screen flex flex-col justify-center">
        <div className="bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600">
          <div>
            <h1 className="text-slate-100 md:text-5xl text-3xl text-center red-shadow">
              Happy Valentine's Day!
            </h1>
            <p className="text-slate-100 text-center mt-10 text-xl ">
              Aici sunt mărturiile mele pentru tine ❤️  
lucruri pe care le simt cu adevărat  
și pe care mi-am dorit să ți le spun din suflet
            </p>
          </div>
          <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4">
            {envelopes}
          </div>
        </div>
      </div>
    </>
  );
};
export default Yes;
