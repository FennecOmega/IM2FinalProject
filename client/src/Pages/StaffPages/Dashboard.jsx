import "../../index.css";

function Dashboard() {
  return (
    <>
       <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Still making</h1>
        <p className="text-gray-700 mb-8">
          description
        </p>
        <div className="flex justify-center">
          <img
            src="" 
            alt="Banana Cupcakes"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
