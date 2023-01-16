import { useGetInvoice } from "./hooks/useGetInvoice";
import { Invoice } from "./pages";

import "./App.css";

function App() {
  const { data, loading, error } = useGetInvoice();

  if (loading) return <p>Loading</p>;
  if (error) return <p>Data Error</p>;
  if (!data) return <p>No Data</p>;

  return <Invoice invoice={data.invoice} />;
}

export default App;
