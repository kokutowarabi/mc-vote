import MCForm from "@/components/mc/form/mc-form";
import MCAfterVotingPeriodAuth from "@/components/mc/voting-period/mc-after-voting-period-auth";
import MCAfterVotingPeriodGuest from "@/components/mc/voting-period/mc-after-voting-period-guest";
import MCBeforeVotingPeriod from "@/components/mc/voting-period/mc-before-voting-period";
import MCDuringVotingPeriod from "@/components/mc/voting-period/mc-during-voting-period";

export default function Home() {
  return <MCForm />
  // return <MCAfterVotingPeriodAuth />;
  // return <MCAfterVotingPeriodGuest />;
  // return <MCBeforeVotingPeriod />;
  // return <MCDuringVotingPeriod />;
}
