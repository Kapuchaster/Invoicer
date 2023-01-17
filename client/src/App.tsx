import { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndFrame from "./components/organisms/dndTargetBox";
import { useGetInvoice } from "./hooks/useGetInvoice";
import { Invoice } from "./pages";
import { InvoiceType } from "./types";

import "./App.css";

const App = () => {
  const { data, loading, error } = useGetInvoice();
  const [invoice, setInvoice] = useState<InvoiceType>();

  useEffect(() => {
    data && setInvoice(data.invoice);
  }, [data]);

  const handleFileDrop = useCallback(
    async (file: File) => {
      if (file) {
        const dndInvoiceText = await file.text();
        const dndInvoiceJSON = JSON.parse(dndInvoiceText) as InvoiceType;
        setInvoice(dndInvoiceJSON);
      }
    },
    [setInvoice]
  );

  if (loading) return <p>Loading</p>;
  if (error) return <p>Data Error</p>;
  if (!invoice) return <p>No Data</p>;

  return (
    <DndProvider backend={HTML5Backend}>
      <DndFrame onDrop={handleFileDrop}>
        <Invoice invoice={invoice} />
      </DndFrame>
    </DndProvider>
  );
};

export default App;
