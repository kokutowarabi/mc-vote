import MCVotingPeriodTemplate from "@/components/mc/voting-period/mc-voting-period-template";
import MCLabel from "@/components/mc/other/mc-label";
import { ArrowLeft, Crown, History } from "lucide-react";
import MCHistoryContext from "@/components/mc/history/mc-history-context";

export default function MCAfterVotingPeriodAuth() {
    return (
        <>
            <MCVotingPeriodTemplate>
                <h2 className="font-bold text-xl leading-7 text-center mb-4">
                    投票期間は終了しました。
                </h2>
                <div>
                    <MCLabel>投票日時</MCLabel>
                    <p>11月2日(土)11：00～11月4日(月・祝)17：00</p>
                </div>
                <div className="mx-auto w-fit space-y-2 text-primary/80 mt-4">
                    <ViewOption Icon={History} text="投票履歴を見ることができます。" />
                    <ViewOption Icon={Crown} text="投票結果を見ることができます。" />
                </div>
            </MCVotingPeriodTemplate>
            <MCHistoryContext />
        </>
    );
};

function ViewOption({ Icon, text }: { Icon: React.FC; text: string }) {
    return (
        <div className="flex items-center">
            <div className="pr-1">
                <Icon />
            </div>
            <span className="text-sm flex items-center gap-1">
                <ArrowLeft className="text-primary/60 w-5" />
                {text}
            </span>
        </div>
    );
}