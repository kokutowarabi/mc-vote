import MCVotingPeriodTemplate from "@/components/mc/voting-period/mc-voting-period-template";
import MCSignInButton from "@/components/mc/auth/mc-auth-sign-in-button";

export default function MCAfterVotingPeriodGuest() {
    return (
        <MCVotingPeriodTemplate>
            <h2 className="font-bold text-xl leading-7 text-center mb-4">
                投票期間は終了しました。
            </h2>
            <p className="mb-4">サインインしていただくと投票履歴をみることができます。</p>
            <MCSignInButton />
        </MCVotingPeriodTemplate>
    );
}