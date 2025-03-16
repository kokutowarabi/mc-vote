import MCVotingPeriodTemplate from "@/components/mc/voting-period/mc-voting-period-template";
import MCLabel from "@/components/mc/other/mc-label";

export default function MCBeforeVotingPeriod() {
    return (
        <MCVotingPeriodTemplate>
            <h2 className="font-bold text-xl leading-7 text-center mb-4">
                投票期間前です。
                <br />
                しばらくお待ちください。
            </h2>
            <div>
                <MCLabel>投票日時</MCLabel>
                <p>11月2日(土)11：00～11月4日(月・祝)17：00</p>
            </div>
        </MCVotingPeriodTemplate>
    );
};