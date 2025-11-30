const StatusBadge = ({ status }) => {
  let color = "bg-amberBadge";

  if (status === "TRUE") color = "bg-greenBadge";
  if (status === "FALSE") color = "bg-redBadge";

  return (
    <span className={`px-4 py-2 text-black rounded-xl font-bold ${color}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
