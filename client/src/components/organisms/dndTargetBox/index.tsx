import type { CSSProperties } from "react";
import type { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

const dragSpaceContainer: CSSProperties = {
  position: "absolute",
  display: "flex",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  background: "#03055bb0",
};

const dragSpaceContent: CSSProperties = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  border: "0.1875rem dotted #3cfaa9",
  borderRadius: "1rem",
  margin: "1rem",
  fontSize: "3rem",
  color: "white",
};

const jsonFileType = "application/json";

export interface FrameProps {
  children: JSX.Element;
  onDrop: (file: File) => void;
}

/**
 * NOTE: This component works only inside <DndProvider from "react-dnd"
 */
const DndFrame = ({ children, onDrop }: FrameProps) => {
  const [{ canDrop }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: any[] }) {
        if (onDrop) {
          if (item.files.length > 1) {
            return alert("you can put only 1 file");
          }
          if (item.files[0].type !== jsonFileType) {
            return alert("file must be a json");
          }
          onDrop(item.files[0]);
        }
      },
      canDrop() {
        return true;
      },
      collect: (monitor: DropTargetMonitor) => {
        return {
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [onDrop]
  );

  const isActive = canDrop;

  return (
    <div>
      {isActive && (
        <div ref={drop} style={dragSpaceContainer}>
          <div style={dragSpaceContent}>Put your JSON file here</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DndFrame;
