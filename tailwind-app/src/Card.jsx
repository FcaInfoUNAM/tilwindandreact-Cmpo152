const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
      <h2 className="text-xl font-bold mb-2">Hola Mundo</h2>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum provident repudiandae impedit dolorum quibusdam tempora reiciendis sint asperiores illum adipisci vero velit iure veritatis quas, vitae pariatur dolores labore placeat?
      </p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        Pícale
      </button>
    </div>
  );
};

export default Card;