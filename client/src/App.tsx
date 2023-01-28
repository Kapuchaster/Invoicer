import { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndFrame from "./components/organisms/dndTargetBox";
import { useGetInvoice } from "./hooks/useGetInvoice";
import { Invoice } from "./pages";
import isInvoiceType from "./services/validator";
import { Invoice as InvoiceType } from "./__generated__/operations-types";

const App = () => {
  const { data, loading, error } = useGetInvoice();
  const [invoice, setInvoice] = useState<InvoiceType>();

  useEffect(() => {
    data && setInvoice(data.invoice);
  }, [data]);

  useEffect(() => {
    error && alert(`Error: ${error}`);
  }, [error]);

  const handleFileDrop = useCallback(
    async (file: File) => {
      if (file) {
        const dndInvoiceText = await file.text();
        const dndInvoiceJSON: unknown = JSON.parse(dndInvoiceText);
        if (isInvoiceType(dndInvoiceJSON)) {
          setInvoice(dndInvoiceJSON);
        } else {
          alert("json file is not of Invoice type");
        }
      }
    },
    [setInvoice]
  );

  if (loading) return <p>Loading</p>;

  return (
    <DndProvider backend={HTML5Backend}>
      <DndFrame onDrop={handleFileDrop}>
        {invoice ? (
          <Invoice invoice={invoice} />
        ) : (
          <p>Drag Invoice file Here</p>
        )}
      </DndFrame>
    </DndProvider>
  );
};

export default App;
