import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndFrame from "./components/organisms/dndTargetBox";
import { withModalContext } from "./HOC/withModal";

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  const ComponentWithModal = withModalContext(children);

  return (
    <div id="invoice" className="invoice-box">
      <DndProvider backend={HTML5Backend}>
        <DndFrame onDrop={jest.fn()}>
          <ComponentWithModal />
        </DndFrame>
      </DndProvider>
    </div>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
