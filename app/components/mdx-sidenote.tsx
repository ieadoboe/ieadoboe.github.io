interface SideNoteProps {
  children: React.ReactNode;
  type?: "note" | "warning" | "tip" | "info";
}

export default function SideNote({ children, type = "note" }: SideNoteProps) {
  const styles = {
    note: {
      border: "border-l-amber-400",
      bg: "bg-amber-50/50 dark:bg-amber-950/20",
      icon: "💡",
    },
    warning: {
      border: "border-l-red-400",
      bg: "bg-red-50/50 dark:bg-red-950/20",
      icon: "⚠️",
    },
    tip: {
      border: "border-l-green-400",
      bg: "bg-green-50/50 dark:bg-green-950/20",
      icon: "✨",
    },
    info: {
      border: "border-l-blue-400",
      bg: "bg-blue-50/50 dark:bg-blue-950/20",
      icon: "ℹ️",
    },
  };

  const style = styles[type];

  return (
    <aside
      className={`border-l-2 ${style.border} ${style.bg} pl-4 pr-4 py-3 my-6 rounded-r text-sm text-zinc-600 dark:text-zinc-400`}
    >
      <span className="mr-2" aria-hidden="true">
        {style.icon}
      </span>
      {children}
    </aside>
  );
}
