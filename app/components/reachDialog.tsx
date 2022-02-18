import Dialog from "@reach/dialog";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}
export default function ReachDialog(props: Props) {
  const { children, isOpen } = props;
  return (
    <Dialog className="dialog" isOpen={isOpen} aria-label="Edit invoice">
      <h3>Edit invoice</h3>
      {children}
    </Dialog>
  );
}
