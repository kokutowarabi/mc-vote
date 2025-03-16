import MCHeader from "@/components/mc/other/mc-header";
import MCHistoryCard from "@/components/mc/history/mc-history-card";

interface MCHistoryProps {
  showHistory: boolean;
}

export default function MCHistory({ showHistory }: MCHistoryProps) {
  const transitionClasses = "transition-opacity duration-500 fixed inset-0";
  const opacityClass = showHistory ? "opacity-100" : "opacity-0";

  return (
    <div className={`${transitionClasses} ${opacityClass}`}>
      <MCHeader>投票履歴</MCHeader>
      <div className="fixed top-[50px] px-4 lg:px-10 py-8 w-full h-[calc(100svh-50px)] overflow-y-auto lg:overflow-y-hidden bg-[url('/mc/bg.svg')] bg-white flex flex-col lg:flex-row gap-3 lg:gap-[2vw] lg:justify-center lg:items-center">
        <MCHistoryCard date="2024-11-02" />
        <MCHistoryCard date="2024-11-03" />
        <MCHistoryCard date="2024-11-04" />
      </div>
    </div>
  )
}
