import type { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

import styles from "./styles.module.css";

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
        <div ref={drop} className={styles["drag-space"]}>
          <div className={styles["drag-space__content"]}>
            Put your JSON file here
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DndFrame;
