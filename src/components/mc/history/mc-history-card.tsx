import { Card, CardContent } from "@/components/ui/card";
import MCLabel from "@/components/mc/other/mc-label";

interface MCHistoryCardProps {
  date: string;
}

export default function MCHistoryCard({ date }: MCHistoryCardProps) {
  return (
    <Card className="w-full min-w-[295px] h-[675px]">
      <CardContent>
        <h2 className="font-bold text-xl mb-6">{date}</h2>
        <div className="space-y-6">
          <div>
            <MCLabel>模擬店部門</MCLabel>
            <p className="text-muted-foreground ml-4 mt-2">投票されていません。</p>
          </div>
          <div>
            <MCLabel>屋外ステージ部門</MCLabel>
            <p className="text-muted-foreground ml-4 mt-2">投票されていません。</p>
          </div>
          <div>
            <MCLabel>教室部門</MCLabel>
            <p className="text-muted-foreground ml-4 mt-2">投票されていません。</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}