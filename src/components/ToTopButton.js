import { KeyboardArrowUp } from "@mui/icons-material";

export const ToTopButton = ({ reference }) => {
  return (
    <a
      href={reference}
      className="fixed bottom-10 right-5 bg-white rounded-full p-3 shadow text-blue-400"
    >
      <KeyboardArrowUp fontSize="large"></KeyboardArrowUp>
    </a>
  );
};
