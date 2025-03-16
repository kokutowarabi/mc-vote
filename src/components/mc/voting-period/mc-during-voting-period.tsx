import Image from "next/image";
import MCLabel from "@/components/mc/other/mc-label";
import MCSignInButton from "@/components/mc/auth/mc-auth-sign-in-button";

export default function MCDuringVotingPeriod() {
  return (
    <div className="bg-[#fff2f1] w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center max-w-[317px]  space-y-6" >
        <div>
          <MCLabel>投票日時</MCLabel>
          <p>11月2日(土)11：00～11月4日(月・祝)17：00</p>
        </div>
        <div>
          <MCLabel>注意点</MCLabel>
          <ul className="pl-4 -indent-4 space-y-2">
            <li>
              ・LINEアカウントのログインが必須となっております。
              <span className="text-muted-foreground">※期間終了後、投票結果は残りますが、アカウント情報は削除いたします。</span>
            </li>
            <li>・当日に企画が実施されていない参加団体への投票はできません。</li>
            <li>・LINEアカウントをお持ちでない場合や、企画へのお問い合わせは総合インフォメーションまでお越しください。</li>
          </ul>
        </div>
        <Image
          src={'/mc/information.svg'}
          alt="キャンパスマップ"
          width={150}
          height={150}
          className="mx-auto"
        />
        <MCSignInButton />
      </div >
    </div>
  )
}