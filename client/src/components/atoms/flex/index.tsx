interface Props {
  children: React.ReactElement;
}

const Flex = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </div>
  );
};

export default Flex;
