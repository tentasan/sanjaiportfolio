const CONTACT = {
    phoneno: "+91 9600472537",
    email: "Sanjaigunasekaran2004@gmail.com",
  };
  
  const Contacts = () => {
    return (
      <div className="border-t border-stone-900 pb-20">
        <h2 className="my-10 text-center text-4xl text-white font-bold">
          Get in Touch
        </h2>
        <div className="text-center tracking-tighter text-gray-400">
          <p className="my-4">{CONTACT.phoneno}</p>
          <a href={`mailto:${CONTACT.email}`} className="border-b text-cyan-400">
            {CONTACT.email}
          </a>
        </div>
      </div>
    );
  };
  
  export default Contacts;
  